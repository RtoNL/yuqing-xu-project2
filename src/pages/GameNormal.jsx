import React, { useEffect } from "react";
import "../styles/Game.css";
import Board from "../components/Board";
import GameControls from "../components/GameControls";
import ShipPlacement from "../components/ShipPlacement";
import { useLocation } from "react-router-dom";  // For tracking route changes
import { GAME_PHASES, GAME_MODES } from "../context/constants";
import { useGame } from "../context/GameContext";

const GameNormal = () => {
  const { gamePhase, winner, resetGame, setGameMode } = useGame();
  const location = useLocation(); // Get current location

  // Monitor route changes to reset game
  useEffect(() => {
    resetGame();
    setGameMode(GAME_MODES.NORMAL);
  }, [location.pathname, resetGame, setGameMode]); // Reset game when path changes

  // Render different content based on game phase
  return (
    <div className="game-container">
      <h1>Battleship - Normal Mode</h1>
      
      {gamePhase === GAME_PHASES.SETUP && (
        <div className="placement-phase">
          <ShipPlacement />
        </div>
      )}
      
      {gamePhase === GAME_PHASES.PLAYING && (
        <div className="game-boards">
          <div className="board-container">
            <h2>Your Board</h2>
            <Board isPlayerBoard={true} />
          </div>
          
          <div className="board-container">
            <h2>Enemy Board</h2>
            <Board isPlayerBoard={false} />
          </div>
        </div>
      )}
      
      {gamePhase === GAME_PHASES.OVER && (
        <div className="game-over">
          {winner && <h2 className="game-over-text">🎉 Game Over! {winner} Won! 🎉</h2>}
          <button onClick={resetGame} className="restart-button">Play Again</button>
        </div>
      )}
      
      <GameControls />
    </div>
  );
};

export default GameNormal;
