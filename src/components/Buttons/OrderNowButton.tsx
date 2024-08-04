"use client"
import React from 'react'
import Icon from "../Icon"

interface OrderNowButtonProps{
  bg: string
  bgHover: string
  textColor: string
  textHoverColor:  string
  onClick?: (e: MouseEvent) => void
}

const OrderNowButton: React.FC<OrderNowButtonProps> = ({bg, bgHover, textColor, textHoverColor}) => {
  return (
    <button className={`bg-${bg} hover:bg-${bgHover} text-${textColor} hover:text-${textHoverColor} px-5 py-2 rounded-md flex gap-2 ease-in-out duration-300`}>
      <Icon 
        iconName={{prefix: "fas", iconName: "phone"}}
        size={20} 
      />
      Order Now
    </button>
  )
}

export default OrderNowButton