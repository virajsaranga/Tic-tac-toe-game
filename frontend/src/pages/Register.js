import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message || "Registration successful!");
        setUsername("");
        setEmail("");
        setPassword("");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        if (data.errors) {
          const errorsArr = Object.values(data.errors);
          setError(errorsArr.join(" "));
        } else {
          setError(data.error || "Registration failed!");
        }
      }
    } catch (err) {
      setError("An error occurred while registering.");
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
        <Box mb={3} textAlign="center" sx={{ color: "primary.main" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ fontSize: { xs: "1.6rem", sm: "2rem" } }}
            gutterBottom
          >
            Create an Account
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fill in the details below to get started
          </Typography>
        </Box>

        {message && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}
        {error && (
          <Alert severity="error" sx={{ mb: 2, whiteSpace: "pre-line" }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />

          <TextField
            label="Email"
            variant="outlined"
            type="email"
            fullWidth
            required
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
            autoComplete="new-password"
          />

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
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Register"
            )}
          </Button>
        </Box>

        <Box textAlign="center" mt={4}>
          <Typography variant="body2" color="text.secondary" mb={1}>
            Already have an account?
          </Typography>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              color: "#764ba2",
              borderColor: "#764ba2",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "rgba(118, 75, 162, 0.1)",
                borderColor: "#523B7E",
                color: "#523B7E",
              },
              py: { xs: 1, sm: 1.4 },
            }}
            onClick={() => navigate("/")}
          >
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
