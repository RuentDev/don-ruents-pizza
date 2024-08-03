"use client"
import React from 'react'
interface TextButtonProps {
  text: string
  size?: "sm" | "md" | "lg" | "xl"
  color?: "colorPrimary" | "colorSecondary" | "colorDark" | "white"
  bg?: "colorPrimary" | "colorSecondary" | "colorDark"
  weight?: "thin" | "normal" | "semibold" | "bold" | "extrabold" | "black"
  active?: boolean
  onClick?: () => void
}

const TextButton: React.FC<TextButtonProps> = ({ text, color, bg, onClick }) => {

  return (
    <button
      onClick={onClick}
      className={` text-button bg-${bg} text-${color} min-w-[100px] min-h-[40px] rounded-md`}
    >
      {text}
    </button>
  )
}

export default TextButton
