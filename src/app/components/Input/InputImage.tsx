"use client"
import Image from 'next/image'
import React from 'react'
interface InputImageProps {
    label: string
    id: string
    onChange?: (e: any) => void
    imagePreviewURL?: string
}

const InputImage = (props: InputImageProps) => {
    const handleClickSpanLabel = () => {
        const input = document.getElementById(props.id) as HTMLInputElement
        input.click()
	}

    return (
        <div className='h-[100%] w-full border border-dashed rounded-md overflow-hidden'>
            {props.imagePreviewURL ? 
            <div className='w-full h-full bg-red-400 relative'>
                <Image 
                    src={props.imagePreviewURL} 
                    id={`imagePreview-${props.id}`}
                    width={100} 
                    height={100} 
                    alt={props.label} 
                    className='absolute w-full h-full object-center object-cover'
                 />
            </div>
            :
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className='h-[30%] w-[30%] text-gray-400'>
                    <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"/>
                </svg>
                <span onClick={handleClickSpanLabel} className="image-title text-colorSecondary text-xs cursor-pointer my-1">{props.label}</span>
                <input type="file" id={props.id} name={props.id} className='hidden' accept=".png, .jpeg, .jpg" onChange={props.onChange}/>
            </div>
            }
           
        </div>
    )
}

export default InputImage