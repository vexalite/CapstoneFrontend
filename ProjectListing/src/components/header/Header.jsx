import React from 'react'

export default function Header() {
  return (
    <nav className="flex items-center justify-between px-4 py-5 mx-5 border-b-2 border-black">
      <div className="flex items-center">
        <span className="text-lg font-medium">Company Name</span>
      </div>
      <div className="flex items-center w-1/2">
        <span className="flex-grow text-center">Text in the middle</span>
      </div>
      <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-125">
      Click Me
      </button>
    </nav>
  )
}
