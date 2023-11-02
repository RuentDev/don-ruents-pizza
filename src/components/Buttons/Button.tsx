"use client"
import React, { ReactElement } from 'react'

type SubmitButtonProps = {
    text: string,
    color: "colorPrimary" | "colorSecondary",
    style?: object,
    hoverColor?: string,
    borderColor?: "colorPrimary" | "colorSecondary",
    textColor?: string,
  } & ({
    onClick?: () => void
  })

const SubmitButton = (props: SubmitButtonProps): ReactElement => {
  return (
    <button
        style={{ ...props.style }}
        type="submit"
        className={`
            ${props.color ? `bg-${props.color}`: null}
            ${props.borderColor ? `border border-${props.borderColor}`: null}
            ${props.textColor ? `text-${props.textColor}`: 'text-white'}
            ${props.hoverColor ? ` hover:bg-${props.hoverColor}`: null}
            w-[100%] h-11 
            min-w-20 max-w-full
            flex items-center justify-center gap-2 
            m-1 py-3 px-5 rounded-full  
            transition 
            ease-in-out 
            duration-300 
            font-bold text-md cursor-pointer select-none
        `}
    >
      {props.text}
    </button>
  )
}

export default SubmitButton
