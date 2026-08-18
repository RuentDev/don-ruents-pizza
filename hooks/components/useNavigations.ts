import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const useNavigations = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleOnClickCartButton = () => {
    router.push('/cart')
    setShowMenu(false)
  }

  const [showMenu, setShowMenu] = React.useState(false)
  const [scrollPos, setScrollPos] = React.useState(0)
  const [isTransparentBg, setIsTransparentBg] = React.useState(true)

  const handleHumbergerButtonClick = () => {
    setShowMenu(prev => !prev)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    if (window.scrollY < 50 && pathname === '/') {
      setIsTransparentBg(true)
    } else {
      setIsTransparentBg(false)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPos, pathname])

  // Prevent scrolling when mobile drawer is open
  React.useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showMenu])

  return {
    isTransparentBg,
    showMenu,
    pathname,
    handleHumbergerButtonClick,
    handleOnClickCartButton,
    closeMenu
  }
}

export default useNavigations