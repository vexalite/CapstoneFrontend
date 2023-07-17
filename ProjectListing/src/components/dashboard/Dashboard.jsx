import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import DevCards from './DevCards'
import DevFilter from './DevFilter';
import CompCards from './CompCards'
import ProjectCards from './ProjectCards'
import DevloperDetailedCard from '../DetailedViews/DevloperDetailCard';

export default function Dashboard() {

  const handleSignOut = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('accessTokenCreationDate')
    console.log("___signed out___")
  }
  
  // Page change
  const [activePage, setActivePage] = useState('projects');
  
  const handlePageChange = (page) => {
    setActivePage(page);
  };
  
  // let activeCard;
  let activeFilter;
  
  const handleDevDetails = ({ devData }) => {
    console.log(devData)
    setActiveCard(<DevloperDetailedCard devData={devData} />);
    console.log("clicked")
  }
  
  const [activeCard, setActiveCard] = useState(<DevCards handleDevDetails={handleDevDetails}/>)


  // if (activePage === 'developers') {
  //   activeCard = <DevCards handleDevDetails={handleDevDetails} />;
  //   activeFilter = <DevFilter />
  // } else if (activePage === 'companies') {
  //   activeCard = <CompCards />;
  //   activeFilter = ""
  // } else if (activePage === 'projects') {
  //   activeCard = <ProjectCards />;
  //   activeFilter = ""
  // }


  useEffect(() => {
    if (activePage === 'developers') {
      setActiveCard(<DevCards handleDevDetails={handleDevDetails} />);
      activeFilter = <DevFilter />
    } else if (activePage === 'companies') {
      setActiveCard(<CompCards />);
      activeFilter = "";
    } else if (activePage === 'projects') {
      setActiveCard(<ProjectCards />);
      activeFilter = "";
    }
  }, [activePage]);


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <NavBar activePage={activePage} onPageChange={handlePageChange} />
        <div className="flex-1 flex">
          <div className="w-[350px] h-[900px] rounded-b-xl bg-gray-200 p-8 flex flex-col overflow-y-scroll">
            {activeFilter}
          </div>
          <div className="flex-1 flex flex-col m-4 pt-1">
            {activeCard}
            {/* <DevloperDetailedCard /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
