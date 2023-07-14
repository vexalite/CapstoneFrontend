import React, { useState } from 'react'
import NavBar from '../header/NavBar'

export default function Dashboard() {

  const handleSignOut = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('accessTokenCreationDate')
    console.log("___signed out___")
  }

  const [activePage, setActivePage] = useState('developers');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <NavBar activePage={activePage} onPageChange={handlePageChange} />
        <div className="flex-1 flex">
          <div className="w-[350px] bg-gray-200">
            {/* Sidebar Content */}
          </div>
          <div className="flex-1 flex flex-col bg-red-500 m-4 pt-3">
            <h1 className="text-3xl">
              {activePage}
            </h1>
            <div className='bg-gray-300 flex'>
              <div className='bg-blue-200 flex'>
                <div className='bg-blue-500 p-4'>.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
