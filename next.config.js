/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: { unoptimized: true },
	env: {
		SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN,
		SHOPIFY_STOREFRONT_ACCESS_TOKEN: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN,
		SHOPIFY_LOCAL_STORAGE_ITEM_NAME: process.env.SHOPIFY_LOCAL_STORAGE_ITEM_NAME,
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

module.exports = nextConfig;
