import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'RallyVerse \u2014 Where Every Event Is A New Verse',
  description:
    'RallyVerse organizes badminton tournaments, treks, marathons, and cycling events across India.',
  openGraph: {
    title: 'RallyVerse \u2014 Where Every Event Is A New Verse',
    description:
      'RallyVerse organizes badminton tournaments, treks, marathons, and cycling events across India.',
    siteName: 'RallyVerse',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
