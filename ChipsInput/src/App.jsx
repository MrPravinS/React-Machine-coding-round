import { useState } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      if (!chips.includes(inputText.trim())) {
        setChips((prev) => [...prev, inputText.trim()]);
      }
      setInputText("");
    }
  };

  const handleDeleteChip = (index) => {
    const copyChip = [...chips];
    copyChip.splice(index, 1);
    setChips(copyChip);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-semibold text-gray-700 mb-6">Chips Input</h1>

      <div className="w-full max-w-xl">
        <input
          placeholder="Enter a chip and press Enter"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          type="text"
          onKeyDown={handleKeyDown}
          className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <div className="flex flex-wrap mt-4 gap-2">
          {chips.map((chip, index) => (
            <div
              key={index}
              className="flex items-center bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-medium shadow-sm"
            >
              {chip}
              <button
                onClick={() => handleDeleteChip(index)}
                className="ml-2 text-blue-500 hover:text-red-600 transition-colors"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
