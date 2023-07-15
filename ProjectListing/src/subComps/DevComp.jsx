import React, { useState } from 'react'
import NavBar from '../components/header/NavBar'

export default function DevComp() {
  const [activePage, setActivePage] = useState('developers');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <NavBar activePage={activePage} onPageChange={handlePageChange} />
        <div className="flex-1 flex">
          <div className="w-[350px] bg-red-200">
            {/* Sidebar Content */}
          </div>
          <div className="flex-1 bg-red-500">
            {activePage}
          </div>
        </div>
      </div>
    </div>
      )
}
