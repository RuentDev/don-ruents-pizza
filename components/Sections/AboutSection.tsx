import React from 'react'
import aboutData from '@/data/aboutData.json'
import Image from 'next/image'
import { lilita } from '@/libs/fonts'

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 bg-backgroundWhite overflow-hidden">
      
      {/* Brand Ambient Background Glow Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-10 w-96 h-96 bg-colorPrimary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-10 w-96 h-96 bg-colorSecondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Design System Tokens */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="bg-colorSecondary text-primaryTextColor font-black text-xs uppercase tracking-[0.25em] px-4 py-1.5 rounded-full shadow-sm mb-3">
            Why Choose Don Ruent&apos;s
          </span>
          <h2 
            style={lilita.style} 
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-primaryTextColor uppercase tracking-wide drop-shadow-sm"
          >
            The Art of Authentic Pizza
          </h2>
          <p className="text-sm sm:text-base text-secondaryTextColor mt-4 leading-relaxed">
            We blend century-old Italian baking traditions with fresh, organic ingredients to deliver an uncompromised, mouth-watering pizza experience every time.
          </p>
        </div>

        {/* Feature Cards Grid bound to Design System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 items-stretch">
          {aboutData.map((item, index) => {
            return (
              <div 
                key={item.id} 
                className="group relative bg-backgroundWhite rounded-3xl p-8 border border-borderDark shadow-md hover:shadow-2xl hover:border-colorSecondary hover:-translate-y-2.5 transition-all duration-300 flex flex-col items-center text-center justify-between"
              >
                {/* Step Counter Pill in Brand Secondary & Primary */}
                <span className="absolute top-5 right-6 text-xs font-black text-primaryTextColor bg-colorSecondary px-3 py-1 rounded-full shadow-sm">
                  0{index + 1}
                </span>

                <div className="flex flex-col items-center">
                  {/* Icon Container with Brand Glow */}
                  <div className="w-20 h-20 rounded-2xl bg-colorPrimary/10 border border-colorPrimary/20 flex items-center justify-center p-4 shadow-inner mb-6 group-hover:scale-110 group-hover:bg-colorSecondary/20 group-hover:border-colorSecondary/40 transition-all duration-300">
                    <Image 
                      alt={item.label} 
                      width={48} 
                      height={48} 
                      src={item.iconPath} 
                      className="w-12 h-12 object-contain filter drop-shadow-sm"
                      priority
                    />
                  </div>

                  {/* Title & Subheading using Brand Text Tokens */}
                  <h3 className="text-lg sm:text-xl font-bold uppercase text-primaryTextColor tracking-wider group-hover:text-colorPrimary transition-colors duration-200">
                    {item.label}
                  </h3>

                  <p className="text-xs sm:text-sm text-secondaryTextColor mt-3 leading-relaxed">
                    {item.subHeading}
                  </p>
                </div>

                {/* Bottom Card Gold Highlight Bar */}
                <div className="w-12 h-[3px] bg-colorSecondary rounded-full mt-6 group-hover:w-20 transition-all duration-300" />
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default AboutSection
