'use client'
import CartList from '@/components/UI/List/CartList/CartList'
import React, { useEffect, useState } from 'react'
import { getCartItems } from '../api/cart/query'

const CartPage = () => {

  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    async function getCartData() {
      const localCartData = localStorage.getItem("donruentpizza:shopify:cart")

      if (localCartData) {
        const cartData = JSON.parse(localCartData)

        const cart = await getCartItems(cartData.id)
        
        setCartItems(cart?.lines?.edges)


      }
    }

    getCartData()


  }, [])


  return (
    <div className='h-auto w-full pb-20'>
      <div className="outer-container h-auto w-full">
        <div className="inner-container h-auto w-full">
          {/* BANNER */}
          <div className="cart-banner w-full h-[50vh] md:h-[60vh] xl:h-[40vh] bg-banner1 bg-cover bg-center bg-no-repeat">
            <div className="overlay relative w-full h-full bg-overlay-5">
              {/* CENTER CONTENT */}
              {/* <div className="center-content h-auto sm:w-[92%] md:w-[95%] lg:w-[70%] absolute top-0 left-1/2 transform -translate-x-1/2 -bottom-[35%] bg-white p-5 hidden md:flex drop-shadow-md">
                <div className="image-contaianer w-full">
                  IMAGE
                </div>
                <div className="banner-content w-full">
                  <h3 className='text-[2rem] text-colorPrimary'>FREE DELIVERY</h3>
                  <p className='my-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod beatae est ab veniam eligendi. Sequi, consequuntur fugiat. Maxime, excepturi alias.</p>
                </div>
              </div> */}
            </div>
          </div>
          {/* CART TABLE */}
          <div className="cart-table h-auto md:mt-[150px] mx-auto p-5">
            {cartItems && <CartList cartItems={cartItems} />}
          </div>
          {/* BOTTOM CONTENT */}
          <div className="bottom-container">
            {/* LEFT SIDE */}
            <div className="left-side-container">
              {/* COUPON INPUT */}
              {/* UPDATE CART BUTTON */}
            </div>
            {/* RIGHT SIDE */}
            <div className="right-side-container">
              {/* TOTAL */}
              {/* PAYMENT METHOD */}
              {/* PLACE ORDER BUTTON */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage