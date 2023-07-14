import React, { useState } from 'react'

export default function NavBar({ activePage, onPageChange }) {

    return (

        <nav className='w-full bg-indigo-950 h-[75px]'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white font-semibold text-3xl">Logo</span>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-4">
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg hover:text-blue-300 border-b-2 border-indigo-950 hover:border-blue-300 ${activePage === 'developers' ? 'border-blue-300': ''}`}
                            onClick={() => onPageChange('developers')}>
                                Developers
                            </div>
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg hover:text-blue-300 border-b-2 border-indigo-950 hover:border-blue-300 ${activePage === 'projects' ? 'border-blue-300': ''}`}
                            onClick={() => onPageChange('projects')}>
                                Project
                            </div>
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg hover:text-blue-300 border-b-2 border-indigo-950 hover:border-blue-300 ${activePage === 'companies' ? 'border-blue-300': ''}`}
                            onClick={() => onPageChange('companies')}>
                                Company
                            </div>

                        </div>
                    </div>
                    <div className="hidden sm:flex items-center">
                        <div className="flex items-center justify-center rounded-full bg-white h-8 w-8">
                            <span className="text-gray-800">H</span>
                        </div>
                        <span className="text-white ml-2">Hanish Patil</span>
                    </div>
                </div>
            </div>
        </nav>

    );

}
