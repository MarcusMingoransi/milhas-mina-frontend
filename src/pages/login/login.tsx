import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { useAuth } from "../../context/auth-context";
import {
  DescriptionText,
  Divider,
  LogoContent,
  Wrapper,
  WrapperLeft,
  WrapperRight,
} from "../../components/login-register/styles";
import { Image, Input, Link } from "../../components/shared";
import Logo from "../../images/loginLogo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const { onLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Wrapper>
      <Grid container>
        <Grid item xs={7}>
          <WrapperLeft>
            <LogoContent>
              <Image src={Logo} alt="Logo" width="450px" />
              <DescriptionText>
                A poucos clicks de começar a gerenciar e automatizar suas milhas
                de uma maneira muito simples, rápida e intuitiva.
              </DescriptionText>
            </LogoContent>
          </WrapperLeft>
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
            <FormControl variant="outlined">
              <InputLabel htmlFor="password">
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </FormControl>
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
