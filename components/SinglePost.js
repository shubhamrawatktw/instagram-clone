import React from 'react'
import {DotsHorizontalIcon} from '@heroicons/react/outline'
function SinglePost({id,username,userImg,img,caption}) {
  return (
    <div className='bg-white my-7 border rounded-md'>
      {/* {post header} */}
      <div className="flex items-center p-5">
          <img src={userImg} alt={username} className="h-12 rounded-full object-cover border p-1 mr-3" />
          <p className='font-bold flex-1'>{username}</p>
           <DotsHorizontalIcon className='h-5'/>
      </div>
    {/* post image  */}
    <img src={img} alt="" className='object-cover w-full'/>

    </div>
  )
}

export default SinglePost
