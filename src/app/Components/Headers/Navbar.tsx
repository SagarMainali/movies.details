import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
     return (
          // <div className="bg-primary-dark sticky top-0 w-full z-10 py-4">
          <div className="fixed w-full max-2xl:w-[calc(100%-40px)] z-10 py-4 bg-primary-dark/60 max-w-[1500px]">
               <div className="flex justify-between items-center">
                    <Link href={'./'}>
                         <Image src={'/tmdb-logo.svg'} alt="tmbd-logo" width={140} height={100} />
                    </Link>
                    <ul className="flex gap-6 items-center">
                         <Link href={'./movies'}>Movies</Link>
                         <Link href={'./tvshows'}>Tv Shows</Link>
                         <input type="text" className="bg-slate-200 rounded-md caret-slate-400 outline-0 px-2 sm:w-[10em] w-[8rem]" />
                    </ul>
               </div>
          </div>
     )
}