import React, { useState } from 'react'

export default function ChooseUser() {

    const [chooseUser, setChooseUser] = useState(null)

    const handleInput = (inputId) => {
        setChooseUser(inputId)
    }

    return (
        <div className='choose-user flex flex-col justify-center'>
            <h1 className='p-5 m-4 h-5'></h1>
            <h1 className="text-5xl block pb-2 text-center">Create an account</h1>
            <h1 className="text-lg mb-4 pb-4 block text-center">Are you a developer or a company</h1>
            <div className='flex flex-col justify-center'>
                <div className={`px-4 py-2 mx-4 my-2 border-2 border-black rounded  ${chooseUser === 1 ? 'border-secondary' : ''}`} onClick={() => handleInput(1)}>
                    <div className='flex justify-between'>
                        <div>
                            Sign up as a Developer
                            <div className='text-sm'>
                                Something to say...
                            </div>
                        </div>
                        <div className='grid content-center'>
                            <div className={`${chooseUser === 1 ? 'bg-secondary' : 'border-2 border-gray-500'} h-4 w-4 rounded-full grow-0`}></div>
                        </div>
                    </div>
                </div>
                <div className={`px-4 py-2 mx-4 my-2 border-2 border-black rounded  ${chooseUser === 2 ? 'border-secondary' : ''}`} onClick={() => handleInput(2)}>
                    <div className='flex justify-between'>
                        <div>
                            Sign up as a Developer
                            <div className='text-sm'>
                                Something to say...
                            </div>
                        </div>
                        <div className='grid content-center'>
                            <div className={`${chooseUser === 2 ? 'bg-secondary' : 'border-2 border-gray-500'} h-4 w-4 rounded-full grow-0`}></div>
                        </div>
                    </div>
                </div>
                <button className='btn px-4 py-2 mx-4 mt-4 bg-secondary rounded'> submit </button>
            </div>
            <div className='block pb-2 text-center'>Already have an account? <span className='text-secondary-dark'>Log in</span></div>
        </div>
    )
}
