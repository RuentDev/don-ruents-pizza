
import Link from 'next/link'
import React from 'react'
import { Icon } from '..'

interface LinkButtonIconProps{
    href: string
    label: string
    iconName: string
    color?: string
    textColor?: string
    hoverColor?: string
}

const LinkButtonIcon = (props: LinkButtonIconProps) => {
  return (
    <Link 
        href={props.href}
        className={`h-11 min-w-20 max-w-full bg-${props.color} px-5 flex gap-2 items-center rounded-full text-${props.textColor} hover:bg-${props.hoverColor}`}
    >
        {props.label}
        <Icon iconName={props.iconName} size={20}/>
    </Link>
  )
}

export default LinkButtonIcon