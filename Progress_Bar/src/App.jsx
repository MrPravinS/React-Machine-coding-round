import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const bars = [1, 5, 10, 20, 30, 50, 70, 90, 100];
  return (
    <div>
      <h1 className="title"> Progress Bar</h1>

      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}

export default App;
