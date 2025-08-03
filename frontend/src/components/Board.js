import React, { useState } from 'react';
import Cell from './Cell';
import './Board.css';

const Board = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(cells);

  const handleClick = (index) => {
    if (cells[index] || winner) return;
    const newCells = [...cells];
    newCells[index] = xIsNext ? 'X' : 'O';
    setCells(newCells);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setCells(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className="board-container">
      <h1 className="title">
        {winner ? `${winner} Wins!` : `Next: ${xIsNext ? 'X' : 'O'}`}
      </h1>

      <div className="board-grid">
        {cells.map((value, index) => (
          <Cell key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>

      <button className="reset-button" onClick={handleReset}>
        Restart Game
      </button>
    </div>
  );
};

// Winner calculation function [same as before]
const calculateWinner = (squares) => {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  for (let [a,b,c] of lines) {
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default Board;
