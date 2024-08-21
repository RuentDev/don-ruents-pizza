"use client"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

type Slide = {
  id: number
  name: string
  review: string
  ratings: number
  img: string
}

interface ReactSlickSliderProps{
  slides: Slide[]
}


export default class ReactSlickSlider extends Component<ReactSlickSliderProps> {
  constructor(props: ReactSlickSliderProps){
    super(props)
  }


	render() {

		const settings = {
			dots: false,
			infinite: true,
			speed: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      
		};
	

		return (
      <div className="slick-slider parallax-container h-auto w-full relative py-10 overflow-hidden">
        <div className="parallax-bg bg-reviewSectionImage absolute top-0 left-0 w-full h-full bg-fixed bg-cover bg-center bg-no-repeat z-[-1]"></div>
        <div className="parallax-content md:h-[60vh] w-full relative z-10">
          <Slider {...settings} className="slider w-full h-auto">
              {this.props.slides.map((review) => {
                return (
                  <div key={review.id} className="slide w-full h-auto md:px-5 md:py-10">
                    <div className="slide-container text-white w-full h-auto flex flex-col gap-5 items-center justify-center">
                      <p className="text-[2rem] md:w-[60%] text-center italic">&quot;{review.review}&quot;</p>
                      <div className="review-user-icon w-20 h-20 rounded-full overflow-hidden">
                        <Image src={review.img} alt={`${review.name}-review-icon`} width={100} height={100}/>
                      </div>
                      <h4>{review.name}</h4> 
                      
                    </div>
                  </div>
                )
                })}
          </Slider>
        </div>
      </div>
    );
	}
}