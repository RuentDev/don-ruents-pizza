"use client"
import React, { ReactElement } from 'react'
import { FontAwesomeIcon, IconName } from '@fortawesome/react-fontawesome'
import { Icon } from '..'
type TextIconButtonProps = {
    text: string,
    icon: string,
    solid?: boolean,
    style?: object,
    color?: string,
    size?: number,
    disabledHover?: boolean
    onClick?: () => void,
  }

const TextIconButton = (props: TextIconButtonProps): ReactElement => {
  return (
    <button
        style={{
            ...props.style
        }}
        onClick={props.onClick}
        className={`
          ${props.solid ? null: 'border-solid border border-colorSecondary'} 
          ${props.solid ? 'bg-colorPrimary': null}
          ${props.solid ? 'hover:bg-colorDark' : 'hover:bg-colorSecondary'}
          ${props.solid ? 'text-white' : 'text-colorSecondary hover:text-white'}
          h-11 min-w-20 max-w-full
          flex items-center justify-center gap-2 
          m-1 py-3 px-5 rounded-full  
          transition ease-in-out duration-300 font-bold text-md`
        }
    >
      {props.text}
      {props.icon ? <Icon iconName={props.icon} size={20} /> : null}
    </button>
  )
}

export default TextIconButton
