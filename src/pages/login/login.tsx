import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useAuth } from "../../context/auth-context";

const Login = () => {
  const { onLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Box>
      <h2>Login</h2>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Button variant="contained" onClick={() => onLogin(email, password)}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
