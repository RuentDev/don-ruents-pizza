"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import useNavigations from '@/hooks/components/useNavigations'
import navMenus from '@/data/navMenuFronPage.json'
import Buttons from '../UI/Buttons'

const Navbar = () => {
	const {
		isTransparentBg,
		showMenu,
		pathname,
		handleOnClickCartButton,
		handleHumbergerButtonClick,
		closeMenu
	} = useNavigations()

	return (
		<nav className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 pt-3 sm:pt-4 transition-all duration-300">
			{/* Floating Glass Card Container */}
			<div 
				className={`max-w-7xl mx-auto rounded-2xl md:rounded-3xl border transition-all duration-300 ${
					isTransparentBg 
						? 'bg-black/50 backdrop-blur-xl border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.35)]' 
						: 'bg-colorPrimary/90 backdrop-blur-xl border-white/25 shadow-[0_16px_48px_rgba(193,11,0,0.3)]'
				}`}
			>
				<div className="px-5 sm:px-8 lg:px-10 h-[64px] md:h-[76px] flex items-center justify-between">
					
					{/* LEFT: Quick Phone CTA (Mobile) & Desktop Navigation Links */}
					<div className="flex items-center gap-4 lg:w-1/3">
						{/* Phone Icon for Mobile */}
						<a 
							href="tel:+18005557499" 
							className="lg:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10"
							aria-label="Call Pizzeria"
						>
							<Buttons.IconButton iconName="phone" size={16} color="white" flip />
						</a>

						{/* Desktop Navigation Links with Generous Padding & Gold Glow */}
						<ul className="hidden lg:flex items-center space-x-8">
							{navMenus.map((menu) => {
								const isActive = pathname === menu.link || (menu.link !== '/' && pathname.startsWith(menu.link))
								return (
									<li key={menu.id} className="relative group py-2">
										<Link 
											href={menu.link} 
											className={`text-xs md:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-200 flex flex-col items-center px-1 ${
												isActive ? 'text-colorSecondary' : 'text-white/90 hover:text-colorSecondary'
											}`}
										>
											{menu.label}
											{/* Active Page Glowing Indicator */}
											{isActive ? (
												<span className="absolute -bottom-1 w-5 h-[3px] bg-colorSecondary rounded-full shadow-[0_0_12px_rgba(242,189,38,1)] transition-all duration-300" />
											) : (
												<span className="absolute -bottom-1 w-0 h-[3px] bg-colorSecondary rounded-full group-hover:w-4 transition-all duration-300 opacity-75" />
											)}
										</Link>
									</li>
								)
							})}
						</ul>
					</div>

					{/* CENTER: Brand Logo */}
					<div className="flex justify-center lg:w-1/3">
						<Link 
							href="/" 
							className="relative flex items-center group transition-transform duration-300 hover:scale-105"
							onClick={closeMenu}
						>
							<div className="relative w-[100px] h-[50px] md:w-[125px] md:h-[60px]">
								<Image 
									priority 
									alt="Don Ruent's Pizza Logo" 
									fill
									sizes="(max-width: 768px) 100px, 125px"
									className="object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]" 
									src="https://cdn.shopify.com/s/files/1/0883/7867/1408/files/logo-1.png?v=1724746294"
								/>
							</div>
						</Link>
					</div>

					{/* RIGHT: Actions (Cart & Order Now) */}
					<div className="flex items-center justify-end space-x-3 sm:space-x-5 lg:w-1/3">
						{/* Cart Button */}
						<div className="transition-transform duration-200 hover:scale-105 p-1 rounded-xl hover:bg-white/10">
							<Buttons.CartButton onClick={handleOnClickCartButton} />
						</div>

						{/* Desktop Order Now Button */}
						<div className="hidden sm:block transition-transform duration-200 hover:scale-105">
							<Buttons.OrderNowButton 
								bg="colorSecondary" 
								bgHover="white" 
								textColor="primaryTextColor" 
								textHoverColor="colorPrimary" 
							/>
						</div>

						{/* Hamburger Button for Mobile */}
						<button 
							onClick={handleHumbergerButtonClick} 
							className="lg:hidden p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-colorSecondary"
							aria-label="Toggle navigation menu"
						>
							<div className="w-5 h-4 flex flex-col justify-between items-center relative">
								<span 
									className={`h-[2.5px] w-5 bg-white rounded-full transition-all duration-300 transform origin-center ${
										showMenu ? 'rotate-45 translate-y-[7px]' : ''
									}`}
								/>
								<span 
									className={`h-[2.5px] w-5 bg-white rounded-full transition-all duration-300 ${
										showMenu ? 'opacity-0 scale-x-0' : 'opacity-100'
									}`}
								/>
								<span 
									className={`h-[2.5px] w-5 bg-white rounded-full transition-all duration-300 transform origin-center ${
										showMenu ? '-rotate-45 -translate-y-[7px]' : ''
									}`}
								/>
							</div>
						</button>
					</div>

				</div>
			</div>

			{/* MOBILE DRAWER NAVIGATION (Floating Glass Style) */}
			<div 
				className={`fixed inset-x-3 sm:inset-x-6 top-[84px] md:top-[96px] bg-slate-950/95 backdrop-blur-3xl border border-white/15 rounded-3xl z-40 lg:hidden transition-all duration-300 ease-in-out flex flex-col justify-between p-6 sm:p-8 shadow-2xl ${
					showMenu 
						? 'opacity-100 pointer-events-auto translate-y-0' 
						: 'opacity-0 pointer-events-none -translate-y-4'
				}`}
				style={{ height: 'calc(100vh - 104px)' }}
			>
				{/* Drawer Header & Links */}
				<div className="flex flex-col space-y-6 pt-2">
					<div className="text-xs uppercase font-bold tracking-[0.2em] text-colorSecondary/80 px-2">
						Navigation Menu
					</div>
					<ul className="flex flex-col space-y-3">
						{navMenus.map((menu) => {
							const isActive = pathname === menu.link || (menu.link !== '/' && pathname.startsWith(menu.link))
							return (
								<li key={menu.id}>
									<Link 
										href={menu.link}
										onClick={closeMenu}
										className={`flex items-center justify-between text-lg font-bold uppercase tracking-wider px-5 py-4 rounded-2xl border transition-all duration-200 ${
											isActive 
												? 'bg-colorPrimary text-white border-colorPrimary/50 shadow-lg shadow-colorPrimary/40' 
												: 'text-white/80 hover:text-white bg-white/5 hover:bg-white/15 border-white/10'
										}`}
									>
										<span>{menu.label}</span>
										{isActive && (
											<span className="w-2.5 h-2.5 rounded-full bg-colorSecondary shadow-[0_0_10px_rgba(242,189,38,1)]" />
										)}
									</Link>
								</li>
							)
						})}
					</ul>
				</div>

				{/* Drawer Footer & Quick Actions */}
				<div className="border-t border-white/10 pt-6 pb-4 space-y-4">
					<div className="flex items-center justify-between text-sm text-white/70 px-2">
						<span>Hungry for authentic pizza?</span>
						<a href="tel:+18005557499" className="text-colorSecondary font-bold hover:underline">
							Call Us
						</a>
					</div>
					<div className="flex flex-col gap-3">
						<Buttons.OrderNowButton 
							bg="colorSecondary" 
							bgHover="white" 
							textColor="primaryTextColor" 
							textHoverColor="colorPrimary" 
						/>
						<button 
							onClick={handleOnClickCartButton}
							className="w-full py-3 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-2 border border-white/15"
						>
							<span>View Delivery Cart</span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar