import IconButton from '@/components/Buttons/IconButton'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-screen w-full pt-[150px] px-10'>
      <div className="outer-container h-auto w-full">
        <div className="inner-container h-auto w-full">
          {/* CART TABLE */}
          <div className="cart-table h-auto w-[60%] mx-auto">
            <ul className="col-name h-auto w-full flex gap-2 border-b">
              <li className='text-[1.5rem] w-[50%] p-3'>Product</li>
              <li className='text-center text-[1.5rem] w-[12.5%] p-3'>Price</li>
              <li className='text-center text-[1.5rem] w-[12.5%] p-3'>Quantity</li>
              <li className='text-center text-[1.5rem] w-[12.5%] p-3'>Total</li>
              <li className='text-center text-[1.5rem] w-[12.5%] p-3'>Delete</li>
            </ul>
            <ul className="cart-list w-full h-auto flex flex-col items-center justify-center">
              <li className='w-full h-auto py-5 flex gap-2 border-b'>
                {/* IMAGE & NAME */}
                <div className="image-details-container w-[50%] m-auto px-3 flex">
                  {/* IMAGE */}
                  <div className="image-container">
                    {/* <Image /> */}
                  </div>
                  {/* DETAILS */}
                  <div className="details-container">
                    <h3 className='text-colorPrimary'>Product Name</h3>
                    <p className='text-secondaryTextColor'>Description</p>
                  </div>
                </div>
                {/* PRICE */}
                <div className="price-container w-[12.5%] h-auto m-auto px-3">
                  <p className='text-center text-colorPrimary txt'>₱100.00</p>
                </div>
                {/* QUANTITY */}
                <div className="quantity-container w-[12.5%] h-auto m-auto px-3">
                  <p className='text-center text-colorPrimary'>1</p>
                </div>
                {/* TOTAL */}
                <div className="total-container w-[12.5%] h-auto m-auto px-3">
                  <p className='text-center text-colorPrimary'>₱100.00</p>
                </div>
                {/* DELETE */}
                <div className="delete-container w-[12.5%] h-auto m-auto">
                  <IconButton className='cursor-pointer' color='red' iconName='fa-solid fa-trash' size={25} />
                </div>
              </li>
              <li className='w-full h-auto py-5 flex gap-2 border-b'>
                {/* IMAGE & NAME */}
                <div className="image-details-container w-[50%] m-auto px-3 flex">
                  {/* IMAGE */}
                  <div className="image-container">
                    {/* <Image /> */}
                  </div>
                  {/* DETAILS */}
                  <div className="details-container">
                    <h3 className='text-colorPrimary'>Product Name</h3>
                    <p className='text-secondaryTextColor'>Description</p>
                  </div>
                </div>
                {/* PRICE */}
                <div className="price-container w-[12.5%] h-auto m-auto px-3">
                  <p className='text-center text-colorPrimary txt'>₱100.00</p>
                </div>
                {/* QUANTITY */}
                <div className="quantity-container w-[12.5%] h-auto m-auto px-3">
                  <p className='text-center text-colorPrimary'>1</p>
                </div>
                {/* TOTAL */}
                <div className="total-container w-[12.5%] h-auto m-auto px-3">
                  <p className='text-center text-colorPrimary'>₱100.00</p>
                </div>
                {/* DELETE */}
                <div className="delete-container w-[12.5%] h-auto m-auto">
                  <IconButton className='cursor-pointer' color='red' iconName='fa-solid fa-trash' size={25} />
                </div>
              </li>
            </ul>
          </div>
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