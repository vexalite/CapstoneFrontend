import React, { useState } from 'react';

export default function DevFilter({ handleFilterSelect }) {
    const skillsData = [
        'javaScript',
        'python',
        'java',
        'html',
        'css',
        'react',
        'node',
        'docker',
        'mongodb',
        'uiux',
    ];

    const [selectedSkill, setSelectedSkill] = useState('');

    const handleSkillChange = (event) => {
        setSelectedSkill(event.target.value);
        handleFilterSelect(event.target.value);
    };

    return (
        <div>
            <div className='text-lg'>Filter</div>
            {skillsData.map((skill) => (
                <div key={skill}>
                    <input
                        type="radio"
                        id={skill}
                        name="skill"
                        value={`filter=${skill}`}
                        checked={selectedSkill === skill}
                        onChange={handleSkillChange}
                    />
                    <label htmlFor={skill}>{skill}</label>
                </div>
            ))}

            <div className='text-lg'>Sort</div>
            <div className='text-md'>by date</div>
            <div key='sort=asc'>
                <input
                    type="radio"
                    id='sort=asc'
                    name="skill"
                    value="sort=asc"
                    checked={selectedSkill === "sort=asc"}
                    onChange={handleSkillChange}
                />
                <label htmlFor='sort=asc'>Low to High</label>
            </div>
            <div key='sort=desc'>
                <input
                    type="radio"
                    id='sort=desc'
                    name="skill"
                    value="sort=desc"
                    checked={selectedSkill === "sort=desc"}
                    onChange={handleSkillChange}
                />
                <label htmlFor='sort=desc'>High to Low</label>
            </div>

            <div className='text-md'>by Price</div>
            <div key='price=asc'>
                <input
                    type="radio"
                    id='price=asc'
                    name="skill"
                    value="price=asc"
                    checked={selectedSkill === "price=asc"}
                    onChange={handleSkillChange}
                />
                <label htmlFor='price=asc'>Low to High</label>
            </div>
            <div key='price=desc'>
                <input
                    type="radio"
                    id='price=desc'
                    name="skill"
                    value="price=desc"
                    checked={selectedSkill === "price=desc"}
                    onChange={handleSkillChange}
                />
                <label htmlFor='price=desc'>High to Low</label>
            </div>
            <p>Selected Skill: {selectedSkill}</p>
        </div>
    );
}
