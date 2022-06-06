import React from 'react'
import {getProviders,signIn} from 'next-auth/react'
import Header from "../../components/Header"

export default function signin({providers}) {
  return (
    <div>
     <Header/>
     <div className="flex justify-center space-x-7  py-20">
         <img className='hidden object-cover rotate-6 md:inline-flex md:w-96' src="https://like4like.com/img/hero-x750.png" alt="insta" />
         <div className="mt-16">
             {Object.values(providers).map(provider =>{
                 return <div className="flex flex-col items-center" key={provider.name}>
                     <img className='w-40 object-cover mb-6' src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202005/social-1834010_1920__1_.png?O0d57AlZjyqseIYIHsdyoE8B_ttFJjGh&size=770:433" alt="image-insta" />
                     <button className='bg-red-400 rounded-lg p-3 text-white hover:bg-red-500'  onClick={()=>signIn(provider.id, {callbackUrl:"/"})}>Sign in with {provider.name}</button>
                 </div>
             })}
         </div>
     </div>
    </div>
  )
}


export async function getServerSideProps(context){
    const providers = await getProviders()
    return {
        props:{providers}
    }
}
