import React from 'react'
import "./EntryMain.css"

import Login from '../login/Login'
import Register from '../register/Register'
import ChooseUser from './create/ChooseUser'

export default function EntryMain() {
  return (
    <div className='entry-main'>
        <div className="entry-main-bg"></div>
        <div className="entry-main-page bg-white ">
            {/* <Login/> */}
            <Register/>
            {/* <ChooseUser/> */}
        </div>
    </div>
  )
}
