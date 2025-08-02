import React from 'react';
import { Box } from '@mui/material';
import './Cell.css'; // 👈 CSS for individual cell

const Cell = ({ value, onClick }) => {
  return (
    <Box className={`cell ${value ? 'filled' : ''}`} onClick={onClick}>
      {value}
    </Box>
  );
};

export default Cell;

