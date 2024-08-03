"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { createCart } from '@/app/api/cart/mutation'
import { getCartItems } from '@/app/api/cart/query'

interface CartButtonProps {
  onClick?: () => void
}

const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {

  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    async function createCartData() {
      const localCartJsonData = localStorage.getItem("donruentpizza:shopify:cart")


      if (!localCartJsonData) {
        const cartData = await createCart()
        localStorage.setItem("donruentpizza:shopify:cart", JSON.stringify(cartData))
        return
      }

      const localCartParseData = JSON.parse(localCartJsonData)
      const cart = await getCartItems(localCartParseData.id)

      setCartItems(cart?.lines?.edges.length)

    }


    createCartData()

  }, [])


  return (
    <div title='Cart' className="mx-5 bg-transparent flex items-center justify-center cursor-pointer relative" onClick={onClick}>
      <span className="cart-count absolute -top-5 -left-1 text-colorPrimary bg-colorSecondary rounded-full px-1">{cartItems ? cartItems : 0}</span>
      <div className="icon-container w-[30px] h-[30px] overflow-hidden">
        <Image src="/svg/motorcycle-delivery-single-box-svgrepo-com.svg" alt='cart svg' width={100} height={100} />
      </div>
    </div>
  )
}

export default CartButton