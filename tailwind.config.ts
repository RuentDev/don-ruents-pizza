import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "reviewSectionImage": "url('https://cdn.shopify.com/s/files/1/0883/7867/1408/files/reviews-section-image.jpg?v=1724768299')",
        "banner1": "url('https://cdn.shopify.com/s/files/1/0883/7867/1408/files/category-1.jpg?v=1724767800')"
      },

      colors: {
        "backgroundWhite": "#FFFFFF",
        "colorPrimary": "#C10B00",
        "colorSecondary": "#F2BD26",
        "colorLightDark": "#8D8D99",
        "colorDark": "#02a189",

        "overlay-9": "rgba(0, 0, 0, 0.9)",
        "overlay-8": "rgba(0, 0, 0, 0.8)",
        "overlay-7": "rgba(0, 0, 0, 0.7)",
        "overlay-6": "rgba(0, 0, 0, 0.6)",
        "overlay-5": "rgba(0, 0, 0, 0.5)",
        "overlay-4": "rgba(0, 0, 0, 0.4)",
        "overlay-3": "rgba(0, 0, 0, 0.3)",
        "overlay-2": "rgba(0, 0, 0, 0.2)",
        "overlay-1": "rgba(0, 0, 0, 0.1)",

        'borderDark': '#d5d5d5',
        //Heading Color
        "primaryTextColor": "#6C4143",
        "secondaryTextColor": "#56423E"
      },
      screens: {
        'xs': '400px',
        // => @media (min-width: 850px) { ... }
        'sm': '600px',
        // => @media (min-width: 850px) { ... }
        'md': '760px',
        // => @media (min-width: 760px) { ... }
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
     
      letterSpacing: {
        '1': '0',
        '2': '0.025em',
        '3': '0.05em',
        '4': '0.1em',
      }
    },
  },
  plugins: [],
}
export default config