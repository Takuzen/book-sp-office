import './globals.css'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'book-sp-office',
}

// These styles apply to every route in the application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}