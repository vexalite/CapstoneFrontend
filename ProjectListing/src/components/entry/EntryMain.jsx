import React from 'react'
import "./EntryMain.css"
import { Routes, Route } from 'react-router-dom'

import Login from '../login/Login'
import Register from '../register/Register'
import ChooseUser from './create/ChooseUser'
import CompanyRegister from '../companyRegister/CompanyRegister'
import DevRegister from '../devRegister/DevRegister'
import CompanySignIn from '../company/CompanySignIn'
import CompanySignUp from '../company/CompanySignUp'
import UserForm from '../auth/Auth'
import DevImgRegister from '../devRegister/DevImgRegister'

export default function EntryMain() {


  return (

    <div className='entry-main '>
      <div className="entry-main-bg">
        <img src="https://unsplash.it/1920/1010" alt="" />
      </div>
      <div className="entry-main-page bg-white overflow-y-scroll">
        {/* <DevRegister/> */}
        {/* <CompanyRegister/> */}
        {/* <Login/> */}
        {/* <Register/> */}
        {/* <ChooseUser/> */}
        {/* <UserForm /> */}
        <Routes>
          <Route exact path="/" element={<ChooseUser />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/devreg" element={<DevRegister />} /> */}
          <Route path="/devreg" element={<DevImgRegister />} />
          <Route path="/compreg" element={<CompanyRegister />} />
          <Route path="/compsignin" element={<CompanySignIn />} />
          <Route path="/compsignup" element={<CompanySignUp />} />
        </Routes>
      </div>
    </div>
  )
}
