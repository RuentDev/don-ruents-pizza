'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LoginButton = ({label, icon, size, color}: {label: string, icon: {prefix: string, iconName: string}, size: number, color?: string}) => {
  return (
    <button className='select-none border border-1 border-colorSecondary hover:bg-gray-100 rounded-full px-7 py-2 flex items-center justify-center gap-1 ease-out duration-500'>
      <FontAwesomeIcon icon={[icon.prefix, icon.iconName]} width={size} height={size} className={`w-${size} h-${size}`} color={color}/>
      {label}
    </button>
  )
}

export default LoginButton
