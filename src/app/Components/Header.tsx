import Image from "next/image"
import Link from "next/link"

export function Navbar() {
     return (
          <div className="fixed w-[calc(100%-4rem)]">
               <div className="flex justify-between items-center py-2">
                    <Link href={'./'}>
                         <Image src={'tmdb-logo.svg'} alt="tmbd-logo" width={140} height={100} />
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

export function Header() {
     return (
          <header>
               <Navbar />
               <div className="h-[50rem] bg-slate-600">

               </div>
          </header>
     )
}