import Image from "next/image"

export default function Banner() {
     return (
          <header>
               <div className="h-[70vh] bg-[url('/test-image.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="test h-full w-full">
                         {/* <Image src={''} alt="banner-image"/> */}
                    </div>
               </div>
          </header>
     )
}