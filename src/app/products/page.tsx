import React from 'react'
import getAllProducts from '../api/products/query'

const ProductsPage = async () => {

  const products = await getAllProducts()


  return (
    <div>page</div>
  )
}

export default ProductsPage