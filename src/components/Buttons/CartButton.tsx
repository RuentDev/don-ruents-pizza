import React from 'react'
import { Icon } from '..'

type CartButtonProps = {
  cartItemCount?: number
  onClick?: () => void
}

const CartButton = ({ onClick, cartItemCount }: CartButtonProps) => {


  return (
    <div title='Cart' className="mx-5 bg-transparent flex items-center justify-center relative" onClick={onClick}>
      <span className="cart-count absolute -top-4 right-0 text-white">{cartItemCount ? cartItemCount : 0}</span>
      <Icon iconName='fa-solid fa-bag-shopping' size={30} color='white' />
    </div>
  )
}

export default CartButton