import React from 'react'

export default function MiniProfile() {
  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
     <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt='user-image' className='h-16 rounded-full border p-[2px]'/>
     <div className="flex-1 ml-4">
         <h2 className='font-bold'>shubham</h2>
         <h3 className='text-sm text-gray-400'>welcome to Instagram</h3>
     </div>
     <button className='font-semibold text-blue-400 text-sm'>Sign Out</button>
    </div>
  )
}
