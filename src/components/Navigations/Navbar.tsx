"use client"
import Image from 'next/image'
import React from 'react'
import IconButton from '../Buttons/IconButton'
import CartButton from '../Buttons/CartButton'
import navMenus from '../../data/navMenuFronPage.json'
import Link from 'next/link'
import OrderNowButton from '../Buttons/OrderNowButton'
import { usePathname } from 'next/navigation'

type NavbarProps = {
    navlink?: any
}

const Navbar = ({navlink}: NavbarProps) => {
    const [showMenu, setShowMenu] = React.useState(false)
    const [scrollPos, setScrollPos] = React.useState(0)
    const [isTransparentBg, setIsTransparentBg] = React.useState(true)

    const pathname = usePathname()

    const handleButtonClick = () => {
        setShowMenu(!showMenu)
    }
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPos(position);
    };

    React.useEffect(() => {

        window.addEventListener('scroll', handleScroll, { passive: true });

        setIsTransparentBg(prevState => {

            if(pathname === "/" && scrollPos < 1){
                prevState = true
            }else{
                prevState = false
            }

            return prevState
        })
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos, navlink, pathname])


    return (
        <nav className={`fixed h-auto w-full z-50 ${!isTransparentBg ? "bg-colorPrimary" : "bg-transparent"}`}>
            <div className={`outer-container w-full h-[100px] flex items-center justify-between overflow-hidden px-5 my-2`}>
                {/* CALL BUTTON */}
                <IconButton className='block lg:hidden' iconName="fa-phone" size={20} color='white' flip />
                <div className="inner-container w-[20%] md:w-[10%] lg:w-[100%] h-auto">
                    {/* UL LIST */}
                    <ul className='hidden lg:flex items-center justify-center float-right'>
                        {navMenus.map((menu, index) => {
                            return(
                                <li key={menu.id} className='mx-2 uppercase text-lg text-white'>
                                    <Link href={menu.link}>{menu.label.toUpperCase()}</Link>
                                </li>
                            )
                        }).slice(0, 4)}
                    </ul>
                </div>
                {/* LOGO */}
                <div className="logo-cotnainer w-[60%] md:w-[40%] lg:w-[60%] h-[100%]">
                    <Link className='w-full h-full flex justify-center overflow-hidden' href="/">
                        <Image className='w-auto h-auto' src={'/logo-1.png'} width={100} height={100} alt='logo' priority={true} />
                    </Link>
                </div>
                <div className="inner-container w-[20%] md:w-[10%] lg:w-[100%] h-auto">
                    {/* UL LIST */}
                    <ul className='hidden lg:flex items-center justify-center float-left'>
                        {navMenus.map((menu, index) => {
                            return(
															<li key={menu.id} className='mx-2 uppercase text-lg text-white'>
																<Link href={menu.link} >{menu.label.toUpperCase()}</Link>
															</li>
                            )
                        }).slice(4, 5)}
                        <CartButton />
                        <OrderNowButton />
                    </ul>
                </div>
                {/*HAMBURGER BUTTON */}
                <div onClick={handleButtonClick} className="p-1 cursor-pointer sm:block lg:hidden ">
                    <span className={`ease-in-out duration-300 block h-[5px] w-[12.5px] rounded-full bg-white ${showMenu ? 'translate-x-[1px] translate-y-[1px] rotate-[45deg]' : 'my-1'}`}></span>
                    <span className={`ease-in-out duration-300 block h-[5px] w-[25px] rounded-full bg-white ${showMenu ? 'rotate-[-45deg]' : 'my-1'}`}></span>
                    <span className={`ease-in-out duration-300 block h-[5px] w-[12.5px] rounded-full bg-white translate-x-[10px] ${showMenu ? "translate-y-[-1px] rotate-[45deg]" : 'my-1'}`}></span>
                </div>
            </div>
            {/* MOBILE HAMBURGER MENU */}
            <div className={`h-auto w-full lg:hidden bg-white overflow-hidden`}>
                <ul className={`ease-in-out duration-300 overflow-hidden flex flex-col justify-evenly ${showMenu ? "h-[350px]" : "h-0"}`}>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>About</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Menu</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Mega Menu</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Shop</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Blog</li>
                    <li className='text-primaryTextColor mx-2 my-3 uppercase text-xl font-bold'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar