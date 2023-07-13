import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Components/Headers/Navbar'

const inter = Inter({
  subsets: ['latin']
})

export const metadata = {
  title: 'Movies.details',
  description: 'Find every details of any movie or show',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/tmdb-favicon.png' />
      </head>
      <body id='root' className={`${inter.className} sm:px-6 px-3 relative bg-primary-dark text-secondary-light`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}