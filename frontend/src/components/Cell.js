import React from 'react';
import './Cell.css';

const Cell = ({ value, onClick }) => {
  return (
    <button data-testid="cell" className="cell" onClick={onClick}>
      {value}
    </button>
  );
};

export default Cell;
