import React, { useState } from 'react'
import CompanyCardElement from './cards/CompanyCardElement';
import { API_LINK } from '../../../constants';

export default function CompanyDetails() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const token = localStorage.getItem("accessToken");
        const formData = new FormData(e.target);

        fetch(`${API_LINK}/o/api/company`, {
            method: "POST",
            body: formData,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const companiesData = [
        {
          companyName: "Company A",
          location: "City X",
          industry: "Technology",
          projects: ["Project 1", "Project 2", "Project 3"],
        },
        {
          companyName: "Company B",
          location: "City Y",
          industry: "Finance",
          projects: ["Project X", "Project Y"],
        },
        {
          companyName: "Company C",
          location: "City Z",
          industry: "Healthcare",
          projects: ["Project A", "Project B", "Project C", "Project D"],
        },
        {
          companyName: "Company D",
          location: "City P",
          industry: "E-commerce",
          projects: ["Project M", "Project N"],
        },
        {
          companyName: "Company E",
          location: "City Q",
          industry: "Education",
          projects: ["Project E", "Project F", "Project G"],
        },
        {
          companyName: "Company F",
          location: "City R",
          industry: "Marketing",
          projects: ["Project X", "Project Y", "Project Z"],
        },
      ];



    return (
        <div className='flex flex-row bg-blue-200 p-4 rounded-lg'>
            <div className="w-[350px] h-full">
                <div className="max-w-[350px] mx-auto h-full p-4 bg-blue-300 rounded-l-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Add Company</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="companyName" className="block mb-2">
                                Company Name:
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="company_name"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="companyLogo" className="block mb-2">
                                Company Logo:
                            </label>
                            <input
                                type="file"
                                id="companyLogo"
                                name="company_logo"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block mb-2">
                                Location:
                            </label>
                            <input
                                type="text"
                                id="location"
                                name="location"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="industry" className="block mb-2">
                                Industry:
                            </label>
                            <input
                                type="text"
                                id="industry"
                                name="industry"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block mb-2">
                                Description:
                            </label>
                            <textarea
                                id="description"
                                name="description"
                                className="w-full px-4 py-2 rounded border border-gray-300 focus:border-blue-500 focus:outline-none"
                                rows={4}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className='p-4 flex-1 flex justify-center items-center flex-wrap gap-4 border-blue-200 bg-blue-300 border-r-lg ml-4'>
                {companiesData.map((company, index) => (
                    <CompanyCardElement
                        key={index}
                        companyName={company.companyName}
                        location={company.location}
                        industry={company.industry}
                        projects={company.projects}
                    />
                ))}
            </div>
        </div>
    )
}
