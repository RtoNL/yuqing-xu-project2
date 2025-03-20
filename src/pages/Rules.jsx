import React from "react";
import "../styles/rules.css";

const Rules = () => {
  return (
    <div className="rules-container">
      <h1>Battleship Game Rules</h1>
      
      <div className="rule-section">
        <h2>Game Overview</h2>
        <p>Battleship is a classic two-player game. In this version, you will play against an AI opponent. The goal is to find and sink all of your opponent's ships before they find and sink all of yours.</p>
      </div>
      
      <div className="rule-section">
        <h2>Game Setup</h2>
        <p>Each player has a 10x10 grid. At the beginning of the game, 5 ships are randomly placed on the grid:</p>
        <ul>
          <li>Aircraft Carrier - 5 squares long</li>
          <li>Battleship - 4 squares long</li>
          <li>Cruiser - 3 squares long</li>
          <li>Submarine - 3 squares long</li>
          <li>Destroyer - 2 squares long</li>
        </ul>
        <p>Ships can be placed horizontally or vertically, but they cannot overlap and must fit entirely within the grid.</p>
      </div>
      
      <div className="rule-section">
        <h2>Gameplay</h2>
        <ol>
          <li>The player always goes first</li>
          <li>On your turn, click a square on the enemy grid to guess the location of their ships</li>
          <li>If you hit an enemy ship, the square will be marked with a red X</li>
          <li>If you miss, the square will be marked with a green O</li>
          <li>Then it's the AI's turn, and it will randomly select a square on your grid</li>
          <li>Neither player nor AI can attack the same position twice</li>
        </ol>
      </div>
      
      <div className="rule-section">
        <h2>Game Modes</h2>
        <h3>Normal Mode</h3>
        <p>Normal two-player gameplay where you and the AI take turns attacking each other's grids.</p>
        
        <h3>Free Play Mode</h3>
        <p>In this mode, you only see the enemy's grid, and the AI doesn't take turns. This is a practice mode to help you get familiar with the game.</p>
      </div>
      
      <div className="rule-section">
        <h2>Game End</h2>
        <p>The game ends when all ships of one player have been sunk. The winner will be displayed at the top of the screen.</p>
      </div>
      
      <div className="rule-section">
        <h2>Grid Markers</h2>
        <ul>
          <li><span className="symbol ship">S</span> - Your ships (only visible on your own grid)</li>
          <li><span className="symbol hit">X</span> - A hit ship</li>
          <li><span className="symbol miss">O</span> - A missed attack</li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
