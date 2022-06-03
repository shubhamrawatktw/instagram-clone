import React from 'react'
import MiniProfile from './MiniProfile'
import Posts from './Posts'

import Stories from './Stories'
import Suggestion from './Suggestion'

function Feed() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'>
      <section className='md:col-span-2'>
          {/* stories  */}
        <Stories/>
          {/* Post  */}
         <Posts/>
      </section>

      <section className='hidden md:inline-grid'>
      <div className="fixed w-[380px]">
          {/* mini profile  */}
         <MiniProfile/>

          {/* suggestion  */}
          <Suggestion/>
      </div>
      </section>
    </main>
  )
}

export default Feed
