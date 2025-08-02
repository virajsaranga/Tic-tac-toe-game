import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        { email: email.trim(), password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/game"); 
    } catch (err) {
      const backendError =
        err.response?.data?.error || "Login failed. Check your credentials.";
      setError(backendError);
      console.error("Login error:", err.response?.data || err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container
      maxWidth="3000px"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        px: { xs: 2, sm: 3 },
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Paper
        elevation={12}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 4,
          width: "100%",
          maxWidth: 400,
          boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mb={3}
          sx={{ color: "primary.main" }}
        >
          <Avatar sx={{ bgcolor: "primary.main", width: 56, height: 56, mb: 1 }}>
            <LockOutlinedIcon fontSize="large" />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ fontSize: { xs: "1.4rem", sm: "1.75rem" }, fontWeight: "bold" }}
          >
            Sign in to your account
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleLogin} noValidate>
          <TextField
            label="Email Address"
            variant="outlined"
            fullWidth
            required
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            required
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          {error && (
            <Typography
              color="error"
              mt={1}
              fontSize="0.9rem"
              textAlign="center"
              fontWeight={500}
            >
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              py: { xs: 1.2, sm: 1.8 },
              fontWeight: "bold",
              textTransform: "none",
              borderRadius: 3,
              boxShadow: "0 4px 18px rgba(118, 75, 162, 0.5)",
              background:
                "linear-gradient(90deg, rgba(118,75,162,1) 0%, rgba(102,126,234,1) 100%)",
              "&:hover": {
                background:
                  "linear-gradient(90deg, rgba(102,126,234,1) 0%, rgba(118,75,162,1) 100%)",
                transform: "scale(1.02)",
                boxShadow: "0 6px 24px rgba(118, 75, 162, 0.7)",
              },
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={24} color="inherit" /> : "Sign In"}
          </Button>
        </Box>

        <Box textAlign="center" mt={3}>
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "#764ba2",
                fontWeight: 600,
              }}
            >
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
