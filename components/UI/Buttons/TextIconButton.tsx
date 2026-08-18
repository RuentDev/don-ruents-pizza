"use client"
import React, { ReactElement } from 'react'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import Icon from '../Icon'
type TextIconButtonProps = {
  text: string,
  size?: "sm" | "md" | "lg" | "xl"
  bg?: "colorPrimary" | "colorSecondary" | "colorDark"
  iconSpace: number,
  onClick?: () => void,
  iconName: FontAwesomeIconProps["icon"];
  className?: string;
}

const TextIconButton: React.FC<TextIconButtonProps> = ({text, bg, iconSpace, iconName, onClick, className}): ReactElement => {
  return (
    <button
      className={`bg-${bg} text-white min-w-[100px] min-h-[40px] flex items-center justify-center gap-${iconSpace} rounded-md px-5 ${className || ''}`}
      onClick={onClick}
    >
      {iconName && <Icon iconName={iconName} size={20} />}
      {text}
    </button>
  )
}

export default TextIconButton
