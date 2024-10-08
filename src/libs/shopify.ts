import { createStorefrontApiClient } from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: process.env.SHOPIFY_STORE_DOMAIN as string,
  apiVersion: '2024-07',
  publicAccessToken: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN as string,
});

export default client