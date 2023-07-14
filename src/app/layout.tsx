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
      <body className={`${inter.className} max-w-[1500px] mx-auto max-2xl:px-3 bg-primary-dark text-slate-300`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}