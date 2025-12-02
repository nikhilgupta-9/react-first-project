import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>This is nikhil first react app </h1>
      </div>
      
      <p className="read-the-docs">
       I'm using CI/CD pipeline and it deployed on versel
      </p>
      <p>this is learn with Next.js </p>

      <div className='max-w-sm bg-white border border-gray-200 rounded-xl mt-8 shadow overflow-hidden'>
        <img src="https://images.unsplash.com/photo-1587080413959-06b859fb107d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZmZlZSUyMGN1cHxlbnwwfHwwfHx8MA%3D%3D" alt="Sample Image" />
        <div>
          <h2>Card Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sit quos tempore debitis non aliquam deleniti, distinctio ab ducimus unde nam dolorem eveniet facere corrupti earum maxime ipsam quia voluptate!
          Incidunt voluptate obcaecati atque itaque delectus eum laudantium autem optio ipsam asperiores tempora non, perferendis voluptates assumenda dolorum. Libero exercitationem saepe explicabo possimus, ex officiis voluptatum voluptatem iste quisquam magni.</p>
          <button>Buy Now</button>
        </div>
      </div>
    </>
  )
}

export default App
