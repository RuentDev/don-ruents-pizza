import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const useNavigations = () => {
  const router = useRouter()

  const handleOnClickCartButton = () => {
    router.push('/cart')
  }

  const [showMenu, setShowMenu] = React.useState(false)
  const [scrollPos, setScrollPos] = React.useState(0)
  const [isTransparentBg, setIsTransparentBg] = React.useState(true)

  const pathname = usePathname()

  const handleHumbergerButtonClick = () => {
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
}, [scrollPos, pathname])



  return {
    isTransparentBg,
    showMenu,
    handleHumbergerButtonClick,
    handleOnClickCartButton
  }
}

export default useNavigations