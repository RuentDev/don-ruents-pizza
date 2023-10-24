"use client"
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'
const ProtecPageProvider = ({children}: {children: React.ReactNode}) => {
    const {data: session} = useSession()
    if(!session || session.user){
        // redirect('/auth/login')
    }
    return (
        <>
         {children}
        </>
    )
}

export default ProtecPageProvider