"use client"
import { addItemToCart, createCart } from '@/app/api/cart/mutation'
import Cards from "../Cards"
import { Product } from '@/libs/types'
import React, { useState, useCallback } from 'react'
import { notifyCartUpdate } from '@/libs/cartEvent'

interface ProductMenuProps {
	products?: Product[]
}

const ProductMenu: React.FC<ProductMenuProps> = ({ products }) => {
	const [data] = useState(products || [])
	const [loadingProductId, setLoadingProductId] = useState<string | null>(null)

	const handleAddToCartClick = useCallback(async (product: Product) => {
		const variantId = product?.variants?.nodes?.[0]?.id
		if (!variantId) {
			console.error("No valid product variant node found for:", product.title)
			return
		}

		try {
			setLoadingProductId(product.id)
			const localCartJsonData = localStorage.getItem("donruentpizza:shopify:cart")
			let cartId = ""

			if (localCartJsonData) {
				try {
					const cart = JSON.parse(localCartJsonData)
					cartId = cart?.id || ""
				} catch {
					cartId = ""
				}
			}

			if (!cartId) {
				const cartData = await createCart()
				if (cartData?.id) {
					cartId = cartData.id
					localStorage.setItem("donruentpizza:shopify:cart", JSON.stringify(cartData))
				} else {
					console.error("Failed to create Shopify cart")
					return
				}
			}

			const addTocartRes = await addItemToCart(cartId, variantId, 1)
			const updatedCart = addTocartRes?.cartLinesAdd?.cart

			// Instantly notify header cart button
			notifyCartUpdate({
				id: cartId,
				totalQuantity: updatedCart?.totalQuantity,
				addedQuantity: 1
			})
		} catch (err) {
			console.error("Error adding product to cart:", err)
		} finally {
			setLoadingProductId(null)
		}
	}, [])

	return (
		<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch justify-center">
				{data.map((product) => {
					return (
						<li key={product.id} className="flex">
							<Cards.ProductCard
								name={product.title}
								price={product.priceRange.minVariantPrice.amount}
								imagePath={product.featuredImage?.url || ''}
								description={product.description}
								onAddToCart={() => handleAddToCartClick(product)}
								isAdding={loadingProductId === product.id}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default React.memo(ProductMenu)