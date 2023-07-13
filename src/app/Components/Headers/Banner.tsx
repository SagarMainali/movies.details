import Image from "next/image"
import './banner_gradient_style.css'

export default function Banner() {
     return (
          <header>
               <div className="h-[90vh] bg-[url('/test-image2.jpg')] bg-no-repeat bg-cover bg-center">
                    <div className="overlay h-full w-full">
                         {/* <Image src={''} alt="banner-image"/> */}
                    </div>
               </div>
          </header>
     )
}