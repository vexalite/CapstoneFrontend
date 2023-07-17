import React, { useState, useEffect } from 'react'
import NavBar from './NavBar'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import DevCards from './DevCards'
import DevFilter from './DevFilter';
import CompCards from './CompCards'
import ProjectCards from './ProjectCards'
import DevloperDetailedCard from '../DetailedViews/DevloperDetailCard';
import ProjectDetailCard from '../DetailedViews/ProjectDetailCard';
import BusinessDetailCard from '../DetailedViews/BusinessDetaileCard';

const companyData = {
  company_name: 'ABC Corporation',
  location: 'New York City',
  industry: 'Technology',
  description: 'ABC Corporation is a leading technology company specializing in software development and digital solutions.',
  present: true,
  createdAt: '2023-07-12T11:02:40.726Z',
  updatedAt: '2023-07-12T11:02:40.726Z',
};


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

  const handleProDetails = ({ projectData }) =>{
    console.log(projectData)
    setActiveCard(<ProjectDetailCard projectData={projectData} />);
    console.log("clicked")
  }

  const handleBusDetails = ({ companyData }) =>{
    console.log(companyData)
    setActiveCard(<BusinessDetailCard companyData={companyData} />);
    console.log("clicked")
  }
  
  const [activeCard, setActiveCard] = useState(<DevCards handleDevDetails={handleDevDetails}/>)


  useEffect(() => {
    if (activePage === 'developers') {
      setActiveCard(<DevCards handleDevDetails={handleDevDetails} />);
      activeFilter = <DevFilter/>
    } else if (activePage === 'companies') {
      setActiveCard(<CompCards handleBusDetails={handleBusDetails}/>);
      activeFilter = "";
    } else if (activePage === 'projects') {
      setActiveCard(<ProjectCards handleProDetails={handleProDetails}/>);
      activeFilter = "";
    }
  }, [activePage]);

  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    console.log(selectedFilter);
  };


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <NavBar activePage={activePage} onPageChange={handlePageChange} />
        <div className="flex-1 flex">
          <div className="w-[350px] h-[900px] rounded-b-xl bg-gray-200 p-8 flex flex-col overflow-y-scroll">
          <DevFilter handleFilterSelect={handleFilterSelect} />
          </div>
          <div className="flex-1 flex flex-col m-4 pt-1">
            {activeCard}
            {/* <DevloperDetailedCard /> */}
            {/* <ProjectDetailCard/> */}
            {/* <BusinessDetailCard companyData={companyData}/> */}
          </div>
        </div>
      </div>
    </div>
  )
}
