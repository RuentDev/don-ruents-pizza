"use client"
import React from 'react'
import FeaturedCard from '../Cards/FeaturedCard'
import featuredProducts from '../../../data/featuredProductData.json'
const FeaturedMenu = () => {

  const [products] = React.useState(featuredProducts)

  return (
    <div className='featured-menu w-full h-auto'>
      <div className="inner-container w-full h-auto flex items-center justify-center">
        <ul className='featured-menu-list w-full md:w-[70%] lg:w-[100%] h-auto grid gap-10 lg:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center p-10 '>
          {products.map((product, index) => (
            <FeaturedCard
              image={product.imagePath}
              name={product.name}
              description={product.description}
              price={product.price}
              ratings={product.ratings}
              key={index}
              isLiked={false}
              onClick={() => { }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedMenu
