"use client"
import Image from 'next/image'
import React from 'react'
import IconButton from '../Buttons/IconButton'
import Buttons from '../Buttons'
import Ratings from '../Ratings'


interface FeaturedCardProps {
  image: string,
  title: string,
  description: string,
  price: {
    amount: string,
    currencyCode: string
  },
  ratings: number,
  isLiked: boolean,
  onClick: () => void
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({ image, title, description, price, isLiked, onClick }) => {
  return (
    <div className='featured-card w-full h-auto flex items-center justify-center'>
      <div className="inner-container w-full h-auto flex flex-col items-center justify-center">
        {/* Image */}
        <div className="image-container w-full md:w-[15rem] h-full relative flex flex-col items-center justify-center border border-1 rounded-md">
          <div className=' w-full h-full flex flex-row-reverse items-start p-1'>
            <IconButton
              size={25}
              onClick={onClick}
              className={`text-colorPrimary absolute top-1 right-1`}
              iconName={isLiked ? {prefix: "fas", iconName: "heart"} : {prefix: "far", iconName: "heart"}}
            />
            <div className="image-inner-container w-full h-[15rem] p-6 overflow-hidden">
              <Image className='w-auto h-auto' src={image} width={500} height={500} alt={title} />
            </div>
          </div>
          <div className='w-full h-auto p-5 relative bottom-0 flex items-center justify-between'>
            <h5 className='bg-colorPrimary py-1 px-5 rounded-md text-white'>{price.amount} {price.currencyCode}</h5>
            <Ratings
              disabled={true}
              className='rating-md lg:rating-md'
              size={15}
            />
          </div>
        </div>
        {/* Description */}
        <div className="description-container w-[15rem] h-auto flex flex-col items-center p-5">
          <h3 className='text-colorPrimary uppercase'>{title}</h3>
          <p className='text-secondaryTextColor text-center'>{description}</p>
        </div>
        {/* Button */}
        <Buttons.TextIconButton
          size="md"
          iconSpace={1}
          color="white"
          text="Add to cart"
          bg="colorSecondary"
          iconName="bag-shopping"
        />
      </div>
    </div>
  )
}

export default FeaturedCard
