import React from "react";
import Image from "next/image";
import Link from "next/link";
import { lilita } from "@/libs/fonts";
import Buttons from "../UI/Buttons";

interface CommercialSectionProps {}

const CommercialSection: React.FC<CommercialSectionProps> = () => {
  return (
    <section className="relative w-full bg-colorSecondary py-16 sm:py-20 md:py-24 overflow-hidden shadow-inner">
      {/* Inline Keyframes for Heartbeat Pulse & Floating Animations */}
      <style>{`
        @keyframes heartBeatPulse {
          0%, 100% { transform: scale(1) rotate(0deg); }
          14% { transform: scale(1.05) rotate(1deg); }
          28% { transform: scale(1) rotate(0deg); }
          42% { transform: scale(1.03) rotate(-1deg); }
          70% { transform: scale(1) rotate(0deg); }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-heart-beat {
          animation: heartBeatPulse 3.5s ease-in-out infinite;
        }
        .animate-float-badge {
          animation: floatBadge 4s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Brand Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-colorPrimary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* LEFT: Interactive Heart-Shaped Pizza Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center relative">
            {/* Floating Discount Offer Badge */}
            <div className="absolute -top-4 sm:-top-6 right-4 sm:right-10 z-20 bg-colorPrimary text-white text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-2 rounded-2xl shadow-xl border border-white/20 animate-float-badge flex items-center gap-2">
              <span className="text-lg">🔥</span>
              <div>
                <p className="text-[10px] text-colorSecondary">Limited Time</p>
                <p>20% OFF Online Order</p>
              </div>
            </div>

            {/* Heart Pizza with Pulse & 3D Tilt Hover */}
            <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] flex items-center justify-center animate-heart-beat hover:scale-108 transition-transform duration-500 cursor-pointer group">
              <Image
                src="https://cdn.shopify.com/s/files/1/0883/7867/1408/files/about-02-img.png?v=1724746295"
                alt="Heart-Shaped Special Pizza"
                fill
                sizes="(max-width: 640px) 280px, (max-width: 768px) 380px, 440px"
                className="object-contain filter drop-shadow-[0_16px_32px_rgba(108,65,67,0.35)] group-hover:drop-shadow-[0_24px_48px_rgba(193,11,0,0.45)] transition-all duration-500"
                priority
              />
            </div>
          </div>

          {/* RIGHT: High-Converting Commercial Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-colorPrimary text-white font-black text-xs uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-md">
              <span>❤️ Baked With Passion &amp; Love</span>
            </div>

            {/* Main Headline */}
            <h2
              style={lilita.style}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primaryTextColor uppercase tracking-wide leading-tight drop-shadow-sm"
            >
              Nothing Brings People Together Like A Good Pizza
            </h2>

            {/* Realistic Body Copy */}
            <p className="text-sm sm:text-base text-primaryTextColor/90 font-medium leading-relaxed max-w-xl">
              Baked fresh to order with extra mozzarella, signature artisan
              tomato sauce, and hand-selected toppings. Share the warmth of real
              Italian tradition with your loved ones today.
            </p>

            {/* Dual Action CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Buttons.OrderNowButton
                bg="colorPrimary"
                bgHover="white"
                textColor="white"
                textHoverColor="colorPrimary"
              />
              <Link
                href="/shop"
                className="w-full sm:w-auto py-3.5 px-7 rounded-full border-2 border-primaryTextColor text-primaryTextColor font-bold uppercase text-xs sm:text-sm tracking-wider hover:bg-primaryTextColor hover:text-white transition-all duration-300 shadow-sm text-center"
              >
                Claim 20% Discount
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialSection;
