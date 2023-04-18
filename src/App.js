import "./styles.css";
import React, { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [initialValue, setInitialValue] = useState(0);
  const intervalRef = useRef(null);

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setCount(initialValue);
  };

  const handleStart = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  const handleInputChange = (event) => {
    setCount(event.target.value);
    setInitialValue(parseInt(event.target.value));
  };
  return (
    <>
      <div className="App">
        <h1>Timer</h1>
        <p className="timer">
          <span>TIMER</span>: {count} Sec
        </p>
        <div className="input">
          <input
            type="number"
            value={initialValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="buttons">
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
}
