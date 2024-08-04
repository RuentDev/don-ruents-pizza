"use client"
import IconButton from '@/components/Buttons/IconButton';
import React from 'react'
import Image from 'next/image';

interface CartItemProps{
  item: {
		quantity: number;
		estimatedCost: {
			subtotalAmount?: {
				amount?: string;
				currencyCode?: string;
			};
			totalAmount?: {
				amount?: string;
				currencyCode?: string;
			},
		};
		merchandise: {
			title: string;
			priceV2: {
				amount: string;
				currencyCode: string
			}
			product: {
				title: string;
				featuredImage: {
					url: string
				}
			}
		}
	}
	onClick: () => void;
	onDeleteClick: () => void;
	active: boolean
}

const CartItem: React.FC<CartItemProps> = ({item, active, onClick, onDeleteClick}) => {

  return (
    <>
			<div className={`cart-item w-full h-full bg-white flex items-center justify-center ${active ? "-translate-x-[70px]" : ""} ease-in-out duration-300 absolute z-10 cursor-pointer`} onClick={onClick}>
				{/* IMAGE & NAME */}
				<div className="image-details-container w-[50%] h-full flex items-center gap-2">
					{/* IMAGE */}
					<div className="image-container w-[50px] h-[50px] overflow-hidden">
						<Image 
							width={100}
							height={100}
							alt={item.merchandise.title}
							src={item.merchandise.product.featuredImage.url}
							className="rounded-full w-full h-full"
						/>
					</div>
					{/* DETAILS */}
					<div className="details-container w-full">
						<h3 className='text-colorPrimary'>{item.merchandise.product.title}</h3>
					</div>
				</div>
				{/* PRICE */}
				<div className="price-container h-auto px-3 sm:w-[16.6%]">
					<p className='text-center text-colorPrimary'>{item.merchandise.priceV2.amount} {item?.estimatedCost?.subtotalAmount?.currencyCode}</p>
				</div>
				{/* QUANTITY */}
				<div className="quantity-container h-auto px-3 sm:w-[16.6%]">
					<p className='text-center text-colorPrimary'>{item.quantity}</p>
				</div>
				{/* TOTAL */}
				<div className="total-container h-auto px-3 sm:w-[16.6%]">
					<p className='text-center text-colorPrimary'>{item?.estimatedCost?.totalAmount?.amount} {item?.estimatedCost?.totalAmount?.currencyCode}</p>
				</div>
			</div>
			{/* DELETE */}
			<div className="delete-container h-full w-[70px] absolute right-0">
				<IconButton
					size={25} 
					color='white' 
					iconName="trash" 
					onClick={onDeleteClick}
					className='cursor-pointer bg-red-700 h-full w-full' 
				/>
			</div>
		</>
  )
}

export default CartItem