import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/navbar'
import Footer from '@/Components/Footer/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BitBhoomi',
  description: 'Where Technology Meets Sustainability',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
