import './banner_gradient_style.css'
import { Carousel } from 'react-responsive-carousel'
import GradientOverlay from './GradientOverlay'

export default function Banner() {
     return (
          <header>
               <div className="h-[90vh] bg-[url('/test-image5.jpg')] bg-no-repeat bg-cover bg-center">
                    <GradientOverlay />

               </div>
          </header >
     )
}