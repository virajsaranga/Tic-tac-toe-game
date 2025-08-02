import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import Board from '../components/Board';

const Game = () => {
  return (
    <Container maxWidth="3000px"

    sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        px: { xs: 2, sm: 3 },
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}

    >
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>Tic Tac Toe</Typography>
        <Board />
      </Box>
    </Container>
  );
};

export default Game;
