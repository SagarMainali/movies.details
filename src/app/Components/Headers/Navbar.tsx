import Image from "next/image"
import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
     return (
          // <div className="bg-primary-dark sticky top-0 w-full z-10 py-4">
          <div className="fixed w-full max-2xl:w-[calc(100%-24px)] z-10 py-3 bg-primary-dark/50 max-w-[1500px]">
               <div className="flex justify-between items-center">
                    <Link href={'./'} className="relative h-[20px] md:w-[140px] w-[100px]">
                         <Image src={'/tmdb-logo.svg'} alt="tmbd-logo" fill={true} />
                    </Link>

                    <Search />

                    <ul className="flex md:gap-6 gap-3 items-center">
                         <Link href={'./movies'}>Movies</Link>
                         <Link href={'./tvshows'}>TV Shows</Link>
                    </ul>
               </div>
          </div>
     )
}