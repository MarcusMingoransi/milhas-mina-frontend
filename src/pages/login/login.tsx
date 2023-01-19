import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useAuth } from "../../context/auth-context";
import { useCustomTheme } from "../../components/theme/theme";

const Login = () => {
  const { onLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mode, toggleColorMode } = useCustomTheme();
  return (
    <Box>
      {mode} mode
      <Button onClick={toggleColorMode}>
        {mode === "dark" ? "Sol" : "Lua"}
      </Button>
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
