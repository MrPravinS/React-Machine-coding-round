import { useEffect, useState } from "react";
import "../App.css";

const ProgressBar = ({ progress }) => {
    const [animatedProgress,setAnimatedProgress] = useState(0)

    useEffect(()=>{
        setAnimatedProgress(progress)
    },[progress])
  return (
    <div className="outer">
      <div className="inner"
      style={{
        transform:`translateX(${animatedProgress - 100}%)`,
        color:progress < 5 ? "black":"white"
      }}
      >{progress}%</div>
    </div>
  );
};

export default ProgressBar