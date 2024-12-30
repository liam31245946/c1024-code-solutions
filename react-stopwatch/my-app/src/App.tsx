import './App.css';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';
import { useState, useRef } from 'react';
import './stopWatch.css';

export default function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (!intervalRef.current) {
      // Ensure no duplicate intervals are created
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1); // Increment time by 1
      }, 1000); // Update every second
    }
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Stop the interval
      intervalRef.current = null; // Reset the ref
    }
  };

  const reset = () => {
    stop(); // Stop the interval
    setTime(0); // Reset time to 0
  };

  return (
    <>
      <div className="stopwatch">
        <div className="watch-face"></div>
        <h2>{time}</h2>
        <FaPlay size="2rem" className="start" onClick={start} />
        <FaPause className="stop" onClick={stop} />
        <FaRedo className="reset" onClick={reset} />
      </div>
    </>
  );
}
