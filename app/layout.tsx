import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Loyalty Social Ultra Lounge | Randallstown Nightlife & VIP Events',
  description:
    'Loyalty Social Ultra Lounge is an upscale nightlife, food, drinks, VIP table, and private event destination serving Randallstown, Baltimore County, and Maryland.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
