import React, { useState, useEffect } from "react";
import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

import { useSession } from "next-auth/react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import Moment from "react-moment";

function SinglePost({ id, username, userImg, img, caption }) {
  // console.log(userImg,"profile")
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts", id, "likes"),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
  }, [db]);

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === session?.user.id) !== -1);
  }, [likes]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.id));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.id), {
        username: session.user.username,
      });
    }
  };

  const sentComment = async (event) => {
    event.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

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
          <div className="flex space-x-3">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-400"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}
            <p className="text-gray-600 font-semibold text-lg">{likes.length}</p>
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* post comments  */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span> {caption}
      </p>
      {comments.length > 0 && (
        <div className="mx-10 max-h-24 overflow-y-scroll scrollbar-none">
          {comments.map((comment,i) => {
            return (
              <div className="flex items-center space-x-2 mb-2" key={i}>
                <img
                  className="h-7 rounded-full object-cover"
                  src={comment.data().userImage}
                  alt="user-image"
                />
                <p className="font-semibold ">{comment.data().username}</p>
                <p className="flex-1 truncate">{comment.data().comment}</p>
                <Moment fromNow>{comment.data().timestamp?.toDate()}</Moment>
              </div>
            );
          })}
        </div>
      )}

      {/* post input box  */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border-none flex-1 focus:ring-0"
            type="text"
            placeholder="Enter your comment"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="text-blue-400 font-bold disabled:text-blue-200"
            onClick={sentComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default SinglePost;
