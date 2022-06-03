import React from 'react'

function Story({username,img}) {
   
  return (
    <div>
     <img src={img} alt={username} />
     <p>{username}</p>
    </div>
  )
}

export default Story
