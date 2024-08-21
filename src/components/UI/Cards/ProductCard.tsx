"use client"

import React from 'react'
import Image from 'next/image'
import Ratings from '../Ratings'
import Buttons from "../Buttons"

type ProductCardProps = {
  name: string,
  description: string,
  imagePath: string,
  price?: string,
  ratings?: number,
  isLiked?: boolean,
  onClick?: () => void
  onAddToCart?: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ imagePath, name, description, price, ratings, isLiked, onClick, onAddToCart }) => {

  const [onFocus, setOnFocus] = React.useState(false)

  return (
    <div className='product-card w-full h-auto border border-1 rounded-lg overflow-hidden' onMouseEnter={() => setOnFocus(!onFocus)} onMouseLeave={() => setOnFocus(!onFocus)}>
      {/* Image */}
      <div className="inner-container block w-full h-[20rem] sm:h-[15rem] relative overflow-hidden rounded-tl-lg rounded-tr-lg">
        <Image
          src={imagePath}
          width={500}
          height={500}
          alt={name}
          priority
          className={`w-auto h-auto absolute object-cover object-center duration-300 ${onFocus ? "scale-[2] rotate-90" : ""}`}
        />
      </div>
      {/* Ratings and Likes */}
      <div className="ratings-likes-container w-full h-auto p-5 flex items-center justify-between">
        {/* Ratings */}
        <Ratings
          disabled={true}
          className='rating-md lg:rating-md'
          size={20}
        />
        {/* Likes */}
        <Buttons.IconButton
          size={25}
          onClick={onClick}
          className={`text-colorPrimary`}
          iconName={isLiked ? {prefix: "fas", iconName: "heart"} : {prefix: "far", iconName: "heart"}}
        />
      </div>
      <div className="details-container p-5">
        {/* Name */}
        <h3 className='text-colorPrimary h-[2rem] text-[1.5rem] sm:text-[1.2rem] uppercase'>{name}</h3>
        {/* Description */}
        <p className='text-secondaryTextColor h-[3rem] my-1'>{description.substring(0, 100)}</p>
        {/* Price */}
        <div className='text-primaryTextColor w-full py-5 rounded-lg flex items-center justify-between'>
          {/* Price */}
          <h3>{price}</h3>
          {/* AddToCartBTN */}
          <Buttons.TextIconButton
            size="md"
            text="Add to cart"
            iconName="bag-shopping"
            bg='colorPrimary'
            iconSpace={1}
            onClick={onAddToCart}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductCard