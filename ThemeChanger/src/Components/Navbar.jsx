import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../userCOntext'

const Navbar = () => {
    const {isLoggedIn, handleLogin} = useContext(UserContext)
  return (
    <div className='bg-white flex justify-between p-4 shadow-lg'>
     <div className=' '>
        <Link className='bg-black px-3 py-2 rounded-full text-white font-bold text-xl' to={"/"}>Home</Link>
      </div>
      <div  className='flex gap-4'>
        <Link className='bg-black px-3 py-2  cursor-pointer rounded-full text-white font-bold text-xl' to={"/about"}>About</Link>
        <Link className='bg-black px-3 py-2 cursor-pointer rounded-full text-white font-bold text-xl' to={"/contact"}>Contact</Link>
        <button className='bg-black px-3 py-2 cursor-pointer rounded-full text-white font-bold text-xl' onClick={handleLogin}>{isLoggedIn ? "Logout": "Login"}</button>
      </div>
    </div>
    
  )
}

export default Navbar