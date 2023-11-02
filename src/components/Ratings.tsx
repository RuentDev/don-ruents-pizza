import React from 'react'

const Ratings = ({ disabled, className }: { disabled?: boolean, className?: string }) => {

  return (
    <div className={`rating ${className}`}>
      <input disabled={disabled} type="radio" name="rating-2" className={`mask mask-star-2 ${disabled && "cursor-default"}`} />
      <input disabled={disabled} type="radio" name="rating-2" className={`mask mask-star-2 ${disabled && "cursor-default"}`} />
      <input disabled={disabled} type="radio" name="rating-2" className={`mask mask-star-2 ${disabled && "cursor-default"}`} />
      <input disabled={disabled} type="radio" name="rating-2" className={`mask mask-star-2 ${disabled && "cursor-default"}`} />
      <input disabled={disabled} type="radio" name="rating-2" className={`mask mask-star-2 ${disabled && "cursor-default"}`} />
    </div>
  )
}

export default Ratings