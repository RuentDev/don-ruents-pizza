import React from 'react'
import aboutdata from '@/data/aboutData.json'
import Image from 'next/image'


interface AboutSectionProps{}

const AboutSection: React.FC<AboutSectionProps> = () => {

    return (
    <section className='w-full h-auto '>
        <div className="inner-container py-10 px-10 sm:px-10">
          <ul className='flex flex-col md:flex-row md:gap-5'>
            {aboutdata.map((item: any) => {
              return (
                <li key={item.id} className='my-5 flex flex-col justify-center items-center text-center'>
                  <Image 
                    alt='test' 
                    width={150} 
                    height={150} 
                    color='white' 
                    src={item.iconPath} 
                    priority
                  />
                  <h2 className='text-primaryTextColor uppercase text-[1.5rem] md:text-[1.2rem] font-[500] -tracking-2'>{item.label}</h2>
                  <p className='text-secondaryTextColor mt-2'>{item.subHeading}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
    )
}

export default AboutSection

