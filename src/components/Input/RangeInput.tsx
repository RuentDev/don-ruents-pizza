"use client"
import React from 'react'
import RangeSlider from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css';


type FilterInputProps = {
  filterBy: string
  min: number
  max: number
  defaultVal?: number
  step: number | string
}


const RangeInput = ({filterBy, min, max, defaultVal, step}: FilterInputProps) => {

  const [currentMinPrice, setCurrentMinPrice] = React.useState(0)
  const [currentMaxPrice, setCurrentMaxPrice] = React.useState(0)

  const handleOnInput = (value: number[]) => {
    // value [min, max]
  }

  return (
    <div className='range-input w-full h-auto'>
      <h4 className='text-colorSecondary my-5'>FILTER BY {filterBy.toUpperCase()}</h4>
      <div className="range-contaier relative w-full h-auto my-5">
        <RangeSlider id="react-range-slider" onInput={handleOnInput}/>
      </div>
      <div className="details-container flex gap-2">
        <p className='text-colorSecondary'>MIN: <span className='text-colorPrimary'>₱{currentMinPrice}</span></p>
        <p className='text-colorSecondary'>MIN: <span className='text-colorPrimary'>₱{currentMaxPrice}</span></p>
      </div>
    </div>
  )
}

export default RangeInput