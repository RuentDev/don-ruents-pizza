import Image from 'next/image'
import React from 'react'
import { Icon } from '..'
import Link from 'next/link'
import socialMedias from '../../../data/socialMedias.json'

const Footer = () => {
	return (
		<footer className='footer h-auto w-full bg-colorPrimary'>
			<div className="inner-container w-full h-auto flex flex-col items-center justify-center">
				{/* LOGO */}
				<div className="logo-cotnainer my-5 w-[50%] h-auto flex items-center justify-center overflow-hidden">
					<Image className='w-auto h-auto' src={'/logo.png'} width={50} height={50} alt='logo' priority={true} />
				</div>
				{/* ICONS CONTAINER */}
				<div className="icon-cotnainer mt-5">
					<ul className='flex gap-5'>
						{
							socialMedias.map((social) => {
								return (
									<li key={social.id}>
										<Link href={`${social.link}`}>
											<Icon iconName={social.icon} size={30} color='white' />
										</Link>
									</li>
								)
							})
						}
					</ul>
				</div>
				{/* PAGE TITLE CONTAINER */}
				<div className="page-title-container w-full f-auto flex items-center justify-evenly">
					<ul className='w-[70%] sm:w-[90%] lg:w-[50%] h-auto grid grid-cols-3 sm:grid-cols-6 my-5'>
						<li className='uppercase text-center text-white text-center px-1 md:border-r-2'>about</li>
						<li className='uppercase text-center text-white text-center px-1 md:border-r-2'>menu</li>
						<li className='uppercase text-center text-white text-center px-1 md:border-r-2'>order now</li>
						<li className='uppercase text-center text-white text-center px-1 md:border-r-2'>gallery</li>
						<li className='uppercase text-center text-white text-center px-1 md:border-r-2'>gift cards</li>
						<li className='uppercase text-center text-white text-center px-1'>contact</li>
					</ul>
				</div>
				<p className='font-[15px] my-10 text-white'>© 2023 DelishCheese. All Rights Reserved</p>
			</div>
		</footer>
	)
}

export default Footer