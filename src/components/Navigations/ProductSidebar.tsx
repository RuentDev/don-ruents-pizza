"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import products from '../../data/menuData.json'
import productCateries from '../../data/productCategories.json'
import { FilterInput } from '..'

const ProductSidebar = () => {
  return (
    <div className="left-side-container w-[20%] h-full hidden lg:block">
    {/* PRODUCTS */}
    <div className="products-container pb-5 border-dashed border-b-2 border-gray-500">
      <h2 className='text-colorPrimary text-[1.2rem]'>PRODUCTS</h2>
      <ul className="products-list">
        {products.map((product) => (
          <li key={product.id} className='product mt-2 flex gap-3'>
            <div className="img-container h-[50px] w-[50px] overflow-hidden rounded-full">
              <Link href={`/products/${product.name}`}>
                <Image src={product.imagePath} alt={product.name} width={100} height={100}/>
              </Link>
            </div>
            <div className="product-details-container">
                <Link 
                  href={`/products/${product.name.replace(" ", "-")}`}
                  className='text-colorSecondary' 
                >
                  {product.name.toUpperCase()}
                </Link>
                <p className="prices flex gap-2">
                 {product.oldPrice > 0 &&  <span className='product-oldP line-through text-colorPrimary'>&#8369;{product.oldPrice}</span> }
                  <span className='product-price text-colorPrimary'>&#8369;{product.price}</span>
                </p>
            </div>
          </li>
        )).slice(0,3)}
      </ul>
    </div>
    {/* PRODUCT CATEGORIES */}
    <div className="product-catergories py-5 border-dashed border-b-2 border-gray-500">
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
      <FilterInput />
    </div>
  </div>
  )
}

export default ProductSidebar