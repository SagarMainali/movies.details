import Image from "next/image"
import Link from "next/link"

function Header() {
     return (
          <div className="flex justify-between items-center py-4">
               <Link href={'./'}>
                    <Image src={'./tmdb-logo.svg'} alt="tmbd-logo" width={140} height={100} />
               </Link>
               <ul className="flex gap-4 items-center">
                    <Link href={'./movies'}>Movies</Link>
                    <Link href={'./tvshows'}>Tv Shows</Link>
                    <input type="text" className="bg-slate-200 rounded-md outline-0 py-1 px-2 sm:w-[10em] w-[8rem]" />
               </ul>
          </div>
     )
}

export default Header