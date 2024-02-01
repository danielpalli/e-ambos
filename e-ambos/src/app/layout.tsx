import type { Metadata } from 'next'
import { inter } from '@/config/fonts'

import './globals.css'


export const metadata: Metadata = {
  title: 'Ambos Sabina | Tienda',
  description: 'Tienda de Ambos Sabina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
