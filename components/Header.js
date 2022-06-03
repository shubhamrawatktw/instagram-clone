import React from 'react'
import Image from "next/image"
import { SearchIcon ,PlusCircleIcon} from '@heroicons/react/outline'
import { HomeIcon} from '@heroicons/react/solid'


export default function Header() {
  return (
 
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
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
     <div className="flex space-x-4 items-center">
         <HomeIcon className=' hidden  md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
         <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
         <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="user" className='h-10 rounded-full cursor-pointer'/>
     </div>
 </div>

   
  )
}
