"use client"
import React from 'react'
interface TextButtonProps{
    text: string
    size?: "sm" | "md" | "lg" | "xl"
    data?: any[]
    color?: "colorPrimary" | "colorSecondary" | "colorDark"
    weight?: "thin" | "normal" | "semibold" | "bold" | "extrabold" | "black"
    active?: boolean
    onClick?: () => void
}

const TextButton = (props: TextButtonProps) => {

  return (
    <button
        className={`
            ${props.size ? `text-${props.size}` : null }
            ${props.color ? props.active ? 'text-colorSecondary' : null : null }
            ${props.weight ? `font-${props.weight}` : null }
            mx-1
        `}
    >
      {props.text}
      ({props.data && props.data.length})
    </button>
  )
}

export default TextButton
