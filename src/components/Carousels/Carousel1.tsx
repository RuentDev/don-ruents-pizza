"use client"
import React from 'react'
import Image from 'next/image'

type CarouselDataTypes = {
  id: number
  name: string
  review: string
  ratings: number
  img: string
}

type Carousel1Props = {
  slides: Array<CarouselDataTypes>
  
}

const Carousel1 = (props: Carousel1Props) => {

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const intervalRef = React.useRef()


  React.useEffect(() => {
    startAutoPlay()
  
    return () => {
      stopAutoPlay()
    }
  })


  const startAutoPlay = () => {
    setInterval(() => {
      nextSlide()
    }, 5000)
  }

  const stopAutoPlay = () => {
    clearInterval(intervalRef.current);
  }

  const nextSlide = () => {
    if(props.slides && props.slides.length > 0) {
      setCurrentSlide((prevState: number) => (prevState + 1) % props.slides.length)
    }
  }

  return (
    <div className='carousel w-full h-auto p-10 overflow-hidden'>
      <div className="slider w-full min-h-[50vh] flex relative">
        {props.slides.map((slide) => (
          <React.Fragment key={slide.id}>
            <div className={`slide flex justify-center items-center flex-col absolute w-full h-full ${slide.id === currentSlide ? "opacity-100" : "opacity-0"} ease-in-out duration-[3000ms]`}>
              {/* CLIENT COMMENT */}
              <p className='text-center text-[1.5rem] md:text-[3rem]'>&#34;{slide.review}&#34;</p>
                {/* ClIENT ICON */}
              <div className="client-icon-container h-[100px] w-[100px] rounded-full overflow-hidden my-5">
                <Image priority src='/images/other/review-author-no-image.jpg' alt='user_testimony' width={100} height={100} />
              </div>

              {/* CLIENT NAME */}
              <h1>{slide.name}</h1>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div> 
  )
}

export default Carousel1