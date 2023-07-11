import React, { useState } from 'react'
import "./Login.css"

export default function Login() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [accessToken, setAccessToken] = useState("")


  const handleLogin = async (event) => {
    event.preventDefault()

    console.log("___clicked___", username, "___pass___", password)

    try {
      fetch('http://localhost:3001/signin', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {

          console.log("___response___", response)
          return response.json()
        })
        .then((data) => {
          console.log("___res data___", data)
          const token = data.token;
          setAccessToken(token)
          
          const currentDate = new Date();
          localStorage.setItem('accessToken', token);
          localStorage.setItem('accessTokenCreationDate', currentDate.toISOString());      
        })
        .catch((err) => {
          console.log("__error__", err)
        })


    } catch (error) {

    }
  }


  return (
    <div className='login'>
        <div className="max-w-md w-full p-8">
        <h1 className="text-3xl mb-4">Login Page</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded border-2 border-gray-500 focus:border-secondary focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-secondary py-2 px-4 rounded hover:bg-secondary-dark"
          >
            Login
          </button>
          {accessToken && <div className="mt-4 break-all">Access Token: {accessToken}</div>}
        </form>
      </div>
    </div>
  )
}
