import React, { useContext } from 'react'
import { UserContext } from '../userCOntext'

const Contact = () => {
    const {user} = useContext(UserContext)
  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-3xl font-bold text-center m-4'>Contact  Page</h1>
        <p className='text-3xl font-bold text-green hover:scale-120 transition duration-3s'>Welcome! {user.name}</p>
    </div>
  )
}

export default Contact