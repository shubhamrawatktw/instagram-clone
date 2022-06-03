import React from 'react'
import SinglePost from './SinglePost'

function Posts() {
const posts = [
    {
        id:1,
        username:"shubham",
        userImg:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        img:"https://upload.wikimedia.org/wikipedia/commons/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg",
        caption:"nice trees"
    },
    {
        id:2,
        username:"pikachu",
        userImg:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
        img:"https://i.ytimg.com/vi/1roy4o4tqQM/maxresdefault.jpg",
        caption:"pika pikaa"
    },
]

  return (
    <div>
      {posts.map((post)=>{
          return <SinglePost key={post.id} {...post}/>
      })}
    </div>
  )
}

export default Posts
