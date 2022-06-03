import React from 'react'
import Image from "next/image"
export default function Header() {
  return (
    <div>
    {/* left  */}
 <div className="flex items-center justify-between max-w-6xl">
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
     <h1>right side</h1>
 </div>

    {/* middle  */}
    {/* right  */}
    </div>
  )
}
