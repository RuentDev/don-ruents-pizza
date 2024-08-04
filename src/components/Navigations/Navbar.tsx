"use client"
import Image from 'next/image'
import React from 'react'
import IconButton from '../Buttons/IconButton'
import CartButton from '../Buttons/CartButton'
import Link from 'next/link'
import OrderNowButton from '../Buttons/OrderNowButton'
import useNavigations from '@/hooks/components/useNavigations'
import navMenus from '../../data/navMenuFronPage.json'


const Navbar = () => {
	const {
		isTransparentBg,
		showMenu,
		handleOnClickCartButton,
		handleHumbergerButtonClick,
	} = useNavigations()




	return (
		<nav className={`fixed h-auto w-full z-50 ${!isTransparentBg ? "bg-colorPrimary" : "bg-transparent"}`}>
			<div className={`outer-container w-full h-[70px] md:h-[100px] flex items-center justify-between overflow-hidden px-5 my-2`}>
				{/* CALL BUTTON */}
				<IconButton className='block lg:hidden' iconName="phone" size={20} color='white' flip />
				<div className="inner-container w-[20%] md:w-[10%] lg:w-[100%] h-auto">
					{/* UL LIST */}
					<ul className='hidden lg:flex items-center justify-center float-right'>
						{navMenus.map((menu, index) => {
							return (
								<li key={menu.id} className='mx-2 uppercase text-lg text-white'>
									<Link href={menu.link}>{menu.label.toUpperCase()}</Link>
								</li>
							)
						}).slice(0, 4)}
					</ul>
				</div>
				{/* LOGO */}
				<div className="logo-cotnainer w-[80%] md:w-[40%] lg:w-[60%] h-full">
					<Link className='w-full h-full flex justify-center overflow-hidden' href="/">
						<Image className='w-auto h-auto' src={'/logo-1.png'} width={100} height={100} alt='logo' priority />
					</Link>
				</div>
				<div className="inner-container w-[20%] md:w-[10%] lg:w-[100%] h-auto">
					{/* UL LIST */}
					<ul className='hidden lg:flex items-center justify-center float-left'>
						{navMenus.map((menu) => {
							return (
								<li key={menu.id} className='mx-2 uppercase text-lg text-white'>
									<Link href={menu.link} >{menu.label.toUpperCase()}</Link>
								</li>
							)
						}).slice(4, 6)}
						<CartButton onClick={handleOnClickCartButton} />
						<OrderNowButton />
					</ul>
				</div>
				{/*HAMBURGER BUTTON */}
				<div onClick={handleHumbergerButtonClick} className="p-1 cursor-pointer sm:block lg:hidden ">
					<span className={`ease-in-out duration-300 block h-[5px] w-[12.5px] rounded-full bg-white ${showMenu ? 'translate-x-[1px] translate-y-[1px] rotate-[45deg]' : 'my-1'}`}></span>
					<span className={`ease-in-out duration-300 block h-[5px] w-[25px] rounded-full bg-white ${showMenu ? 'rotate-[-45deg]' : 'my-1'}`}></span>
					<span className={`ease-in-out duration-300 block h-[5px] w-[12.5px] rounded-full bg-white translate-x-[10px] ${showMenu ? "translate-y-[-1px] rotate-[45deg]" : 'my-1'}`}></span>
				</div>
			</div>
			{/* MOBILE HAMBURGER MENU */}
			<div className={`w-full ${showMenu ? "h-[350px]" : "h-0"} ease-in-out duration-300 lg:hidden bg-white overflow-hidden `}>
				<ul className={`overflow-hidden flex flex-col justify-evenly h-auto`}>
					<li className='text-primaryTextColor uppercase text-md font-bold px-5 py-3 '>About</li>
					<li className='text-primaryTextColor uppercase text-md font-bold px-5 py-3 '>Menu</li>
					<li className='text-primaryTextColor uppercase text-md font-bold px-5 py-3 '>Mega Menu</li>
					<li className='text-primaryTextColor uppercase text-md font-bold px-5 py-3 '>Shop</li>
					<li className='text-primaryTextColor uppercase text-md font-bold px-5 py-3 '>Blog</li>
					<li className='text-primaryTextColor uppercase text-md font-bold px-5 py-3 '>Cart</li>
					<li className='text-primaryTextColor uppercase text-md font-bold px-5 py-3 '>Contact</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar