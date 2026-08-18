"use client"
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { removeItemToCart, updateCartItemQuantity } from '@/app/api/cart/mutation'
import { notifyCartUpdate } from '@/libs/cartEvent'

interface CartListProps {
	cartItems: any[]
	onCartUpdated?: () => void
}

const CartList: React.FC<CartListProps> = ({ cartItems, onCartUpdated }) => {

	const [cartData, setCartData] = useState<any[]>(cartItems)
	const [selectedItem, setSelectedItem] = useState("")

	const handleItemClick = (item: any) => {
		setSelectedItem((prevState) => {
			if (prevState) {
				if (prevState === item.id) {
					prevState = ""
				} else {
					prevState = item.id
				}
			} else {
				prevState = item.id
			}
			return prevState
		})
	}

	const handleDeleteClick = async (item: any) => {
		const cartLocalData = localStorage.getItem("donruentpizza:shopify:cart") || localStorage.getItem(process.env.NEXT_PUBLIC_SHOPIFY_LOCAL_STORAGE_ITEM_NAME as string)

		if (cartLocalData) {
			const cart = JSON.parse(cartLocalData)
			const res = await removeItemToCart(cart.id, [item.id])
			setCartData((prev) => prev.filter((cartItem) => cartItem.node.id !== item.id))
			onCartUpdated?.()
			
			const updatedCart = res?.cartLinesRemove?.cart
			notifyCartUpdate({
				id: cart.id,
				totalQuantity: updatedCart?.totalQuantity
			})
		}
	}

	const handleQuantityChange = async (item: any, newQuantity: number) => {
		if (newQuantity < 1) return
		const cartLocalData = localStorage.getItem("donruentpizza:shopify:cart") || localStorage.getItem(process.env.NEXT_PUBLIC_SHOPIFY_LOCAL_STORAGE_ITEM_NAME as string)

		if (cartLocalData) {
			const cart = JSON.parse(cartLocalData)
			const res = await updateCartItemQuantity(cart.id, item.id, newQuantity)
			setCartData((prev) =>
				prev.map((cartItem) => {
					if (cartItem.node.id === item.id) {
						const unitPrice = parseFloat(cartItem.node.merchandise.priceV2.amount)
						const newTotal = (unitPrice * newQuantity).toFixed(2)
						return {
							...cartItem,
							node: {
								...cartItem.node,
								quantity: newQuantity,
								estimatedCost: {
									...cartItem.node.estimatedCost,
									totalAmount: {
										...cartItem.node.estimatedCost?.totalAmount,
										amount: newTotal,
									},
								},
							},
						}
					}
					return cartItem
				})
			)
			onCartUpdated?.()

			const updatedCart = res?.cartLinesUpdate?.cart
			notifyCartUpdate({
				id: cart.id,
				totalQuantity: updatedCart?.totalQuantity
			})
		}
	}

	useEffect(() => {
		setCartData(cartItems || [])
	}, [cartItems])

	if (!cartData || cartData.length === 0) {
		return (
			<div className="w-full text-center py-10">
				<p className="text-xl text-gray-500">Your cart is currently empty.</p>
			</div>
		)
	}

	return (
		<>
			<ul className="col-name h-auto w-full flex items-center border-b border-colorSecondary pb-2">
				<li className='text-[1.1rem] w-[50%] font-semibold'>Product</li>
				<li className='text-center text-[1.1rem] w-[20%] sm:w-[16.6%] font-semibold'>Subtotal</li>
				<li className='text-center text-[1.1rem] w-[20%] sm:w-[16.6%] font-semibold'>Quantity</li>
				<li className='text-center text-[1.1rem] w-[20%] sm:w-[16.6%] font-semibold'>Total</li>
			</ul>
			<ul className="cart-list w-full h-auto flex flex-col">
				{cartData.map((item) => {
					return (
						<li key={item.node.id} className='w-full h-[70px] relative flex border-b border-colorSecondary'>
							{/* CONTENT */}
							<CartItem 
								item={item.node}
								active={selectedItem === item.node.id}
								onClick={() => handleItemClick(item.node)}
								onDeleteClick={() => handleDeleteClick(item.node)}
								onQuantityChange={(newQty) => handleQuantityChange(item.node, newQty)}
							/>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default CartList