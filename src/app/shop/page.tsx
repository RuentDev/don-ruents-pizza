import React from 'react'
import ProductSidebar from '@/components/Navigations/ProductSidebar'
import { ProductMenu1 } from '@/components'
import { getProductsByCollectionHandle } from '../api/products/query'


const ShopPage = async () => {

  const hotProducts = await getProductsByCollectionHandle("hot-products")

  return (
    <div className='w-full h-auto p-10 px-10'>
      <div className="inner-container pt-[7.5rem] pb-5 w-full h-full flex gap-5">
        {/* LEFT SIDE */}
        <ProductSidebar 
          hotProducts={hotProducts}
        />
        {/* RIGHT SIDE */}
        <div className="right-side-container md:w-full lg:w-[80%] h-full px-5">
          <ProductMenu1 />
        </div>
      </div>
    </div>
  )
}

export default ShopPage