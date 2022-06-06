import React, { useState } from "react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import {db} from "../firebase"

function SinglePost({ id, username, userImg, img, caption }) {
  // console.log(userImg,"profile")
  const { data: session } = useSession();
  const [comment , setComment] = useState("")

  const sentComment = async (event)=>{
    event.preventDefault()
    const commentToSend = comment
    setComment("")
    await addDoc(collection(db,"posts",id,"comments"),{
      comment : commentToSend,
      username : session.user.username,
      userImage : session.user.image,
      timestamp : serverTimestamp()
    })
  }

  return (
    <div className="bg-white my-7 border rounded-md">
      {/* {post header} */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="h-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* post image  */}
      <img src={img} alt="" className="object-cover w-full" />

      {/* post buttons  */}
      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* post comments  */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span> {caption}
      </p>

      {/* post input box  */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
          value={comment}
          onChange={(e)=>setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your post"
          />
          <button 
          type="submit"
          disabled={!comment.trim()} 
          className="text-blue-400 font-bold disabled:text-blue-200"
          onClick={sentComment}
          >Post</button>
        </form>
      )}
    </div>
  );
}

export default SinglePost;
