import React from 'react'
import Image from 'next/image'
import aboutdata from '../data/aboutData.json'
import Components from '@/components'
import FeaturedMenu from '../components/Menus/FeaturedMenu'
import { Lilita_One } from 'next/font/google'
import locations from './../data/locations.json'
import reviewData from '../data/testimonyData.json'
import { getAllProducts, getProductsByCollectionHandle } from './api/products/query'
import Icon from '@/components/Icon'

const lilita = Lilita_One({
  subsets: ['latin'],
  weight: '400',
  preload: true,
  adjustFontFallback: true,
})

const HomePage = async () => {

  const products = await getAllProducts()
  const featuredProducts = await getProductsByCollectionHandle('featured')

  return (
    <main className='h-auto w-full'>
      {/* MAIN SECTION */}
      <section className='h-auto w-full bg-colorPrimar overflow-hidden' style={{ backgroundImage: "url('/hero-5.jpg')" }}>
        <div className="inner-container relative w-full h-full flex flex-col items-center pt-[100px]">
          <h2 style={lilita.style} className='relative text-[8rem] sm:text-[10rem] md:text-[15rem] font-extrabold text-white leading-none opacity-50'>PIZZA</h2>
          <div className="image-container relative -top-[2rem] md:-top-[4rem] w-full flex items-center justify-center z-10 px-6 sm:px-[2rem] md:px-[4rem]" >
            <Image className='w-auto h-auto' width={1000} height={1000} alt='hero' src={"/hero-5-img.png"} priority />
          </div>
          <div className="wave w-full h-auto">
            <Image className='w-full h-auto' src="/white-overlay-wave.png" width={500} height={100} alt='wave' />
          </div>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section className='w-full h-auto '>
        <div className="inner-container py-10 px-10 sm:px-10">
          <ul className='flex flex-col md:flex-row md:gap-5'>
            {aboutdata.map((item: any) => {
              return (
                <li key={item.id} className='my-5 flex flex-col justify-center items-center text-center'>
                  <Image src={item.iconPath} color='white' width={150} height={150} alt='test' />
                  <h2 className='text-primaryTextColor uppercase text-[1.5rem] md:text-[1.2rem] font-[500] -tracking-2'>{item.label}</h2>
                  <p className='text-secondaryTextColor mt-2'>{item.subHeading}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>
      {/* ABOUT2 SECTION */}
      <section className='commercial bg-colorSecondary h-auto w-full'>
        <div className="inner-container flex flex-col gap-7 sm:flex-row justify-center w-full h-auto p-10 md:p-20">
          <div className="image-container w-full h-auto flex items-center justify-center">
            <div className="inner-container relative w-full h-auto sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem]">
              <Image src={"/about-02-img.png"} className='w-auto h-auto' width={200} height={100} alt='about-image' priority />
            </div>
          </div >
          <div className="content-container block w-full h-auto">
            <h2 className='text-primaryTextColor text-[2rem] md:text-[2rem] lg:text-[3rem] font-[500] lg:font-[700] -tracking-2'>NOTHING BRINGS PEOPLE TOGETHER LIKE A GOOD PIZZA</h2>
            <p className='text-secondaryTextColor font-extralight '>Porta semper lacus cursus, feugiat primis ultrice a ligula risus auctor an tempus feugiat dolor lacinia cubilia curae at integer orci congue and metus in mollislorem primis gravida</p>
            <div className='button-container w-full h-auto mt-10'>
              <Components.Buttons.OrderNowButton 
                bg="colorPrimary" 
                bgHover="white" 
                textColor="white" 
                textHoverColor="colorSecondary" 
              />
            </div>
          </div>
        </div>
      </section>
      {/* MENU SECTION */}
      <section id='#menu' className='menu-section h-auto w-full flex flex-col items-center px-10'>
        <h2 style={lilita.style} className='text-[3rem] text-colorPrimary text-center mt-5 mb-2'>Our Original Recipe</h2>
        <p className='text-secondaryTextColor text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis animi dignissimos reiciendis eveniet neque laboriosam tenetur?</p>
        <Components.ProductMenu products={products} />
      </section>
      {/* BANNER */}
      <section className='h-auto w-full p-10'>
        <div className="inner-container h-auto w-full grid gap-3 lg:grid-cols-3">
          {/* LEFT */}
          <div className="left-overlay w-full h-full rounded-md bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/images/banners/carrers.jpg')" }}>
            <div className='left w-full h-full p-10 rounded-md flex flex-col items-center justify-center bg-overlay-6' >
              <h2 className='text-white text-[2.5rem] uppercase -tracking-3'>Carrers</h2>
              <p className='text-white'>What to join our team?</p>
              <button className='btn px-10 bg-colorPrimary text-white mt-5 rounded-none hover:bg-overlay-9 hover::border-2'>
                Learn More
              </button>
            </div>
          </div>
          {/* MIDDLE */}
          <div className="middle-overlay w-full h-full rounded-md bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/images/banners/order-now.jpg')" }}>
            <div className='middle w-full h-full p-10 rounded-md flex flex-col items-center justify-center bg-overlay-6'>
              <h2 className='text-white text-[2.5rem] uppercase -tracking-3'>Order Now</h2>
              <p className='text-white'>Enjoy Testo Burgers at home!</p>
              <button className='btn px-10 bg-colorPrimary text-white mt-5 rounded-none hover:bg-overlay-9 hover::border-2'>
                Learn More
              </button>
            </div>
          </div>
          {/* RIGHT */}
          <div className="right-overlay w-full h-full rounded-md bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('/images/banners/gift-cards1.jpg')" }}>
            <div className='right w-full h-full p-10 rounded-md flex flex-col items-center justify-center bg-overlay-6'>
              <h2 className='text-white text-[2.5rem] uppercase -tracking-3'>Gift Cards</h2>
              <p className='text-white'>Give the gift of Yummy!</p>
              <button className='btn px-10 bg-colorPrimary text-white mt-5 rounded-none hover:bg-overlay-9 hover::border-2'>
                Learn More
              </button>
            </div>
          </div>

        </div>
      </section>
      {/* FEATURED SECTION */}
      <section className='featured-section w-full h-auto'>
        <FeaturedMenu products={featuredProducts} />
      </section>
      {/* TESTIMONY SECTION */}
      <section className='testimony-section w-full h-auto'>
        <h2 style={lilita.style} className="text-[3rem] text-colorPrimary text-center mt-5 mb-2">What other people say?</h2>
        {/* <Carousel1 slides={reviewData} /> */}
        <Components.ReactSlickSlider slides={reviewData} />
      </section>
      {/* LOCATION SECTION */}
      <section className='gallery-section w-full h-auto p-5 lg:p-10'>
        <h2 style={lilita.style} className="text-[3rem] text-colorPrimary text-center mt-5 mb-2">Our locations</h2>
        <div className="inner-container w-full h-auto">
          <div className="locatios-contents w-full h-auto grid grid-cols-1 md:grid-cols-3 md:gap-5">
            {locations.map((location) => (
              <div
                key={location.id}
                className='w-full h-auto flex flex-col justify-center items-center text-center my-3'
              >
                <div className="image-container  w-full h-[25rem] md:h-[15rem] lg:h-[25rem] relative overflow-hidden rounded-md">
                  <Image
                    className='absolute object-center object-cover w-auto h-auto hover:scale-[1.1] ease-in-out duration-1000'
                    src={location.image}
                    alt={location.name}
                    width={500}
                    height={500}
                    priority

                  />
                </div>
                <h3 className='text-[2rem] mt-5 text-colorPrimary uppercase'>{location.name}</h3>
                <p className='text-[1.2rem]'><Icon iconName={{prefix: "fas", iconName: "phone"}} size={17}/> {location.phone}</p>
                <h4 className='text-[1.5rem]'>ADDRESS</h4>
                <p className=' max-w-[300px] text-gray-500'>{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* NEWSLETTER */}
      <section className='newsletter-section w-full h-auto'>

      </section>
      {/* CONTACT US */}
      <section className='contact-us h-auto w-full'>

      </section>
    </main>
  )
}

export default HomePage
