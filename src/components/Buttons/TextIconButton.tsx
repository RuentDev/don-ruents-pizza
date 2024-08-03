"use client"
import React, { ReactElement } from 'react'
import { FontAwesomeIcon, IconName } from '@fortawesome/react-fontawesome'
import { Icon } from '..'
type TextIconButtonProps = {
  text: string,
  icon: string,
  size?: "sm" | "md" | "lg" | "xl"
  color?: "colorPrimary" | "colorSecondary" | "colorDark" | "white"
  bg?: "colorPrimary" | "colorSecondary" | "colorDark"
  iconSpace: number,
  onClick?: () => void,
}

const TextIconButton: React.FC<TextIconButtonProps> = (props): ReactElement => {
  return (
    <button
      className={`bg-${props.bg} text-${props.color} min-w-[100px] min-h-[40px] flex items-center justify-center gap-${props.iconSpace} rounded-md px-5`}
      onClick={props.onClick}
    >
      {props.icon && <Icon iconName={props.icon} size={20} />}
      {props.text}
    </button>
  )
}

export default TextIconButton
