import React, { useState, useEffect, useMemo } from "react";
import { useGame } from "../context/GameContext.jsx";
import "../styles/Timer.css";

/**
 * Formats seconds into a mm:ss display format
 * @param {number} seconds - Total seconds to format
 * @returns {string} Formatted time string
 */
const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};

/**
 * Timer component - displays elapsed game time
 * @returns {JSX.Element} Rendered timer component
 */
const Timer = () => {
  const { isGameActive, gameStartTime } = useGame();
  const [elapsedTime, setElapsedTime] = useState(0);

  // Set up timer effect
  useEffect(() => {
    let timerId;
    
    if (isGameActive && gameStartTime) {
      timerId = setInterval(() => {
        const currentTime = Date.now();
        const elapsed = Math.floor((currentTime - gameStartTime) / 1000);
        setElapsedTime(elapsed);
      }, 1000);
    }
    
    // Clean up timer on unmount or when dependencies change
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [isGameActive, gameStartTime]);

  // Memoize the formatted time to prevent unnecessary recalculations
  const formattedTime = useMemo(() => formatTime(elapsedTime), [elapsedTime]);

  return (
    <div className="timer">
      <h3>Game Time: {formattedTime}</h3>
    </div>
  );
};

export default Timer;
