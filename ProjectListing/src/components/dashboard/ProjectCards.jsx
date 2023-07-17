import React, { useState, useEffect } from 'react'
import { API_LINK } from '../../../constants';

import ProjectCard from '../cards/ProjectCard'
import ProjectCardData from '../cards/ProjectCardData'

export default function ProjectCards({handleProDetails}) {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = () => {
    fetch(`${API_LINK}/api/project`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProjectData(data.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <h1 className="text-3xl">
        Projects
      </h1>
      <div className=' h-full flex flex-wrap justify-center p-4 item-top'>
        {projectData.slice(0, 8).map((projectData, index) => (
          <ProjectCardData key={index} projectData={projectData} handleProDetails={handleProDetails}/>
        ))}
        {/* <ProjectCardData />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </>
  )
}
