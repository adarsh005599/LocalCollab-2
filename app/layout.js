import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-24">
          {children}
        </main>

        <Footer />

        <ChatWidget />

      </body>
    </html>
  )
}