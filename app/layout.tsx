import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dngtnv - Tech Blog',
  description: 'A tech blog by Dngtnv',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="mx-auto min-h-screen max-w-5xl pt-24">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
