
import { useState } from 'react'
import './App.css'
import {UserContext} from "./userCOntext"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './Components/Navbar'

function App() {

  const [user, setUser] = useState({name:"Pravin"})
  const [isLoggedIn,setIsLoggedIn ] = useState(false)

  const handleLogin = () => {
      setIsLoggedIn(prev => !prev)
  }



  return (
     
    <>
    <UserContext.Provider value={{user, setUser,isLoggedIn,setIsLoggedIn, handleLogin}}>
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
  
    </UserContext.Provider>
    </>
  )
}

export default App
