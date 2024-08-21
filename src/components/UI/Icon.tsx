"use client"
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'


interface IconProps {
    iconName: IconProp
    size: number
    color?: string
    flip?: boolean
}

const Icon: React.FC<IconProps> = ({color, iconName, size, flip}) => {
    return (
        <FontAwesomeIcon 
            color={color} 
            icon={iconName}
            width={size} 
            height={size} 
            className={`w-auto h-auto ${flip ? 'rotate-[260deg]' : ''}`} 
        />
    )
}
export type { IconProp }
export default Icon