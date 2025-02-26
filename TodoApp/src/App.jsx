import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setToDO] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleBtn = () => {
    if (!todo) {
      alert("Add Task");
    } else {
      setTasks([...tasks, todo]);
      setToDO("")
    }
  };

  return (
    <div className="outer-div">
      <div className="div">
        <input
          className="inpt"
          type="text"
          placeholder="Enter Task"
          value={todo}
          onChange={(e) => setToDO(e.target.value)}
        />
        <button className="btn" onClick={handleBtn}>
          Add{" "}
        </button>
      </div>
      <div className="todo-div">
        <ul className="todo-list">
          {tasks.map((task, index) => (
            <li className="item" key={index}>{task} <button className="btn1">Completed</button>
            <button className="btn2">Delete</button></li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
