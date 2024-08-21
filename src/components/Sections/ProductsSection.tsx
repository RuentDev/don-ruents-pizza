import { lilita } from '@/libs/fonts'
import React from 'react'
import ProductMenu from '../UI/Menus/ProductMenu'


interface ProductsSectionProps {
    products: any
}
const ProductsSection: React.FC<ProductsSectionProps> = ({products}) => {

	return(
		<section id='#menu' className='menu-section h-auto w-full flex flex-col items-center px-10'>
			<div className="py-10">
				<h2 style={lilita.style} className='text-[3rem] text-colorPrimary text-center mt-5 mb-2'>Our Original Recipe</h2>
				<p className='text-secondaryTextColor text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi dignissimos reiciendis eveniet neque laboriosam tenetur?</p>
			</div>
			<ProductMenu products={products} />
		</section>
	)
}

export default ProductsSection