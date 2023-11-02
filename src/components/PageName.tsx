"use client"
import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
type PageNameProps = {
  time: string
}

const PageName = (props: PageNameProps) => {
  const [time, setTime] = useState(new Date(props.time).toString());
  const pathname = usePathname()

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date().toString())
    }, 1000)

    return () => clearInterval(timer);
  }, []);
  


  return (
    <div className="page-name h-auto w-full my-2 py-2 px-5 flex items-center justify-between flex-col lg:flex-row shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className='font-extrabold text-3xl'>{pathname.replaceAll("/", " ").toUpperCase()}</div>
        <div className="date-time-container flex items-align justify-center my-3 mr-0">
            <div className="date-time p-2 border border-borderDark rounded text-center">
                <span className="date">{time}</span>
            </div>
        </div>
    </div>
  )
}

export default PageName
