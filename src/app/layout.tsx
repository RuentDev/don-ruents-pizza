
import './globals.css'
import type { Metadata } from 'next'
import { Oswald } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider'
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import { __DEV__ } from '@apollo/client/utilities/globals'
// import { getServerSession } from 'next-auth'
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


if (__DEV__) {  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const session = await getServerSession()

  return (
    <html lang="en">
      <body className={oswald.className}>
        {/* <SessionProvider session={session}> */}
        <FontAwesomeProvider>
          <ReduxProvider>
            <Navbar />
              {children}
            <Footer />
          </ReduxProvider>
        </FontAwesomeProvider>
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}
