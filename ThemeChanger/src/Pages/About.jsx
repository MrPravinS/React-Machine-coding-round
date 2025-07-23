import React, { useContext } from 'react'
import { UserContext } from '../userCOntext'

const About = () => {

    const {user} = useContext(UserContext)
  return (
     <div className='flex items-center'>
        <h1 className='text-3xl font-bold text-center m-4'>About page</h1>
        <p className='text-3xl font-bold text-green hover:scale-120 transition duration-3s'>Hey I am {user.name}</p>
    </div>
  )
}

export default About