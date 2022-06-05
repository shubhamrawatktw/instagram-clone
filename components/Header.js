import React from "react";
import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession,signIn,signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        {/* left  */}
        <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://www.pxpng.com/public/uploads/preview/-216299895619bbdskk7uf.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-24 w-10 relative lg:hidden cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/640px-Instagram-Icon.png"
            layout="fill"
            className="object-contain"
          />
        </div>
        {/* middle  */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5  text-gray-500 " />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        {/* right  */}
        <div className="flex space-x-4 items-center">
          <HomeIcon className=" hidden  md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          {session ? (
            <>
              <PlusCircleIcon className="h-6 cursor-pointer  hover:scale-125 transition-transform duration-200 ease-out" />
              <img
              onClick={signOut}
                src={session.user.image}
                alt="user"
                className="h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in </button>
          )}
        </div>
      </div>
    </div>
  );
}
