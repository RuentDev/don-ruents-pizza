"use client"

import React from 'react'
import Image from 'next/image'
import IconButton from '../Buttons/IconButton'
import { Icon, Ratings, TextIconButton } from '..'

type ProductCardProps = {
  name: string,
  description: string,
  imagePath: string,
  price: number,
  ratings: number,
  isLiked: boolean,
  onClick: () => void
}

const ProductCard = ({ imagePath, name, description, price, ratings, isLiked, onClick }: ProductCardProps) => {

  const [onFocus, setOnFocus] = React.useState(false)

  return (
    <div className='product-card w-full h-auto border border-1 rounded-lg overflow-hidden' onMouseEnter={() => setOnFocus(!onFocus)} onMouseLeave={() => setOnFocus(!onFocus)}>
      {/* Image */}
      <div className="inner-container block w-full h-[20rem] sm:h-[15rem] relative overflow-hidden rounded-tl-lg rounded-tr-lg">
        <Image
          src={imagePath}
          width={100}
          height={100}
          alt={name}
          priority
          className={`w-auto h-auto absolute object-cover object-center duration-300 ${onFocus ? "scale-[2] rotate-90" : ""}`}
        />
      </div>
      {/* Ratings and Likes */}
      <div className="ratings-likes-container w-full h-auto p-5 flex items-center justify-between">
        {/* Ratings */}
        <Ratings className='rating-sm lg:rating-md' disabled={true} />
        {/* Likes */}
        <IconButton className={`bg-red-200 text-colorPrimary`} iconName={isLiked ? "fas-regular fa-heart" : "fa-regular fa-heart"} size={25} onClick={onClick} />
      </div>
      <div className="details-container p-5">
        {/* Name */}
        <h3 className='text-colorPrimary h-[2rem] text-[1.5rem] sm:text-[1.2rem] uppercase'>{name}</h3>
        {/* Description */}
        <p className='text-secondaryTextColor h-[3rem] my-1'>{description}</p>
        {/* Price */}
        <div className='text-primaryTextColor w-full py-5 rounded-lg flex items-center justify-between'>
          {/* Price */}
          <h3>₱{price.toFixed(2)}</h3>
          {/* AddToCartBTN */}
          <button className={`btn font-[100] md:btn-md md:px-2 flex items-center justify-center bg-colorPrimary text-white border-0 ease-in-out duration-500`}>
            <Icon iconName="fa-solid fa-bag-shopping" size={20} color='primaryTextColor' />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard