# GEMINI.md - Don Ruent's Pizza Headless Shopify Guidelines

## Overview
This repository contains the Next.js headless storefront for Don Ruent's Pizza, integrated with Shopify Storefront GraphQL API.

## Project Conventions & Best Practices
1. **Shopify Cart Management**:
   - Cart data is stored in `localStorage` under the key `"donruentpizza:shopify:cart"`.
   - When adding items to cart, components must verify if a valid cart ID exists in `localStorage`.
   - If no cart exists, automatically invoke `createCart()`, save the returned cart object in `localStorage`, and proceed to add the item via `addItemToCart()`.
2. **GraphQL Node Mapping**:
   - Product objects fetched from Shopify Storefront API structure product variants under `product.variants.nodes`.
   - Map variant IDs (`product.variants.nodes[0].id`) as the `merchandiseId` when performing `cartLinesAdd` mutations.
3. **UI Feedback & Loading States**:
   - Components executing async cart operations must manage local or global state to prevent duplicate submissions during pending requests.
4. **TypeScript & Types**:
   - Core domain types are maintained in [`@/libs/types`](file:///Users/cruentgen/Documents/WORK/TypeScript/don-ruents-pizza/libs/types.ts).
5. **Framework & Dependencies**:
   - Next.js: `16.x`
   - React: `19.x`
   - React DOM: `19.x`

