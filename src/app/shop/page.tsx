import React from 'react'
import ProductSidebar from '@/components/Navigations/ProductSidebar'


const ShopPage = () => {
  return (
    <div className='w-full h-auto p-10 px-20'>
      <div className="inner-container pt-[7.5rem] pb-5 w-full h-full flex gap-5">
        {/* LEFT SIDE */}
        <ProductSidebar />
        {/* RIGHT SIDE */}
        <div className="right-side-container border border-green-500 w-[80%] h-full">
          right
        </div>
      </div>
    </div>
  )
}

export default ShopPage