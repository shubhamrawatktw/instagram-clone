import React from 'react'
import Posts from './Posts'

import Stories from './Stories'

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
          {/* mini profile  */}

          {/* suggestion  */}
      </section>
    </main>
  )
}

export default Feed
