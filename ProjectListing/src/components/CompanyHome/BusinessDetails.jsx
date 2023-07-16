import React from 'react';
import ProjectCard from '../cards/ProjectCard';

export default function BusinessDetails({ company_name, location, industry, description, present, createdAt, updatedAt }) {
    return (
        <div className='w-full flex flex-col'>
            <div className="relative w-auto rounded-lg shadow-lg">
                <div className="bg-gray-100 p-4">
                    <h2 className="text-3xl font-bold mb-4">{company_name}</h2>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-xl">Location: {location}</p>
                        <p className="text-xl">Industry: {industry}</p>
                    </div>
                    <p className="text-lg mb-2">{description}</p>
                </div>
                <div className="bg-gray-200 text-sm px-4 py-2 flex justify-between">
                    <div>
                        <p className="mb-1">{present ? "Present" : "Not Present"}</p>
                        <p className="text-xs text-gray-500">Created: {createdAt}</p>
                        <p className="text-xs text-gray-500">Updated: {updatedAt}</p>
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mr-2">Update</button>
                        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Delete</button>
                    </div>
                </div>
            </div>

            <div className='bg-blue-200 flex-1 grid grid-cols-4 gap-4 justify-end'>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>

            </div>



        </div>
    );
}
