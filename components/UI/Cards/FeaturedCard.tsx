"use client"
import Image from 'next/image'
import React from 'react'
import IconButton from '../Buttons/IconButton'
import Ratings from '../Ratings'

interface FeaturedCardProps {
  image: string
  title: string
  description: string
  price: {
    amount: string
    currencyCode: string
  }
  ratings: number
  isLiked: boolean
  onClick: () => void
  onAddToCart?: () => void
  isAdding?: boolean
}

const FeaturedCard: React.FC<FeaturedCardProps> = React.memo(({
  image,
  title,
  description,
  price,
  isLiked,
  onClick,
  onAddToCart,
  isAdding = false
}) => {
  const [liked, setLiked] = React.useState(isLiked)

  const handleLikeClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setLiked(prev => !prev)
    onClick()
  }

  // Format currency amount cleanly
  const formattedPrice = React.useMemo(() => {
    const num = parseFloat(price.amount)
    return isNaN(num) ? `${price.amount} ${price.currencyCode}` : `$${num.toFixed(2)}`
  }, [price.amount, price.currencyCode])

  return (
    <div className="group relative w-full bg-white dark:bg-slate-900/90 rounded-2xl border border-slate-100 dark:border-white/10 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden p-4 sm:p-5">
      
      {/* Top Floating Action Bar: Like Heart Button */}
      <div className="flex items-center justify-between z-10 w-full mb-2">
        <span className="bg-colorPrimary/10 text-colorPrimary text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-colorPrimary/20">
          Chef Special
        </span>
        <button 
          onClick={handleLikeClick}
          className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-sm hover:scale-110 active:scale-90 transition-all duration-200"
          aria-label={liked ? "Unlike product" : "Like product"}
        >
          <IconButton
            size={18}
            className={`transition-colors duration-200 ${liked ? 'text-colorPrimary scale-110' : 'text-slate-400 hover:text-colorPrimary'}`}
            iconName={liked ? { prefix: "fas", iconName: "heart" } : { prefix: "far", iconName: "heart" }}
          />
        </button>
      </div>

      {/* Product Image Container with Smooth Hover Scale */}
      <div className="relative w-full h-[180px] sm:h-[200px] flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-slate-50 to-amber-50/30 dark:from-slate-800/40 dark:to-slate-800/10 p-4">
        <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500 ease-out">
          {image ? (
            <Image 
              src={image} 
              alt={title} 
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_12px_24px_rgba(193,11,0,0.25)] transition-all duration-500" 
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm">
              No Image
            </div>
          )}
        </div>

        {/* Floating Price Pill */}
        <div className="absolute bottom-3 left-3 bg-colorPrimary text-white font-extrabold text-xs sm:text-sm px-3.5 py-1.5 rounded-full shadow-lg border border-white/20">
          {formattedPrice}
        </div>
      </div>

      {/* Product Details & Content */}
      <div className="flex flex-col flex-grow items-center text-center mt-4 mb-5 px-1">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wide group-hover:text-colorPrimary transition-colors duration-200 line-clamp-1">
          {title}
        </h3>
        
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 min-h-[32px]">
          {description || "Hand-crafted pizza made with fresh premium ingredients & authentic family recipe."}
        </p>

        <div className="mt-3">
          <Ratings disabled={true} className="rating-sm" size={14} />
        </div>
      </div>

      {/* Add to Cart Interactive Button with Light Sweep & Pizza Red Hover Highlight */}
      <button
        onClick={onAddToCart}
        disabled={isAdding}
        className={`group/btn relative overflow-hidden w-full py-3 px-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
          isAdding
            ? 'bg-colorSecondary/80 text-primaryTextColor cursor-wait scale-[0.98]'
            : 'bg-colorSecondary text-primaryTextColor hover:bg-colorPrimary hover:text-white hover:shadow-[0_8px_25px_rgba(193,11,0,0.45)] hover:scale-[1.03] active:scale-95'
        } before:absolute before:inset-0 before:-translate-x-full hover:before:translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/35 before:to-transparent before:transition-transform before:duration-700 before:ease-in-out`}
      >
        {isAdding ? (
          <div className="flex items-center gap-2 relative z-10">
            <svg className="animate-spin h-4 w-4 text-primaryTextColor" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Adding to Order...</span>
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2 relative z-10">
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover/btn:-rotate-12 group-hover/btn:scale-125 group-hover/btn:-translate-y-0.5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">Add to Cart</span>
          </div>
        )}
      </button>

    </div>
  )
})

FeaturedCard.displayName = "FeaturedCard"

export default FeaturedCard
