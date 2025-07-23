import React, { useContext } from 'react'
import { UserContext } from '../userCOntext'

const Home = () => {
    const {user, isLoggedIn} = useContext(UserContext)
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-center m-4'>Home page</h1>
        <p className='text-3xl font-bold text-green hover:scale-120 transition duration 3s'>Hey {user.name} Your are {isLoggedIn ? "Login" :"You are not Login"}</p>
    </div>
  )
}

export default Home