import { lilita } from "@/libs/fonts";
import React from "react";
import ProductMenu from "../UI/Menus/ProductMenu";

interface ProductsSectionProps {
  products: any;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ products }) => {
  return (
    <section
      id="menu"
      className="menu-section w-full bg-backgroundWhite flex flex-col items-center"
    >
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-5">
        <span className="bg-colorSecondary text-primaryTextColor font-black text-xs uppercase tracking-[0.25em] px-4 py-1.5 rounded-full shadow-sm mb-3">
          🍕 Authentic Italian Menu
        </span>
        <h2
          style={lilita.style}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-primaryTextColor uppercase tracking-wide drop-shadow-sm"
        >
          Our Original Recipe
        </h2>
        <p className="text-sm sm:text-base text-secondaryTextColor mt-4 leading-relaxed">
          Discover our handcrafted artisan pizzas, baked to perfection with
          fresh ingredients, signature tomato sauce, and 100% real mozzarella.
        </p>
      </div>
      <ProductMenu products={products} />
    </section>
  );
};

export default ProductsSection;
