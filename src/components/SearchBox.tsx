"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type SearchBoxProps = {
  placeholder?: string
}

const SearchBox = (props: SearchBoxProps) => {
  return (
    <div className='search-box h-full w-full flex items-center gap2 px-2 border rounded-lg'>
      <input 
        type="text" 
        placeholder={props.placeholder} 
        className='w-full px-2 border-none focus:ring-0'
      />
      <button>
        <FontAwesomeIcon className='text-colorSecondary' icon='magnifying-glass' width={20} height={20}/>
      </button>
    </div>
  )
}

export default SearchBox
