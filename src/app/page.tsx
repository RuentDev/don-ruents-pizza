import { getAllProducts, getProductsByCollectionHandle } from './api/products/query'
import reviewData from '../data/testimonyData.json'
import Components from '@/components'
import React from 'react'


const HomePage = async () => {

  const products = await getAllProducts()
  const featuredProducts = await getProductsByCollectionHandle('featured')

  return (
    <main className='h-auto w-full'>
      {/* LANDING SECTION */}
      <Components.Sections.LandingSection />
      {/* ABOUT SECTION */}
      <Components.Sections.AboutSection />
      {/* ABOUT2 SECTION */}
      <Components.Sections.CommercialSection />
      {/* MENU SECTION */}
      <Components.Sections.ProductsSection products={products} />
      {/* BANNER */}
      <Components.Sections.BannerSection />
      {/* FEATURED SECTION */}
      <Components.Sections.FeaturedProductsSection products={featuredProducts} />
      {/* TESTIMONY SECTION */}
      <Components.Sections.TestimonySection reviews={reviewData} />
      {/* LOCATION SECTION */}
      <Components.Sections.LocationsSection />
      {/* NEWSLETTER */}
      <section className='newsletter-section w-full h-auto'></section>
      {/* CONTACT US */}
      <section className='contact-us h-auto w-full'></section>
    </main>
  )
}

export default HomePage
