import React from "react";
import {
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";
import Board from "../components/Board";
import GameLogo from "../assets/logo.png";

const Game = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <AppBar
        position="static"
        sx={{ background: "transparent", boxShadow: "none", pt: 2 }}
      >
        <Toolbar sx={{ justifyContent: "center" }}>
          <Avatar
            src={GameLogo}
            alt="Game Logo"
            sx={{ width: 56, height: 56, mr: 2, bgcolor: "white", p: 1 }}
          />
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            Tic Tac Toe
          </Typography>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 5,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffffee",
            borderRadius: 4,
            boxShadow: 6,
            p: { xs: 3, sm: 4 },
            textAlign: "center",
            width: { xs: "100%", sm: "auto" },
            maxWidth: 500,
          }}
        >
          <Typography variant="h5" gutterBottom color="primary">
            Ready to Play?
          </Typography>
          <Board />
        </Box>
      </Container>
    </Box>
  );
};

export default Game;
