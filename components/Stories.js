import React from "react";
import minifaker, { username } from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";
import {useSession} from "next-auth/react"

function Stories() {
  const [storyUsers, setStoryUsers] = useState();
  const {data:session} = useSession()
  useEffect(() => {
    const newstoryUsers = minifaker.array(20, (i) => {
      return {
        username: minifaker.username({ locale: "en" }).toLowerCase(),
        img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
        id: i,
      };
    });
   
    setStoryUsers(newstoryUsers);
  }, []);
// console.log(storyUsers ,"state");

  return <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
  {session && (
    <Story img={session.user.image} username={session.user.username} isUser = "true"/>
  )}
    {storyUsers && storyUsers.map((users)=>{
        return <Story key={users.id} {...users}/>
    })}
  </div>;
}

export default Stories;
