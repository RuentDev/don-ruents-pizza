'use client'
import CartList from '@/components/UI/List/CartList/CartList'
import Buttons from '@/components/UI/Buttons'
import React, { useEffect, useState } from 'react'
import { getCartItems } from '../api/cart/query'

const CartPage = () => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [checkoutUrl, setCheckoutUrl] = useState<string>('')
  const [subtotal, setSubtotal] = useState<number>(0)
  const [currencyCode, setCurrencyCode] = useState<string>('USD')
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchCartData = async () => {
    setIsLoading(true)
    const localCartData = localStorage.getItem("donruentpizza:shopify:cart") || localStorage.getItem(process.env.NEXT_PUBLIC_SHOPIFY_LOCAL_STORAGE_ITEM_NAME as string)

    if (localCartData) {
      try {
        const cartData = JSON.parse(localCartData)
        const cart = await getCartItems(cartData.id)

        if (cart) {
          setCartItems(cart?.lines?.edges || [])
          setCheckoutUrl(cart?.checkoutUrl || '')

          let computedTotal = 0
          let currency = 'USD'
          cart?.lines?.edges?.forEach((edge: any) => {
            const lineCost = parseFloat(edge?.node?.estimatedCost?.totalAmount?.amount || '0')
            computedTotal += lineCost
            if (edge?.node?.estimatedCost?.totalAmount?.currencyCode) {
              currency = edge.node.estimatedCost.totalAmount.currencyCode
            }
          })
          setSubtotal(computedTotal)
          setCurrencyCode(currency)
        }
      } catch (err) {
        console.error('Failed to load cart data:', err)
      }
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchCartData()
  }, [])

  const handleCheckout = () => {
    if (checkoutUrl) {
      window.location.href = checkoutUrl
    }
  }

  return (
    <div className='h-auto w-full pb-20'>
      <div className="outer-container h-auto w-full">
        <div className="inner-container h-auto w-full">
          {/* BANNER */}
          <div className="cart-banner w-full h-[30vh] md:h-[40vh] bg-banner1 bg-cover bg-center bg-no-repeat relative">
            <div className="overlay absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wider">Your Cart</h1>
            </div>
          </div>

          {/* CART CONTENT */}
          <div className="max-w-6xl mx-auto px-5 py-10">
            {isLoading ? (
              <div className="text-center py-20">
                <p className="text-gray-500 text-lg">Loading your cart...</p>
              </div>
            ) : (
              <>
                {/* CART TABLE */}
                <div className="cart-table h-auto mb-10">
                  <CartList cartItems={cartItems} onCartUpdated={fetchCartData} />
                </div>

                {/* BOTTOM SUMMARY & CHECKOUT */}
                {cartItems.length > 0 && (
                  <div className="bottom-container flex flex-col lg:flex-row justify-between items-start gap-8 pt-8 border-t border-gray-200">
                    {/* LEFT SIDE - NOTES / REFRESH */}
                    <div className="left-side-container w-full lg:w-1/2">
                      <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
                        <h4 className="text-lg font-semibold text-colorPrimary mb-2">Special Delivery Notes</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          All pizzas are fresh baked to order. Proceed to checkout to choose pickup or delivery address.
                        </p>
                      </div>
                    </div>

                    {/* RIGHT SIDE - TOTALS & CHECKOUT */}
                    <div className="right-side-container w-full lg:w-5/12 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-xl font-bold text-colorPrimary border-b pb-3 mb-4">Order Summary</h3>
                      <div className="flex justify-between items-center py-2 text-gray-700">
                        <span>Subtotal</span>
                        <span className="font-semibold text-colorPrimary">
                          {subtotal.toFixed(2)} {currencyCode}
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 text-gray-700 border-b pb-4">
                        <span>Taxes & Shipping</span>
                        <span className="text-sm text-gray-500">Calculated at checkout</span>
                      </div>
                      <div className="flex justify-between items-center py-4 text-lg font-bold text-colorPrimary">
                        <span>Estimated Total</span>
                        <span className="text-2xl font-black text-colorSecondary">
                          {subtotal.toFixed(2)} {currencyCode}
                        </span>
                      </div>

                      <div className="mt-6">
                        <Buttons.TextIconButton
                          size="lg"
                          iconSpace={2}
                          text="Proceed to Checkout"
                          bg="colorSecondary"
                          iconName="bag-shopping"
                          onClick={handleCheckout}
                          className="w-full justify-center text-center font-bold uppercase tracking-wider py-3"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage