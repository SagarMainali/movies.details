import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
     return (
          // <div className="bg-primary-dark sticky top-0 w-full z-10 py-4">
          <div className="fixed w-full max-2xl:w-[calc(100%-40px)] z-10 py-3 bg-primary-dark/60 max-w-[1500px]">
               <div className="flex justify-between items-center">
                    <Link href={'./'}>
                         <Image src={'/tmdb-logo.svg'} alt="tmbd-logo" width={140} height={100} />
                    </Link>
                    <div className="rounded-3xl sm:w-[20rem] w-[10rem] overflow-hidden flex items-center">
                         <input type="text" placeholder="Search..." className="sm:w-[87%] h-[40px] bg-slate-300 text-primary-dark caret-slate-800 outline-0 px-4 placeholder:text-slate-800 placeholder:text-sm"/>
                         <button className="w-[13%] h-[40px] bg-slate-900/50">
                              <svg className="w-full" xmlns="http://www.w3.org/2000/svg" height="1.2rem" viewBox="0 0 512 512" fill="#0FB6DF">
                                   <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                              </svg>
                         </button>
                    </div>
                    <ul className="flex sm:gap-6 gap-3 items-center">
                         <Link href={'./movies'}>Movies</Link>
                         <Link href={'./tvshows'}>TV Shows</Link>
                    </ul>
               </div>
          </div>
     )
}