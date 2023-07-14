'use client'

import GradientOverlay from './GradientOverlay'
import './banner_gradient_style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {
     return (
          <header>
               <Carousel
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={3000}
                    emulateTouch={true}
                    showStatus={false}
                    transitionTime={600}
                    useKeyboardArrows={true}
                    showThumbs={false}
               >
                    <div className="h-[90vh] bg-[url('/test-image.jpg')] bg-no-repeat bg-cover bg-center">
                         <GradientOverlay />
                    </div>
                    <div className="h-[90vh] bg-[url('/test-image2.jpg')] bg-no-repeat bg-cover bg-center">
                         <GradientOverlay />
                    </div>
                    <div className="h-[90vh] bg-[url('/test-image3.webp')] bg-no-repeat bg-cover bg-center">
                         <GradientOverlay />
                    </div>
                    <div className="h-[90vh] bg-[url('/test-image4.jpg')] bg-no-repeat bg-cover bg-center">
                         <GradientOverlay />
                    </div>
                    <div className="h-[90vh] bg-[url('/test-image5.jpg')] bg-no-repeat bg-cover bg-center">
                         <GradientOverlay />
                    </div>
                    <div className="h-[90vh] bg-[url('/test-image6.jpg')] bg-no-repeat bg-cover bg-center">
                         <GradientOverlay />
                    </div>
                    <div className="h-[90vh] bg-[url('/test-image7.jpg')] bg-no-repeat bg-cover bg-center">
                         <GradientOverlay />
                    </div>
                    <div className="h-[90vh] bg-[url('/test-image8.jpg')] bg-no-repeat bg-cover bg-center">
                         <GradientOverlay />
                    </div>
                    <div className="h-[90vh] bg-[url('/test-image9.jpg')] bg-no-repeat bg-cover bg-center">
                         <GradientOverlay />
                    </div>
               </Carousel>
          </header >
     )
}