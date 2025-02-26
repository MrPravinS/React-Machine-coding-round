// nested file folder structure
// Expand and collaps folder
// Add / remove file/folder

import { useState } from "react";
import json from "./data.json";
import "./App.css";

// render list of obj
const List = ({ list , addNodeToList}) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="folders">
      {list.map((item) => (
        <div key={item.id}>
          {item.isFolder && (
            <span onClick={() => setIsExpanded((prev) => ({...prev,[item.name]:!prev[item.name]}))}>
              {isExpanded?.[item.name] ? "-" : "+"}
            </span>
          )}
          <span>{item.name}</span>
          {item.isFolder && <span onClick={()=>addNodeToList(item.id)}>
            <img src="https://cdn-icons-png.flaticon.com/128/4732/4732392.png" alt="folder-logo" className="icon" />
          </span>}
          {isExpanded?.[item.name] && item?.children && (
            <List list={item.children} />
          )}
        </div>
      ))}
    </div>
  );
};

function App() {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
      const updatTree = (list) => {
         return list.map(node=>{
           if(node.id === parentId){
            return {
              ...node,
              children:{...node.children,
                
              }
            }
           }
         })
      }
      setData((prev)=>updatTree(prev))
  }
  return (
    <div className="container">
      <h1>File/Folder Explorer</h1>
      <List list={data} />
    </div>
  );
}

export default App;
