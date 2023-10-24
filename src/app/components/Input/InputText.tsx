"use client"
import { Icon } from ".."
import React from 'react'



type InputTextProps = {
  id: string
  name: string
  label: string
  placeholder?: string
  onChange?: (e: any) => void
  validationLabel?: string
} & ({
  type: "text"
  defaultValue?: string
} | {
  type: "number"
  defaultValue?: number
} | {
  type: "email"
  defaultValue?: string
} | {
  type: "password"
  iconColor: string
  defaultValue?: string
})

const InputText = (props: InputTextProps) => {
  const [showIcon, setShowIcon] = React.useState(false)
  const [type] = React.useState(props.type)

  const handleShowPasswordClick = () => {
    setShowIcon(!showIcon)
  }

  return (
    <div className={`input-text-box w-[100%] h-auto relative flex flex-col`}>
        <label htmlFor={props.id} className='text-xs font-extrabold my-2 text-gray-400'>{props.label}</label>
        <input 
          id={props.id}
          name={props.name}
          type={showIcon ? "text" : type} 
          placeholder={props.placeholder} 
          onChange={props.onChange} 
          defaultValue={props.defaultValue}
          className={`p-2 text-gray-600 ${props.validationLabel ? 'border-red-500' : null} rounded-md focus:border-gray-300 focus:ring-0`}
          autoComplete="on"
        />
        <span className="validation-text h-[20px] text-sm text-red-500">{props.validationLabel}</span>
        {props.type === "password" && 
          <div onClick={handleShowPasswordClick} className="w-9 h-9 flex justify-center items-center rounded-full absolute right-[3px] bottom-[52%] top-[47%] cursor-pointer p-1 hover:bg-gray-500 ease-out duration-500">
            <Icon iconName={showIcon ? "eye-slash" : "eye"} size={20} color={showIcon ? "red-200" : ""}/>
          </div>
        }
    </div>
  )
}

export default InputText
