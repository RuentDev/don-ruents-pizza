/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
	env: {
		SHOPIFY_STORE_DOMAIN: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || process.env.SHOPIFY_STORE_DOMAIN,
		SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
		SHOPIFY_LOCAL_STORAGE_ITEM_NAME: process.env.NEXT_PUBLIC_SHOPIFY_LOCAL_STORAGE_ITEM_NAME || process.env.SHOPIFY_LOCAL_STORAGE_ITEM_NAME,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.shopify.com',
				port: '',
				pathname: '/s/files/**',
			},
		],
	},
};

export default nextConfig;
