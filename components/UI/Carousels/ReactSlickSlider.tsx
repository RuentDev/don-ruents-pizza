"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Slide = {
  id: number;
  name: string;
  title?: string;
  review: string;
  ratings?: number;
  img?: string;
};

interface ReactSlickSliderProps {
  slides: Slide[];
}

// Custom Glassmorphic Prev Arrow
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -left-2 sm:left-2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 text-primaryTextColor backdrop-blur-md shadow-xl border border-white/60 flex items-center justify-center transition-all duration-300 hover:bg-colorSecondary hover:scale-110 active:scale-95 group"
      aria-label="Previous slide"
    >
      <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
};

// Custom Glassmorphic Next Arrow
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 -right-2 sm:right-2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/90 text-primaryTextColor backdrop-blur-md shadow-xl border border-white/60 flex items-center justify-center transition-all duration-300 hover:bg-colorSecondary hover:scale-110 active:scale-95 group"
      aria-label="Next slide"
    >
      <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};

const ReactSlickSlider: React.FC<ReactSlickSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    appendDots: (dots: any) => (
      <div className="mt-8">
        <ul className="flex items-center justify-center gap-2 m-0 p-0 list-none">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-full h-full cursor-pointer" />
    )
  };

  return (
    <div className="w-full relative py-12 sm:py-16 md:py-20 overflow-hidden bg-reviewSectionImage bg-fixed bg-cover bg-center bg-no-repeat">
      
      {/* Brand Red/Burgundy Parallax Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-colorPrimary/90 via-colorPrimary/85 to-colorPrimary/95 backdrop-blur-sm pointer-events-none" />

      {/* Inline Styles for Expanding Gold Capsule Pills & Dots */}
      <style>{`
        .testimonial-slider .slick-dots li {
          width: 12px;
          height: 12px;
          margin: 0 4px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .testimonial-slider .slick-dots li button {
          width: 100%;
          height: 100%;
          padding: 0;
        }
        .testimonial-slider .slick-dots li button:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.4);
          border: 1.5px solid rgba(255, 255, 255, 0.7);
          opacity: 1;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }
        .testimonial-slider .slick-dots li.slick-active {
          width: 32px;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          width: 32px;
          background-color: #F2BD26;
          border-color: #FFFFFF;
          box-shadow: 0 4px 12px rgba(242, 189, 38, 0.5);
        }
      `}</style>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Slider {...settings} className="testimonial-slider w-full">
          {slides.map((review) => {
            return (
              <div key={review.id} className="px-2 sm:px-8 py-4">
                
                {/* Elevated Glassmorphic Card Aligned to Design System */}
                <div className="relative max-w-3xl mx-auto bg-backgroundWhite rounded-3xl p-8 sm:p-12 shadow-2xl border border-borderDark text-center overflow-hidden">
                  
                  {/* Giant Translucent Gold Quote Mark Watermark */}
                  <span className="absolute -top-4 left-6 text-colorSecondary/20 text-[7rem] sm:text-[9rem] font-serif leading-none pointer-events-none select-none">
                    &ldquo;
                  </span>

                  <div className="relative z-10 flex flex-col items-center space-y-4">
                    
                    {/* 5-Star Rating Star Badge */}
                    <div className="flex items-center gap-1.5 text-colorSecondary text-lg sm:text-xl drop-shadow-sm">
                      {"★".repeat(5)}
                    </div>

                    {/* Review Quote Body Text */}
                    <p className="text-primaryTextColor text-base sm:text-xl font-semibold italic leading-relaxed max-w-2xl">
                      &ldquo;{review.review}&rdquo;
                    </p>

                    {/* Customer Info & Title */}
                    <div className="pt-3 flex flex-col items-center">
                      <h4 className="text-colorPrimary font-extrabold uppercase text-sm sm:text-base tracking-widest">
                        {review.name}
                      </h4>
                      <p className="text-xs text-secondaryTextColor font-medium mt-0.5">
                        {review.title || "Verified Pizza Lover"}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </Slider>
      </div>

    </div>
  );
};

export default React.memo(ReactSlickSlider);
