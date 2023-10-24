import React from 'react'
import { Icon } from '..'

type CartButtonProps = {
  onClick?: () => void
}

const CartButton = ({ onClick }: CartButtonProps) => {


  return (
    <button title='Cart' className="mx-5 bg-transparent flex items-center justify-center hover:text-colorPrimary" onClick={onClick}>
      <Icon iconName='fa-solid fa-bag-shopping' size={30} color='white' />
    </button>
  )
}

export default CartButton