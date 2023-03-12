import React, { useState } from 'react'

const Banner = () => {
  const data =  [
    'https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg',
    'https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg'
   ]
   const [currentSlide , setCurrentSlide] = useState(0)
   const preSlideImage = () => {
    setCurrentSlide( currentSlide === 0 ? data.length - 1 : (previousSlide)=> previousSlide - 1 )

   }
   const nextSlideImage = () => {
    setCurrentSlide( currentSlide === (data.length - 1) ? 0 : (nextSlide)=> nextSlide + 1 )
   }
  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='relative'>
        <div className='flex'>
          <img src={data[currentSlide]} className="w-screen h-full object-cover"/>                     
        </div>
        <div className='absolute'>
            <button  onClick={preSlideImage}>
            preSlideImage
            </button>
            <button onClick={nextSlideImage}>
            nextSlideImage
            </button>
        </div>
      </div>
      
       
    </div>
    
  )
}

export default Banner