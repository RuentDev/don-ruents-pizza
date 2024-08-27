import { lilita } from '@/libs/fonts'
import React from 'react'
import Image from 'next/image'

interface LandingSectionProps {}

const LandingSection: React.FC<LandingSectionProps> = ({}) => {

    return(
			<section className='h-auto w-full bg-colorPrimar overflow-hidden' style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0883/7867/1408/files/hero-5.jpg?v=1724746295" }}>
				<div className="inner-container relative w-full h-full flex flex-col items-center pt-[100px]">
					<h2 style={lilita.style} className='relative text-[8rem] sm:text-[10rem] md:text-[15rem] font-extrabold text-white leading-none opacity-50'>PIZZA</h2>
					<div className="image-container relative -top-[2rem] md:-top-[4rem] w-full flex items-center justify-center z-10 px-6 sm:px-[2rem] md:px-[4rem]" >
						<Image 
							priority 
							alt='hero' 
							width={700} 
							height={700} 
							className='w-auto h-auto' 
							src={"https://cdn.shopify.com/s/files/1/0883/7867/1408/files/hero-5-img.png?v=1724746094"} 
						/>
					</div>
					<div className="wave w-full h-auto">
						<Image 
              className='w-full h-auto' 
              src="https://cdn.shopify.com/s/files/1/0883/7867/1408/files/white-overlay-wave.png?v=1724746294" 
              width={1500} 
              height={100} 
              alt='wave' 
            />
					</div>
				</div>
			</section>
    )
}

export default LandingSection