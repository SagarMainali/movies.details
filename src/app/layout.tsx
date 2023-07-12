import './globals.css'
import { Inter } from 'next/font/google'

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
        <link rel='icon' href='tmdb-favicon.png' />
      </head>
      <body className={`${inter.className} sm:px-8 px-4`}>
        {children}
      </body>
    </html>
  )
}