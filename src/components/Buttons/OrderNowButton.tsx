"use client"
import React from 'react'
import { Icon } from '..'

const OrderNowButton = () => {
  return (
    <button className='bg-colorSecondary px-5 py-2 rounded-md flex gap-2'>
      <Icon iconName='fa-phone' size={20} />
      Order Now
    </button>
  )
}

export default OrderNowButton