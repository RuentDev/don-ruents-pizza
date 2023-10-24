"use client"

import React from 'react'
import menusData from '../../../data/menuData.json'
import { ProductCard } from '..'
const ProductMenu1 = () => {

	const [data, setData] = React.useState(menusData)


	const handleLikeClick = (id: number) => {
		setData(data.map(menu => {
			if (menu.id === id) {
				return { ...menu, isLiked: !menu.isLiked }
			}
			return menu
		}))
	}


	return (
		<div className='product-list-1 w-full h-auto mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 select-none'>
			{data.map((menu: { id: number, name: string, description: string, imagePath: string, price: number, ratings: number, isLiked: boolean }) => {
				return (
					<React.Fragment key={`menu-${menu.id}`}>
						<ProductCard
							imagePath={menu.imagePath}
							name={menu.name}
							description={menu.description}
							price={menu.price}
							ratings={menu.ratings}
							isLiked={menu.isLiked}
							onClick={() => handleLikeClick(menu.id)}
						/>
					</React.Fragment>
				)
			}).slice(0, 20)}
		</div>
	)
}

export default ProductMenu1