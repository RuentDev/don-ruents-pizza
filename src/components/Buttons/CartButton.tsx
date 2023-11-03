import React from 'react'
import { Icon } from '..'
import Image from 'next/image'

type CartButtonProps = {
  cartItemCount?: number
  onClick?: () => void
}

const CartButton = ({ onClick, cartItemCount }: CartButtonProps) => {
  
  return (
    <div title='Cart' className="mx-5 bg-transparent flex items-center justify-center cursor-pointer relative" onClick={onClick}>
      <span className="cart-count absolute -top-4 left-0 text-white">{cartItemCount ? cartItemCount : 0}</span>
      <div className="icon-container w-[30px] h-[30px] overflow-hidden">
          <Image src="/svg/motorcycle-delivery-single-box-svgrepo-com.svg" alt='cart svg' width={100} height={100} />
      </div>
    </div>
  )
}

export default CartButton