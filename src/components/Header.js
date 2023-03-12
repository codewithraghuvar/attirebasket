import React from 'react'
import { cartImg,clothLogo } from '../assets/img/index' 
const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <div>
               <img className='w-28' src={clothLogo}/>
            </div>
            <div className="flex items-center gap-8">         
              <ul className="flex items-center gap-8">
                <li 
                  className="text-base text-black font-bold hover:text-pink-600 
                  cursor-pointer delay-100 underline-offset-4">
                  Home
                  </li>
                <li 
                  className="text-base text-black font-bold hover:text-pink-600 
                  cursor-pointer delay-100 underline-offset-4">
                  Shop
                </li>
                <li 
                  className="text-base text-black font-bold hover:text-pink-600 
                  cursor-pointer delay-100 underline-offset-4">
                  Home
                </li>
                <li 
                  className="text-base text-black font-bold hover:text-pink-500 
                  cursor-pointer delay-100 underline-offset-4">
                    ContactUs
                </li>
              </ul>
              <div className="relative text-center">
                <img className="w-12 rounded-full" src={cartImg} />
                <span className="absolute top-0 left-5 font-bold ">5</span>
              </div>
            </div>            
        </div>
        
    </div>
  )
}

export default Header