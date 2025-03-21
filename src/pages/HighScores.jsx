import React from "react";
import "../styles/HighScores.css";

const HighScores = () => {
  // Mock high score data
  const highScores = [
    { name: "Battleship Master", mode: "Normal Mode", time: "01:45", date: "2025-02-15" },
    { name: "Admiral", mode: "Normal Mode", time: "02:12", date: "2025-03-10" },
    { name: "Pirate King", mode: "Normal Mode", time: "02:30", date: "2025-04-08" },
    { name: "Naval Expert", mode: "Normal Mode", time: "02:45", date: "2025-06-05" },
    { name: "Fleet Commander", mode: "Normal Mode", time: "03:00", date: "2025-08-01" },
    { name: "Rookie Sailor", mode: "Free Play Mode", time: "04:20", date: "2025-01-14" },
    { name: "Speedboat Captain", mode: "Free Play Mode", time: "05:30", date: "2025-05-12" },
    { name: "Explorer", mode: "Free Play Mode", time: "06:15", date: "2025-07-09" },
    { name: "Novice Helmsman", mode: "Free Play Mode", time: "07:40", date: "2025-09-06" },
    { name: "Trainee", mode: "Free Play Mode", time: "09:25", date: "2025-11-02" }
  ];

  return (
    <div className="highscores-container">
      <h1>High Scores</h1>
      
      <div className="score-section">
        <h2>Normal Mode</h2>
        <table className="score-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player Name</th>
              <th>Completion Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {highScores
              .filter(score => score.mode === "Normal Mode")
              .map((score, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{score.name}</td>
                  <td>{score.time}</td>
                  <td>{score.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      
      <div className="score-section">
        <h2>Free Play Mode</h2>
        <table className="score-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player Name</th>
              <th>Completion Time</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {highScores
              .filter(score => score.mode === "Free Play Mode")
              .map((score, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{score.name}</td>
                  <td>{score.time}</td>
                  <td>{score.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      
      <div className="info-box">
        <h3>How to Get on the Leaderboard</h3>
        <p>After completing a game, if your time is faster than the slowest record on the current leaderboard, you'll have a chance to enter the leaderboard!</p>
        <p>Please note that the leaderboard is currently static and will have real record-saving functionality in future versions.</p>
      </div>
    </div>
  );
};

export default HighScores;
