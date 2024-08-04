"use client"
import React from 'react'
import Icon from "../Icon"


interface OrderNowButtonProps{}
const OrderNowButton: React.FC<OrderNowButtonProps> = () => {
  return (
    <button className='bg-colorSecondary px-5 py-2 rounded-md flex gap-2'>
      <Icon 
        iconName={{prefix: "fas", iconName: "phone"}}
        size={20} 
      />
      Order Now
    </button>
  )
}

export default OrderNowButton