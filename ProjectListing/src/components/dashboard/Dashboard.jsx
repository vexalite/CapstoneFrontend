import React, { useState } from 'react'
import NavBar from '../header/NavBar'

import CheckRoundedIcon from '@mui/icons-material/CheckRounded';


import DevCards from './DevCards'
import CompCards from './CompCards'
import ProjectCards from './ProjectCards'

export default function Dashboard() {
  const skillsData = [
    'JavaScript',
    'Python',
    'Java',
    'HTML',
    'CSS',
    'React',
    'Node.js',
    'SQL',
    'Git',
    'Agile',
    'AWS',
    'Docker',
    'Testing',
    'UI/UX Design',
  ];

  const handleSignOut = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('accessTokenCreationDate')
    console.log("___signed out___")
  }

  // Page change
  const [activePage, setActivePage] = useState('developers');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  let activeCard;
  if (activePage === 'developers') {
    activeCard = <DevCards />;
  } else if (activePage === 'companies') {
    activeCard = <CompCards />;
  } else if (activePage === 'projects') {
    activeCard = <ProjectCards />;
  }

  // Skill selection
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkillSelection = (skill) => {
    const isSelected = selectedSkills.includes(skill);
    if (isSelected) {
      setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  //tech collapse
  const [isTechCollapsed, setIsTechCollapsed] = useState(false);

  const toggleTechCollapse = () => {
    console.log(isTechCollapsed)
    setIsTechCollapsed(!isTechCollapsed);
  };


  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col">
        <NavBar activePage={activePage} onPageChange={handlePageChange} />
        <div className="flex-1 flex">
          <div className="w-[350px] h-[900px] rounded-b-xl bg-gray-200 p-8 flex flex-col overflow-y-scroll">
            <div className="w-full pb-8">
              <div className='text-2xl'>Filters</div>
              <div className="pt-4">
                <div className="text-gray-500" onClick={toggleTechCollapse}>
                  Technology
                </div>
                <div className={`transition-all ${isTechCollapsed ? 'h-0' : 'h-full'} overflow-hidden`}>
                  {skillsData.map((skill, index) => (
                    <div
                      key={index}
                      className={`pt-3 cursor-pointer`}
                      onClick={() => toggleSkillSelection(skill)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`h-4 w-4 mr-3 rounded-sm border-2 flex justify-center items-center ${selectedSkills.includes(skill) ? 'bg-black border-black' : 'border-gray-500 bg-white'
                            }`}
                        >
                          <CheckRoundedIcon style={{ color: 'white', fontSize: 18 }} />
                        </div>
                        {skill}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className='text-2xl'>Sort</div>
              <div className="pt-4">
                <div className="text-gray-500">
                  By date
                </div>
                <div className="flex items-center pt-3">
                  <div className={`h-4 w-4 mr-3 rounded-full border-2 flex justify-center items-center border-gray-500`}>
                  </div>
                  Oldest First
                </div>
                <div className="flex items-center pt-3">
                  <div className={`h-4 w-4 mr-3 rounded-full border-2 flex justify-center items-center border-gray-500`}>
                  </div>
                  New first
                </div>
              </div>
              <div className="pt-4">
                <div className="text-gray-500">
                  By Price
                </div>
                <div className="flex items-center pt-3">
                  <div className={`h-4 w-4 mr-3 rounded-full border-2 flex justify-center items-center border-gray-500`}>
                  </div>
                  Oldest First
                </div>
                <div className="flex items-center pt-3">
                  <div className={`h-4 w-4 mr-3 rounded-full border-2 flex justify-center items-center border-gray-500`}>
                  </div>
                  New first
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col m-4 pt-1">
            {activeCard}
          </div>
        </div>
      </div>
    </div>
  )
}
