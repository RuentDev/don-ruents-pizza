"use client"
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { removeItemToCart } from '@/app/api/cart/mutation'
interface CartListProps {
	cartItems: any[]
}

const CartList: React.FC<CartListProps> = ({ cartItems }) => {


	const [cartData, setCartData] = useState<any[]>(cartItems)
	const [selectedItem, setSelectedItem] = useState("")

	const handleItemClick = (item: any) => {
		setSelectedItem((prevState) => {

			if(prevState){
				if(prevState === item.id){
					prevState = ""
				}else{
					prevState = item.id
				}
			}else{
				prevState = item.id
			}

			return prevState
		})
	}

	const handleDeleteClick = async (item: any) => {

		const cartLocalData = localStorage.getItem(process.env.SHOPIFY_LOCAL_STORAGE_ITEM_NAME as string)

		if(cartLocalData){
			const cart = JSON.parse(cartLocalData)
			const removeRes = await removeItemToCart(cart.id, [item.id])
			setCartData(cartData.filter((cartItem) => cartItem.node.id !== item.id))
		}


	}


	 useEffect(() => {
		console.log(cartItems)
    setCartData(cartItems)
  }, [cartItems])

	
	return (
		<>
			<ul className="col-name h-auto w-full flex items-center border-b border-colorSecondary pb-2">
				<li className='text-[1.1rem] w-[50%]'>Product</li>
				<li className='text-center text-[1.1rem] w-[20%] sm:w-[16.6%]'>Subtotal</li>
				<li className='text-center text-[1.1rem] w-[20%] sm:w-[16.6%]'>Quantity</li>
				<li className='text-center text-[1.1rem] w-[20%] sm:w-[16.6%]'>Total</li>
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
							/>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default CartList