import React from "react";
import Cell from "./Cell.jsx";
import { useGame } from "../context/GameContext.jsx";
import "../styles/Board.css";

/**
 * BoardCell component - renders a single cell in the game board
 * @param {Object} props - Component props
 * @param {Object} props.cell - Cell data
 * @param {boolean} props.isPlayer - Whether this is the player's board
 * @param {Function} props.onClick - Click handler function
 * @returns {JSX.Element} Rendered cell component
 */
const BoardCell = ({ cell, isPlayer, onClick }) => {
  const getCellContent = () => {
    if (!cell) return null;
    if (cell.hit && cell.id) return "X";
    if (cell.hit && cell.miss) return "O";
    if (isPlayer && cell.id) return "S";
    return null;
  };

  const getCellClassName = () => {
    if (!cell) return "cell empty";
    if (cell.hit && cell.id) return "cell hit";
    if (cell.hit && cell.miss) return "cell miss";
    if (isPlayer && cell.id) return "cell ship";
    return "cell empty";
  };

  return (
    <Cell
      value={getCellContent()}
      className={getCellClassName()}
      onClick={onClick}
    />
  );
};

/**
 * BoardRow component - renders a row of cells in the game board
 * @param {Object} props - Component props
 * @param {Array} props.row - Row data
 * @param {number} props.rowIndex - Row index
 * @param {boolean} props.isPlayer - Whether this is the player's board
 * @param {Function} props.onCellClick - Cell click handler function
 * @returns {JSX.Element} Rendered row component
 */
const BoardRow = ({ row, rowIndex, isPlayer, onCellClick }) => {
  return row.map((cell, colIndex) => (
    <BoardCell
      key={`${rowIndex}-${colIndex}`}
      cell={cell}
      isPlayer={isPlayer}
      onClick={() => onCellClick(rowIndex, colIndex)}
    />
  ));
};

/**
 * Board component - renders the game board
 * @param {Object} props - Component props
 * @param {boolean} props.isPlayer - Whether this is the player's board
 * @returns {JSX.Element} Rendered board component
 */
const Board = ({ isPlayer }) => {
  const { playerBoard, aiBoard, isGameActive, playerAttack } = useGame();
  const board = isPlayer ? playerBoard : aiBoard;

  const handleCellClick = (row, col) => {
    if (!isPlayer && isGameActive) {
      playerAttack(row, col);
    }
  };

  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <BoardRow
          key={`row-${rowIndex}`}
          row={row}
          rowIndex={rowIndex}
          isPlayer={isPlayer}
          onCellClick={handleCellClick}
        />
      ))}
    </div>
  );
};

export default Board;
