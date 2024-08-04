"use client"
import { addItemToCart } from '@/app/api/cart/mutation'
import Cards from "../Cards"
import { Product } from '@/utils/types'
import React from 'react'



interface ProductMenyProps {
	products?: Product[]
}
const ProductMenu: React.FC<ProductMenyProps> = ({ products }) => {

	const [data, setData] = React.useState(products || [])


	const handleLikeClick = (product: Product) => { }


	const handleAddToCartClick = async (product: Product) => {
		const localCartJsonData = localStorage.getItem("donruentpizza:shopify:cart")

		if (localCartJsonData) {
			const cart = JSON.parse(localCartJsonData)
			const addTocartRes = await addItemToCart(
				cart.id,
				product.variants.nodes[0].id,
				1 //quantity
			)
		}

	}

	return (
		<div className='product-list-1 w-full h-auto grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 select-none'>
			{data.map((product) => {
				return (
					<React.Fragment key={product.id}>
						<Cards.ProductCard
							name={product.title}
							price={product.priceRange.minVariantPrice.amount}
							// isLiked={product.isLiked}
							// ratings={product.ratings}
							imagePath={product.featuredImage.url}
							description={product.description}
							onClick={() => handleLikeClick(product)}
							onAddToCart={() => handleAddToCartClick(product)}
						/>
					</React.Fragment>
				)
			})}
		</div>
	)
}

export default ProductMenu