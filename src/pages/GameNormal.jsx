import React, { useEffect } from "react";
import Board from "../components/Board";
import GameControls from "../components/GameControls";
import Timer from "../components/Timer";
import ShipPlacement from "../components/ShipPlacement";
import { useGame } from "../context/GameContext";
import { useLocation } from "react-router-dom";  // 用于监听路由变化
import { GAME_MODES, GAME_PHASES } from "../context/constants"; 
import "../styles/Game.css";

const GameNormal = () => {
  const { resetGame, winner, setGameMode, gamePhase } = useGame();
  const location = useLocation(); // 获取当前路径

  // 🛠 监听路由变化，重置游戏
  useEffect(() => {
    resetGame();
    setGameMode(GAME_MODES.NORMAL);
  }, [location.pathname, resetGame, setGameMode]); // 每次切换路径时，调用 resetGame()

  // 根据游戏阶段渲染不同的内容
  const renderGameContent = () => {
    if (gamePhase === GAME_PHASES.SETUP) {
      return <ShipPlacement />;
    }
    
    return (
      <>
        <Timer />
        <div className="boards">
          <div className="board-container">
            <h2>Your Board</h2>
            <Board isPlayer={true} />
          </div>
          <div className="board-container">
            <h2>Enemy Board</h2>
            <Board isPlayer={false} />
          </div>
        </div>
        <GameControls />
      </>
    );
  };

  return (
    <div className="game-container">
      <h1>Battleship Game - Normal Mode</h1>

      {winner && <h2 className="game-over-text">🎉 Game Over! {winner} Won! 🎉</h2>}
      
      {renderGameContent()}
    </div>
  );
};

export default GameNormal;
