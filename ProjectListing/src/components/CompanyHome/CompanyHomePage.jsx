import React, { useState } from 'react'

import CompanyNavbar from './CompanyNavbar'
import CompanyDetails from './CompanyDetails'
import BusinessDetails from './BusinessDetails';
import Projectdetails from './Projectdetails';
import DevloperDetails from './DevloperDetails';

import DevloperFilter from './Filters/DevloperFilter';
import DevloperViewCompany from './DevloperViewCompany';


export default function CompanyHomePage() {

    // Page change
    const [activePage, setActivePage] = useState('company-home');

    const handlePageChange = (page) => {
        setActivePage(page);
    };

    let activeFilter;
    let activeCard;

    if (activePage === 'developers') {
        activeFilter = <DevloperFilter/>;
        activeCard = <DevloperViewCompany/>
    } else if (activePage === 'companies') {
        activeCard = "";
    }



    const companyData = {
        company_name: 'ABC Corporation',
        location: 'New York City',
        industry: 'Technology',
        description: 'ABC Corporation is a leading technology company specializing in software development and digital solutions.',
        present: true,
        createdAt: '2023-07-12T11:02:40.726Z',
        updatedAt: '2023-07-12T11:02:40.726Z',
      };
      
      const projectData = {
        project_name: "Project ABC",
        counter: true,
        description: "A web application for managing tasks and deadlines",
        timeframe: "6 months",
        technology: ["React", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
        devlist: ["461d7768-b38f-4bdc-ab71-f5a21d41cb57", "0d5d51f9-e3ab-45f2-907a-9c7d9c81eb62"],
        team:[ "8498e5be-9b46-4684-9f4e-048866d21f9c",  "b7e114cd-37fb-45fe-b2bd-e3b80cece462",],
        createdAt: "2023-07-12T11:03:09.902Z",
        updatedAt: "2023-07-12T11:03:09.902Z",
      };

      const devData = {

        dev_first_name: "Woke",
        dev_last_name: "Goated",
        skills: ["Java", "C", "JavaScript", "TypeScript"],
        bio: "I am an experienced developer with expertise in Java, C, JavaScript, and TypeScript.",
        background: "White",
        price: 5,
        rating: [4, 5, 3, 4, 5], // Rating values ranging from 1 to 5
        testimonial: [
          "Great work! Highly recommended.",
          "Excellent communication and coding skills.",
          "Delivered the project on time and met all requirements.",
        ], // Array of testimonials
        imageUrl: "https://unsplash.it/300/301",
        counter: true,
        portfolio_link: "https://projectlisting-98nl.onrender.com",
        address: "Downtown, Vancouver",
        phone: "344447744789",
        email: "abc7887@gmail.com",
        createdAt: "2023-07-14T19:13:55.871Z",
        updatedAt: "2023-07-14T19:13:55.871Z",
      };

      
      

      

    return (
        <div className="flex h-screen">
            <div className="flex-1 flex flex-col bg-blue-400">
                <CompanyNavbar activePage={activePage} onPageChange={handlePageChange} />
                <div className="flex-1 flex">
                    <div className="w-[350px] h-[900px] rounded-b-xl bg-gray-200 p-8 flex flex-col overflow-y-scroll">
                        {activeFilter}
                    </div>
                    <div className="flex-1 flex flex-row m-4 pt-1">
                        {/* <DevloperViewCompany/> */}
                        {/* <DevloperDetails devData={devData}/> */}
                        {/* <DevloperDetails devID="02dd2014-faa4-48f4-aa24-80279970c87a"/> */}
                        {/* {activeCard} */}
                        <CompanyDetails />
                        {/* <BusinessDetails {...companyData} /> */}
                        {/* <Projectdetails projectData={projectData}/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
