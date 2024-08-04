
import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider'
import FontAwesomeProvider from '../components/FontAwesomeProvider'
import { Footer, Navbar } from '@/components'


const oswald = Oswald({
  subsets: ['latin'],
  weight: '400',
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Don Ruents | Pizza',
  description: 'Make it unforgettable',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={oswald.className}>
        <FontAwesomeProvider>
          <ReduxProvider>
            <Navbar />
            {children}
            <Footer />
          </ReduxProvider>
        </FontAwesomeProvider>
      </body>
    </html>
  )
}
