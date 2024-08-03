"use client"
import React from 'react'

interface ShopifyCartProviderProps {
  children: React.ReactNode
}

const ShopifyCartProvider: React.FC<ShopifyCartProviderProps> = ({ children }) => {




  return (
    <>
      {children}
    </>
  )
}

export default ShopifyCartProvider