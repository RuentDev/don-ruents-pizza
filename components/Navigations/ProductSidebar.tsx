"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/libs/types'
import RangeInput from '../UI/Input/RangeInput'
import SearchInput from '../UI/Input/SearchInput'
import productCateries from '@/data/productCategories.json'


interface ProductSidebarProps{
  products: Product[]
}

const ProductSidebar: React.FC<ProductSidebarProps> = ({products}) => {
  return (
  <div className="left-side-container w-[20%] h-full hidden lg:block">
    {/* SEARCH */}
    <div className='search py-5 border-dashed border-b-2 border-colorSecondary'>
      <h2 className='text-colorPrimary text-[1.2rem]'>SEARCH</h2>
      <SearchInput />
    </div>
    {/* PRODUCTS */}
    <div className="products-container py-5 border-dashed border-b-2 border-colorSecondary">
      <h2 className='text-colorPrimary text-[1.2rem]'>HOT PRODUCTS</h2>
      <ul className="products-list">
        {products?.map((product) => (
          <li key={product.id} className='product mt-2 flex gap-3'>
            <div className="img-container h-[50px] w-[50px] overflow-hidden rounded-full">
              <Link href={`/products/${product.title}`}>
                <Image src={product.featuredImage.url} alt={product.title} width={100} height={100}/>
              </Link>
            </div>
            <div className="product-details-container">
                <Link 
                  href={`/products/${product.title.replace(" ", "-")}`}
                  className='text-colorSecondary' 
                >
                  {product.title.toUpperCase()}
                </Link>
                <p className="prices flex gap-2">
                 {parseFloat(product.priceRange.minVariantPrice.amount) > 0 &&  <span className='product-oldP line-through text-colorPrimary'>&#8369;{product.priceRange.minVariantPrice.amount}</span> }
                  <span className='product-price text-colorPrimary'>&#8369;{product.priceRange.minVariantPrice.amount}</span>
                </p>
            </div>
          </li>
        )).slice(0,3)}
      </ul>
    </div>
    {/* PRODUCT CATEGORIES */}
    <div className="product-catergories py-5 border-dashed border-b-2 border-colorSecondary">
      <h2 className='text-colorPrimary text-[1.2rem]'>PRODUCT CATEGORIES</h2>
      <ul className="product-categories-list flex flex-col gap-1 overflow-hidden">
        {productCateries.map((category) => (
          <li 
            key={category.id}
            className='flex items-center gap-1 -translate-x-9 hover:translate-x-0 ease-in-out duration-500'
          >
            <div className="svg-container w-8 h-8 overflow-hidden">
              <Image 
                className='w-auto h-auto'
                src="/svg/mustache-svgrepo-com.svg" 
                alt='mustache' 
                width={100} 
                height={100} 
                priority
              />
            </div>
            <Link className='text-[1rem]' href={category.link}>{category.label.toUpperCase()}</Link>
          </li>
        ))}
      </ul>
    </div>
    <div className='filter my-5'>
      <RangeInput filterBy='price' min={0} max={1000} step={100} defaultVal={[0, 75]}/>
    </div>
    
  </div>
  )
}

export default ProductSidebar