"use client";
import React, { useState, useCallback } from "react";
import FeaturedCard from "../Cards/FeaturedCard";
import { Product } from "@/libs/types";
import { addItemToCart, createCart } from "@/app/api/cart/mutation";
import { notifyCartUpdate } from "@/libs/cartEvent";

interface FeaturedMenuProps {
  products: Product[];
}

const FeaturedMenu: React.FC<FeaturedMenuProps> = ({ products }) => {
  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  const handleAddToCartClick = useCallback(async (product: Product) => {
    const variantId = product?.variants?.nodes?.[0]?.id;
    if (!variantId) {
      console.error("No valid product variant node found for:", product.title);
      return;
    }

    try {
      setLoadingProductId(product.id);
      const localCartJsonData = localStorage.getItem(
        "donruentpizza:shopify:cart",
      );
      let cartId = "";

      if (localCartJsonData) {
        try {
          const cart = JSON.parse(localCartJsonData);
          cartId = cart?.id || "";
        } catch {
          cartId = "";
        }
      }

      if (!cartId) {
        const cartData = await createCart();
        if (cartData?.id) {
          cartId = cartData.id;
          localStorage.setItem(
            "donruentpizza:shopify:cart",
            JSON.stringify(cartData),
          );
        } else {
          console.error("Failed to create Shopify cart");
          return;
        }
      }

      const updatedRes = await addItemToCart(cartId, variantId, 1);
      const cartData = updatedRes?.cartLinesAdd?.cart;

      // Notify application instantly of the cart update
      notifyCartUpdate({
        id: cartId,
        totalQuantity: cartData?.totalQuantity,
        addedQuantity: 1,
      });
    } catch (error) {
      console.error("Error adding item to cart:", error);
    } finally {
      setLoadingProductId(null);
    }
  }, []);

  return (
    <div className="featured-menu w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch justify-center">
          {products?.map((product, index) => (
            <li key={product.id || index} className="flex">
              <FeaturedCard
                image={product.featuredImage?.url || ""}
                title={product.title}
                description={product.description}
                price={product.priceRange.minVariantPrice}
                ratings={0}
                isLiked={false}
                onClick={() => {}}
                onAddToCart={() => handleAddToCartClick(product)}
                isAdding={loadingProductId === product.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(FeaturedMenu);
