import React, { useState } from 'react'
import Profile from './Profile'
import Interest from './Interest'
import Settings from './Settings'

const TabForm = () => {
  const [data, setData] = useState({
    name:"Ajay",
    age:12,
    email:"aj@gmail.com",
    interests:["coding","cricket"],
    theme:"dark"
  })
    const [activeTab,setActiveTab] = useState(0)

    const tabs = [
        {
        name:"Profile",
        component:Profile
        },
        {name:"Interest",
            component:Interest
        }
        ,{
            name:"Settings",
            component:Settings
        }
    ]

    const ActiveTabComponents = tabs[activeTab].component;
  return (
    <div>
    <div className='flex  p-2 mt-2'>
     {tabs.map((tab,index)=>(
        <div className='border p-2 mb-0 cursor-pointer ' key={index}
        onClick={()=>setActiveTab(index)}>{tab.name}</div>
     ))}
    </div>
     <div className='p-2 m-2 border h-[200px]'>
        <ActiveTabComponents data={data} setData={setData}/>
     </div>
    </div>
  )
}

export default TabForm