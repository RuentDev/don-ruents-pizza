import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const client = createStorefrontApiClient({
  storeDomain: (process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ||
    process.env.SHOPIFY_STORE_DOMAIN) as string,
  apiVersion: (process.env.NEXT_PUBLIC_SHOPIFY_STORE_API_VERSION ||
    "2026-01") as string,
  publicAccessToken: (process.env
    .NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN ||
    process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN) as string,
});

export default client;
