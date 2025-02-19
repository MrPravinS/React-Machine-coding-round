// nested file folder structure
// Expand and collaps folder
// Add / remove file/folder

import { useState } from 'react'
import json from './data.json'
import './App.css'


// render list of obj
const List = ({list}) => {
  const [isExpanded,setIsExpanded] = useState(false)
  return (
    <div className='folders'>
    {list.map((item)=> (
      <div key={Math.random()}>
        {item?.isFolder && <span onClick={()=>setIsExpanded(prev=>!prev)}>{isExpanded ? "-" : "+"} </span>}
        <span>{item.name}</span>
      {isExpanded && item?.children && <List list={item.children}/>}
      </div>
      ))}
    </div>
  )
}

function App() {
  const [data, setData] = useState(json)

  return (
   <div className='container'>
    <h1>File/Folder Explorer</h1>
    <List list={data}/>
    
   </div>
  )
}

export default App
