
import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider'
import FontAwesomeProvider from '../components/UI/FontAwesomeProvider'
import Components from '@/components'
import { oswald } from '@/libs/fonts'

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
            <Components.Navbar />
            {children}
            <Components.Footer />
          </ReduxProvider>
        </FontAwesomeProvider>
      </body>
    </html>
  )
}
