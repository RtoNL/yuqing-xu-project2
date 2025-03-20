import React, { useEffect, memo } from "react";
import Board from "../components/Board";
import GameControls from "../components/GameControls";
import Timer from "../components/Timer";
import { useGame } from "../context/GameContext";
import { useLocation } from "react-router-dom";
import { GAME_MODES } from "../context/constants";
import "../styles/Game.css";

/**
 * Free Play Mode (Easy Mode) Game Component
 * In this mode, ships are automatically placed randomly, no manual placement needed
 */
const GameEasy = () => {
  const { resetGame, winner, setGameMode } = useGame();
  const location = useLocation();

  // When component mounts or route changes, reset game and set to free play mode
  useEffect(() => {
    resetGame();
    setGameMode(GAME_MODES.EASY);
  }, [location.pathname, resetGame, setGameMode]);

  return (
    <div className="game-container">
      <h1>Battleship Game - Free Play Mode</h1>

      {winner && (
        <h2 className="game-over-text">
          🎉 Game Over! {winner} Won! 🎉
        </h2>
      )}
      
      <GameContent />
    </div>
  );
};

/**
 * Game Content Component - Extracted to improve performance
 */
const GameContent = memo(() => {
  return (
    <>
      <Timer />
      <div className="boards free-play-mode">
        <div className="board-container">
          <h2>Enemy Board</h2>
          <Board isPlayer={false} />
        </div>
      </div>
      <GameControls />
    </>
  );
});

export default GameEasy;
