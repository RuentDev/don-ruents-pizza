import { getProductsByCollectionHandle, getAllProducts } from '../api/products/query'
import Components from '@/components'
import React from 'react'


const ShopPage = async () => {

  const allProducts = await getAllProducts()
  const hotProducts = await getProductsByCollectionHandle("hot-products")

  return (
    <div className='w-full h-auto p-10 px-10'>
      <div className="inner-container pt-[7.5rem] pb-5 w-full h-full flex gap-5">
        {/* LEFT SIDE */}
        <Components.Navigations.ProductSidebar products={hotProducts}/>
        {/* RIGHT SIDE */}
        <div className="right-side-container md:w-full lg:w-[80%] h-full px-5">
          <Components.ProductMenu products={allProducts} />
        </div>
      </div>
    </div>
  )
}

export default ShopPage