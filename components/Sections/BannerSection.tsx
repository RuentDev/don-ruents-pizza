import * as React from "react";
import { lilita } from "@/libs/fonts";
import Link from "next/link";

interface BannerCardData {
  id: string;
  tag: string;
  tagBg: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  bgImage: string;
}

// Module-level static array hoisting (Vercel React Best Practice: rerender-memo-with-default-value)
const BANNER_CARDS: BannerCardData[] = [
  {
    id: "careers",
    tag: "💼 Careers",
    tagBg: "bg-colorSecondary text-primaryTextColor",
    title: "Join Our Family",
    description:
      "Passionate about real Italian pizza? Join our team of chefs, kitchen staff, & delivery drivers!",
    buttonText: "Apply Today",
    href: "/shop",
    bgImage:
      "https://cdn.shopify.com/s/files/1/0883/7867/1408/files/carrers.jpg?v=1724767801",
  },
  {
    id: "order-now",
    tag: "⚡ Express Delivery",
    tagBg: "bg-colorPrimary text-white border border-white/20",
    title: "Order Fresh Online",
    description:
      "Enjoy hot artisan pizzas & fresh authentic Italian recipes delivered straight to your door!",
    buttonText: "Order Now",
    href: "/shop",
    bgImage:
      "https://cdn.shopify.com/s/files/1/0883/7867/1408/files/order-now.jpg?v=1724767801",
  },
  {
    id: "gift-cards",
    tag: "🎁 Gift Cards",
    tagBg: "bg-colorSecondary text-primaryTextColor",
    title: "Share The Joy",
    description:
      "Give the gift of delicious wood-fired pizza with custom digital & physical vouchers!",
    buttonText: "Send A Gift",
    href: "/shop",
    bgImage:
      "https://cdn.shopify.com/s/files/1/0883/7867/1408/files/gift-cards1.jpg?v=1724767801",
  },
];

interface BannerSectionProps {}

const BannerSection: React.FunctionComponent<BannerSectionProps> = () => {
  return (
    <section className="relative w-full bg-backgroundWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="grid gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3">
          {BANNER_CARDS.map((card) => (
            <div
              key={card.id}
              className="group relative w-full h-[340px] sm:h-[380px] rounded-3xl overflow-hidden border border-borderDark/60 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
            >
              {/* Background Image with 1.1x Zoom */}
              <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url('${card.bgImage}')` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30 group-hover:from-black/95 transition-all duration-300" />

              {/* Card Content */}
              <div className="relative z-10 w-full h-full p-8 flex flex-col justify-between items-start text-left">
                <span
                  className={`${card.tagBg} font-black text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full shadow-md`}
                >
                  {card.tag}
                </span>

                <div className="space-y-3">
                  <h3
                    style={lilita.style}
                    className="text-3xl sm:text-4xl text-white uppercase tracking-wide drop-shadow-md"
                  >
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed line-clamp-2">
                    {card.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 bg-colorSecondary hover:bg-colorPrimary text-primaryTextColor hover:text-white font-black text-xs uppercase tracking-wider px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
                    >
                      <span>{card.buttonText}</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(BannerSection);
