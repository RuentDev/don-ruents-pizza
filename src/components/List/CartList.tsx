"use client"
import React from 'react'
import IconButton from '../Buttons/IconButton'

interface CartListProps {
	cartItems: any[]
}

const CartList: React.FC<CartListProps> = ({ cartItems }) => {
	return (
		<>
			<ul className="col-name h-auto w-full flex items-center border-b border-colorSecondary pb-2">
				<li className='text-[1.1rem] w-[50%]'>Product</li>
				<li className='text-center text-[1.1rem] w-[20%] sm:w-[16.6%]'>Price</li>
				<li className='text-center text-[1.1rem] w-[20%] sm:w-[16.6%]'>Quantity</li>
				<li className='text-center text-[1.1rem] w-[20%] sm:w-[16.6%]'>Total</li>
			</ul>
			<ul className="cart-list w-full h-auto flex flex-col">
				{cartItems.map((items, index) => {
					console.log(items)
					return (
						<li key={index + 1} className='w-full h-[70px] relative flex border-b border-colorSecondary'>
							{/* CONTENT */}
							<div className="cart-item w-full h-full bg-white flex items-center hover:-translate-x-[70px] ease-in-out duration-300 absolute z-10">
								{/* IMAGE & NAME */}
								<div className="image-details-container w-[50%] h-full flex items-center">
									{/* IMAGE */}
									<div className="image-container w-[70px] h-[70px]">
										{/* <Image /> */}
									</div>
									{/* DETAILS */}
									<div className="details-container w-full">
										<h3 className='text-colorPrimary'>Product Name</h3>
									</div>
								</div>
								{/* PRICE */}
								<div className="price-container h-auto px-3 sm:w-[16.6%]">
									<p className='text-center text-colorPrimary'>₱100.00</p>
								</div>
								{/* QUANTITY */}
								<div className="quantity-container h-auto px-3 sm:w-[16.6%]">
									<p className='text-center text-colorPrimary'></p>
								</div>
								{/* TOTAL */}
								<div className="total-container h-auto px-3 sm:w-[16.6%]">
									<p className='text-center text-colorPrimary'>₱100.00</p>
								</div>
							</div>
							{/* DELETE */}
							<div className="delete-container h-full w-[70px] absolute right-0">
								<IconButton className='cursor-pointer bg-red-700 h-full w-full' color='white' iconName='fa-solid fa-trash' size={25} />
							</div>
						</li>
					)
				})}
			</ul>
		</>
	)
}

export default CartList