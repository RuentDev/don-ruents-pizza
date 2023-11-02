import React from 'react'

const FilterInput = () => {
  return (
    <div className='range-input w-full h-auto'>
      <div className="range-contaier relative w-full h-auto">
        <input 
          className='absolute'
          type="range" 
          min={0} 
          max="100" 
          step="100" 
        />
        <input 
          className='absolute'
          type="range" 
          min={0} 
          max="100" 
          step="100" 
        />
      </div>
    </div>
  )
}

export default FilterInput