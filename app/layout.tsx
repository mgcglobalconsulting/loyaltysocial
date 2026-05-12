import type { Metadata } from 'next'
import { Cormorant_Garamond, Montserrat } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-label',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Loyalty Social Ultra Lounge | Upscale Nightlife · Randallstown, MD',
  description:
    'Loyalty Social Ultra Lounge — an elevated social lounge serving Baltimore County. VIP tables, private events, professional mixers, food, drinks, and weekly events in Randallstown, MD.',
  openGraph: {
    title: 'Loyalty Social Ultra Lounge',
    description: 'Upscale nightlife, VIP tables, private events in Randallstown, MD.',
    url: 'https://loyaltysocialmv.com',
    siteName: 'Loyalty Social Ultra Lounge',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  )
}
