import React from 'react'

interface InputDropList{
  id: string
  label: string
  placeholder?: string
  defaultValue?: string
  data?: string[]
  onChange?: (e: any) => void
}

const InputDropList = (props: InputDropList) => {
  return (
    <div className='input-text-box flex flex-col'>
      <label htmlFor={props.id} className='text-xs font-extrabold my-2 text-gray-400'>{props.label}</label>
      <select
        id={props.id} 
        placeholder={props.placeholder} 
        onChange={props.onChange} 
        defaultValue={props.defaultValue}
        className='p-2 text-gray-600 border border-gray-300 rounded-md focus:border-gray-300 focus:ring-0'
      >
        <option value="">Select {props.label.toLowerCase()}</option>
        {props.data?.map((option, index) => <option key={`option-${index}`}>{option}</option>)}
      </select>
    </div>
  )
}

export default InputDropList
