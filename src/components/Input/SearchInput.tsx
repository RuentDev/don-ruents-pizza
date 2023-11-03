"use client"
import React from 'react'
import { Icon } from '..'

const SearchInput = () => {
  return (
    <div className='search-input w-full h-auto'>
      <div className="outer-container w-full h-auto">
        <div className="inner-container py-2 border border-gray-600 flex items-center justify-center gap-2">
          <input 
            className='border-none outline-none focus:outline-none ring-0 focus:ring-0'
            type="text" 
            placeholder='Search products...'
          />
          <Icon iconName='fa-magnifying-glass' size={20} color='black' />
        </div>
      </div>
    </div>
  )
}

export default SearchInput