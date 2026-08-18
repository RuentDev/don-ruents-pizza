import { lilita } from '@/libs/fonts'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Buttons from '../UI/Buttons'

interface LandingSectionProps {}

const LandingSection: React.FC<LandingSectionProps> = () => {
  return (
    <section 
      className="relative w-full min-h-[680px] md:min-h-[820px] bg-colorPrimary overflow-hidden bg-cover bg-center flex flex-col justify-between pt-[88px] md:pt-[104px]"
      style={{ backgroundImage: "url('https://cdn.shopify.com/s/files/1/0883/7867/1408/files/hero-5.jpg?v=1724746295')" }}
    >
      {/* Inline Keyframes for Bespoke Floating & Breathing Zoom Animations */}
      <style>{`
        @keyframes heroFloatZoom {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-18px) rotate(2.5deg) scale(1.04); }
        }
        @keyframes steamRise {
          0% { opacity: 0; transform: translateY(0) scale(0.9); }
          50% { opacity: 0.5; }
          100% { opacity: 0; transform: translateY(-45px) scale(1.3); }
        }
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-hero-float-zoom {
          animation: heroFloatZoom 6s ease-in-out infinite;
        }
        .animate-steam-1 {
          animation: steamRise 4s ease-out infinite;
        }
        .animate-steam-2 {
          animation: steamRise 4s ease-out infinite 2s;
        }
        .animate-badge-pulse {
          animation: badgePulse 3s ease-in-out infinite;
        }
      `}</style>

      {/* Hero Atmosphere Overlay Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Main Inner Container */}
      <div className="inner-container relative max-w-7xl mx-auto w-full flex flex-col items-center text-center z-10 px-4 sm:px-6 lg:px-8">
        
        {/* Sub-headline Tagline */}
        <div className="inline-flex items-center gap-2 bg-colorSecondary/90 text-primaryTextColor font-black text-xs md:text-sm uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg mb-2 transform hover:scale-105 transition-transform cursor-default">
          <span>🔥 Authentic Italian Pizza</span>
        </div>

        {/* Large Styled PIZZA Backdrop Header */}
        <h1 
          style={lilita.style} 
          className="relative text-[7.5rem] sm:text-[11rem] md:text-[15rem] font-extrabold text-white/90 leading-none select-none tracking-wider drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300"
        >
          PIZZA
        </h1>

        {/* Floating & Breathing Zoom Pizza Image with Rising Steam & Interactive Badges */}
        <div className="relative -mt-[4.5rem] sm:-mt-[7rem] md:-mt-[10rem] w-full max-w-[650px] md:max-w-[780px] flex items-center justify-center">
          
          {/* Steam FX Particles */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex gap-12 pointer-events-none z-20">
            <div className="w-12 h-12 bg-white/20 blur-xl rounded-full animate-steam-1" />
            <div className="w-16 h-16 bg-white/15 blur-xl rounded-full animate-steam-2" />
          </div>

          {/* Floating Pill Accent Badges */}
          <div className="hidden sm:flex absolute -left-2 md:left-4 top-1/3 z-30 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white p-3 rounded-2xl shadow-2xl items-center gap-3 animate-badge-pulse">
            <span className="text-2xl">🍕</span>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-colorSecondary tracking-wider">Crafted Daily</p>
              <p className="text-xs font-black text-white">Fresh Dough & Sauce</p>
            </div>
          </div>

          <div className="hidden sm:flex absolute -right-2 md:right-4 top-1/2 z-30 bg-slate-950/80 backdrop-blur-md border border-white/20 text-white p-3 rounded-2xl shadow-2xl items-center gap-3 animate-badge-pulse" style={{ animationDelay: '1.5s' }}>
            <span className="text-2xl">⚡</span>
            <div className="text-left">
              <p className="text-[10px] uppercase font-bold text-colorSecondary tracking-wider">Fast Delivery</p>
              <p className="text-xs font-black text-white">Hot To Your Door</p>
            </div>
          </div>

          {/* Main Floating & Breathing Zoom Interactive Pizza */}
          <div className="relative w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] md:w-[620px] md:h-[620px] animate-hero-float-zoom hover:scale-108 hover:rotate-3 transition-transform duration-700 ease-out cursor-pointer group">
            <Image 
              priority 
              alt="Don Ruent's Freshly Baked Wood-Fired Pizza" 
              fill
              sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, 620px"
              className="object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:drop-shadow-[0_30px_60px_rgba(242,189,38,0.4)] transition-all duration-700" 
              src="https://cdn.shopify.com/s/files/1/0883/7867/1408/files/hero-5-img.png?v=1724746094" 
            />
          </div>

        </div>

        {/* Hero Call to Action Buttons */}
        <div className="relative z-20 -mt-2 sm:mt-2 mb-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <Link href="/shop" className="w-full sm:w-auto">
            <Buttons.OrderNowButton 
              bg="colorSecondary" 
              bgHover="white" 
              textColor="primaryTextColor" 
              textHoverColor="colorPrimary" 
            />
          </Link>
          <Link 
            href="/shop" 
            className="w-full sm:w-auto py-3 px-8 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs sm:text-sm tracking-widest backdrop-blur-md border border-white/20 hover:border-colorSecondary transition-all duration-300 shadow-lg text-center"
          >
            Explore Full Menu
          </Link>
        </div>

      </div>

      {/* Bottom Wave Divider */}
      <div className="relative w-full h-auto z-10 -mb-1 pointer-events-none">
        <Image 
          className="w-full h-auto block" 
          style={{ width: "100%", height: "auto" }}
          src="https://cdn.shopify.com/s/files/1/0883/7867/1408/files/white-overlay-wave.png?v=1724746294" 
          width={1500} 
          height={100} 
          alt="white wave divider" 
        />
      </div>

    </section>
  )
}

export default LandingSection