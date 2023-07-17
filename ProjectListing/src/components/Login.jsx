import React from 'react'
import signupImg from '../assets/Signup.jpg'


export default function Login() {
  return (
   <div>
     <div className=' SignUp grid grid-cols-1 sm:grid-cols-2 h-screen w-screen '>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={signupImg} alt="" />
        </div>

        <div className='bg-[#fed7aa] flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto rounded-lg bg-[#ffedd5] bg-opacity-80 p-8 px-8'>
                <h2 className='text-4xl text-[#4c0519] font-bold text-center'>SIGN IN</h2>
                <div className='flex flex-col text-[#451a03] py-2'>
                    <label>Username</label>
                    <input className='p-2 rounded-lg bg-[#f8e0c0] bg-opacity-80 mt-2 focus:border-[#f97316] focus:bg-[#fff7ed] focus:bg-opacity-80 focus:outline-none placeholder-[#f59e0b] focus:placeholder-orange-200' type="text" placeholder="John Doe " minLength="5" maxLength="22"/>
                </div>
                <div className='flex flex-col text-[#451a03] py-2'>
                    <label>Password</label>
                    <input className='p-2 rounded-lg bg-[#f8e0c0] bg-opacity-80 mt-2 focus:border-[#f97316] focus:bg-[#fff7ed] focus:bg-opacity-80 focus:outline-none placeholder-[#f59e0b] focus:placeholder-orange-200' type="password" placeholder="Password" minLength="5" maxLength="12"/>
                </div>
                <div className='flex justify-between text-[#9a3412] py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                    <p>Forgot Password</p>
                </div>
                <button className='w-full my-5 py-2 bg-orange-500 shadow-lg shadow-amber-500/50 hover:shadow-orange-500/40 text-white font-semibold rounded-lg'>SIGNIN</button>
                
            </form>
        </div>
    </div>
   </div>
  )
}