"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



interface NotificationButtonProps{
  title: string,
  notipCount: number
  iconName: string
}

const NotificationButton = (props: NotificationButtonProps) => {
  return (
    <button className='h-[50px] w-full relative rounded-full flex items-center justify-center ease-in-out duration-300'>
      <span className='absolute h-auto w-auto px-[5px] py-[0.5px] top-[-5px] right-[5px] bg-red-500 rounded-full text-[10px] text-white'>{props.notipCount}</span>
      <FontAwesomeIcon icon={props.iconName} width={20} height={20} className='w-auto h-auto' color="gray"/>
    </button>
  )
}

export default NotificationButton