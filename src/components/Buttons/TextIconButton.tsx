"use client"
import React, { ReactElement } from 'react'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import Icon from '../Icon'
type TextIconButtonProps = {
  text: string,
  iconName: FontAwesomeIconProps["icon"];
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
      {props.iconName && <Icon iconName={props.iconName} size={20} />}
      {props.text}
    </button>
  )
}

export default TextIconButton
