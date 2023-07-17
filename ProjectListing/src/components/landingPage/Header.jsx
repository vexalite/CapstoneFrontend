import React from 'react'

export default function Header() {
    return (
        <div className='header-main flex justify-between items-center border-b-2 border-black'>
            <div className="flex-1">H1</div>
            <div className="flex-1 text-center hidden md:block">H2</div>
            <div className="flex-1 text-right">H3</div>
        </div>
    )
}
