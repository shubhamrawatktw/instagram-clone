import React from 'react'
import Posts from './Posts'

import Stories from './Stories'

function Feed() {
  return (
    <main>
      <section>
          {/* stories  */}
        <Stories/>
          {/* Post  */}
         <Posts/>
      </section>

      <section>
          {/* mini profile  */}

          {/* suggestion  */}
      </section>
    </main>
  )
}

export default Feed
