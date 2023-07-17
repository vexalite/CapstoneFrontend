import React, { useState } from 'react'

export default function NavBar({ activePage, onPageChange }) {

    return (

        <nav className='w-full bg-black h-[80px]'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <span className="text-white font-semibold text-3xl">Logo</span>
                        </div>
                    </div>
                    <div className="hidden sm:block">
                        <div className="flex space-x-4 border-black">
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-white ${activePage === 'projects' ? 'text-white border-white' : 'border-black'}`}
                            onClick={() => onPageChange('projects')}>
                                Project
                            </div>
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-white ${activePage === 'companies' ? 'text-white border-white': 'border-black'}`}
                            onClick={() => onPageChange('companies')}>
                                Company
                            </div>
                            <div className={`flex-auto py-1 px-4 text-white font-semibold text-lg border-b-2 hover:border-white ${activePage === 'developers' ? 'text-white border-white': 'border-black'}`}
                            onClick={() => onPageChange('developers')}>
                                Developers
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
