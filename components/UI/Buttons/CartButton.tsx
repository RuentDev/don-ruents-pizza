"use client"
import React, { FC, useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { createCart } from '@/app/api/cart/mutation'
import { getCartItems } from '@/app/api/cart/query'
import { onCartUpdate, CartUpdateDetail } from '@/libs/cartEvent'

interface CartButtonProps {
  onClick?: () => void
}

const CartButton: FC<CartButtonProps> = ({ onClick }) => {
  const [cartItems, setCartItems] = useState<number>(0)
  const [isBouncing, setIsBouncing] = useState<boolean>(false)

  const fetchCartData = useCallback(async () => {
    try {
      const localCartJsonData = localStorage.getItem("donruentpizza:shopify:cart")

      if (!localCartJsonData) {
        const cartData = await createCart()
        localStorage.setItem("donruentpizza:shopify:cart", JSON.stringify(cartData))
        return
      }

      const localCartParseData = JSON.parse(localCartJsonData)
      const cart = await getCartItems(localCartParseData.id)
      
      const totalCount = cart?.totalQuantity ?? (
        cart?.lines?.edges?.reduce((acc: number, line: { node?: { quantity?: number } }) => {
          return acc + (line?.node?.quantity || 1)
        }, 0) || 0
      )

      setCartItems(totalCount)
    } catch (err) {
      console.error("Error fetching cart items count:", err)
    }
  }, [])

  useEffect(() => {
    // Initial fetch on mount
    fetchCartData()

    // Real-time listener for cart updates across the application
    const unsubscribe = onCartUpdate((detail?: CartUpdateDetail) => {
      const totalQty = detail?.totalQuantity
      const addedQty = detail?.addedQuantity

      // 1. Instant Optimistic State Update
      if (totalQty !== undefined) {
        setCartItems(totalQty)
      } else if (addedQty !== undefined) {
        setCartItems(prev => prev + addedQty)
      } else {
        setCartItems(prev => prev + 1)
      }

      // 2. Trigger Scooter Bounce Animation
      setIsBouncing(true)
      const timer = setTimeout(() => {
        setIsBouncing(false)
      }, 1200)

      // 3. Background Sync with Shopify
      fetchCartData()

      return () => clearTimeout(timer)
    })

    return () => {
      unsubscribe()
    }
  }, [fetchCartData])

  return (
    <div 
      title="Cart" 
      className={`mx-2 sm:mx-3 bg-transparent flex items-center justify-center cursor-pointer relative transition-transform duration-300 ${
        isBouncing ? 'scale-125' : 'hover:scale-105'
      }`} 
      onClick={onClick}
    >
      {/* Animated Counter Badge */}
      <span 
        className={`cart-count absolute -top-2.5 -right-2 text-primaryTextColor font-black text-[11px] bg-colorSecondary rounded-full min-w-[20px] h-[20px] px-1 flex items-center justify-center shadow-md transition-all duration-300 z-10 ${
          isBouncing ? 'scale-125 bg-amber-400 animate-bounce' : ''
        }`}
      >
        {cartItems}
      </span>

      {/* Motorcycle Delivery Scooter Icon Wrapper */}
      <div className={`icon-container w-[30px] h-[30px] sm:w-[32px] sm:h-[32px] overflow-hidden ${isBouncing ? 'animate-bounce' : ''}`}>
        <Image 
          width={100} 
          height={100} 
          alt="cart delivery scooter" 
          className="h-full w-full object-contain filter drop-shadow-sm"
          src="https://cdn.shopify.com/s/files/1/0883/7867/1408/files/motorcycle-delivery-single-box-svgrepo-com.svg" 
        />
      </div>
    </div>
  )
}

export default React.memo(CartButton)
