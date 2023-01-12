import React from "react";
import { Box, Button } from "@mui/material";
import { useAuth } from "../../context/auth-context";

const Login = () => {
  const { onLogin } = useAuth();
  return (
    <Box>
      <h2>Home (Public)</h2>
      <Button variant="contained" onClick={onLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
