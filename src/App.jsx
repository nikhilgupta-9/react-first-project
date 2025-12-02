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
    </>
  )
}

export default App
