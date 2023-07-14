import React, { useState } from 'react';

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

const SkillList = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const toggleSkillSelection = (skill) => {
    const isSelected = selectedSkills.includes(skill);
    if (isSelected) {
      setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  return (
    <div className="flex flex-wrap justify-between">
      {skillsData.map((skill, index) => (
        <div
          key={index}
          className={` p-2 cursor-pointer`}
          onClick={() => toggleSkillSelection(skill)}
        >
          <div
            className={`px-4 flex items-center justify-center h-16 rounded-lg ${
              selectedSkills.includes(skill) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
            }`}
          >
            {skill}
          </div>
        </div>
      ))}

      <div>{selectedSkills}</div>
    </div>
  );
};

export default SkillList;
