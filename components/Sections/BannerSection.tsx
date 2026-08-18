import * as React from 'react';

interface BannerSectionProps {
}

const BannerSection: React.FunctionComponent<BannerSectionProps> = (props) => {
  return (
    <section className='h-auto w-full p-10'>
        <div className="inner-container h-auto w-full grid gap-3 lg:grid-cols-3">
          {/* LEFT */}
          <div className="left-overlay w-full h-full rounded-md bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0883/7867/1408/files/carrers.jpg?v=1724767801" }}>
            <div className='left w-full h-full p-10 rounded-md flex flex-col items-center justify-center bg-overlay-6' >
              <h2 className='text-white text-[2.5rem] uppercase -tracking-3'>Carrers</h2>
              <p className='text-white'>What to join our team?</p>
              <button className='btn px-10 bg-colorPrimary text-white mt-5 rounded-none hover:bg-overlay-9 hover::border-2'>
                Learn More
              </button>
            </div>
          </div>
          {/* MIDDLE */}
          <div className="middle-overlay w-full h-full rounded-md bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0883/7867/1408/files/order-now.jpg?v=1724767801" }}>
            <div className='middle w-full h-full p-10 rounded-md flex flex-col items-center justify-center bg-overlay-6'>
              <h2 className='text-white text-[2.5rem] uppercase -tracking-3'>Order Now</h2>
              <p className='text-white'>Enjoy Testo Burgers at home!</p>
              <button className='btn px-10 bg-colorPrimary text-white mt-5 rounded-none hover:bg-overlay-9 hover::border-2'>
                Learn More
              </button>
            </div>
          </div>
          {/* RIGHT */}
          <div className="right-overlay w-full h-full rounded-md bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0883/7867/1408/files/gift-cards1.jpg?v=1724767801')" }}>
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
  )
};

export default BannerSection;
