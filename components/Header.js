import React from 'react'
import Image from "next/image"
import { SearchIcon } from '@heroicons/react/outline'


export default function Header() {
  return (
 
      <div className="flex items-center justify-between max-w-6xl">
      {/* left  */}
     <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
         <Image src="https://www.pxpng.com/public/uploads/preview/-216299895619bbdskk7uf.png"
             layout='fill'
             className='object-contain'
         />
     </div>
     <div className="h-24 w-10 relative lg:hidden cursor-pointer">
         <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png"
             layout='fill'
             className='object-contain'
         />
     </div>
     {/* middle  */}
     <div className="relative mt-1">
         <div className="absolute top-2 left-2">
             <SearchIcon className='h-5  text-gray-500 '/>
         </div>
         <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
     </div>
     {/* right  */}
     <h1>right side</h1>
 </div>

   
  )
}
