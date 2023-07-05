import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl text-cyan-800 font-bold ">
      Hello
    </h1>
    <p className='text-xl mt-4 text-red-600'>create Landing page like <a className='text-blue-400' href='https://www.epic.net/'>epic.net🔥</a> & add a minimalistic login and signup button 💪</p>
    </>
  )
}

export default App
