import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { useAuth } from "../../context/auth-context";
import { Divider, Wrapper, WrapperLeft, WrapperRight } from "./styles";
import { Input, Link } from "../../components/shared";

const Login = () => {
  const { onLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={7}>
          <WrapperLeft></WrapperLeft>
        </Grid>
        <Grid item xs={5}>
          <WrapperRight>
            <Typography variant="h3">Login ✌️</Typography>
            <Input
              id="email"
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <Button
              variant="contained"
              onClick={() => onLogin(email, password)}
            >
              Login
            </Button>
            <Divider />
            <Typography sx={{ textAlign: "center" }}>
              Se ainda não se cadastrou, faça seu cadastro gratuitamente.
              <br />
              <Link to="/register">Clique aqui para se cadastrar.</Link>
            </Typography>
          </WrapperRight>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Login;
