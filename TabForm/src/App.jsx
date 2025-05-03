import { useState } from 'react'
import './App.css'
import Profile from './components/Profile'
import Interest from './components/Interest'
import Settings from './components/Settings'

function App() {

  return (
    <div className='flex w-[600px] h-[600px] bg-gray-200 border border-gray-300 shadow-2xl'>
      <div className=' m-2'>
      <Profile/>
      <Interest/>
      <Settings/>
      </div>
    </div>
  )
}

export default App
