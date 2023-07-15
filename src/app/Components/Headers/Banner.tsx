'use client'

import GradientOverlay from './GradientOverlay'
import './banner_gradient_style.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { useState, useEffect } from 'react'
import { fetchDataFromApi } from '@/app/utils/api'

export default function Banner() {

     const [trending, setTrending] = useState([])

     useEffect(() => {
          fetchDataFromApi('/trending/all/day')
               .then(results => {
                    setTrending(results)
                    console.log(results)
               })
     }, [])

     return (
          <header>
               <Carousel
                    infiniteLoop={true}
                    autoPlay={true}
                    emulateTouch={true}
                    showStatus={false}
                    transitionTime={600}
                    useKeyboardArrows={true}
                    showThumbs={false}
               >
                    {
                         trending && trending.map((movie: { backdrop_path: string, id: number }) => (
                              // <div key={movie.id} className={`h-[90vh] max-h-[700px] bg-[url(https://image.tmdb.org/t/p/original${movie.backdrop_path})] bg-no-repeat bg-cover bg-center`}>
                              <div key={movie.id} className='h-[90vh] max-h-[700px] bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})` }}>
                                   <GradientOverlay />
                              </div>
                         ))
                    }
               </Carousel>
          </header >
     )
}