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
import { Image, Link } from "../../components/shared";
import Logo from "../../images/loginLogo.png";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

const Login = () => {
  const { onLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    React.useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);
  const handleShowConfirmationPassword = () =>
    setShowConfirmationPassword((show) => !show);
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
            <Typography variant="h3">Cadastro 😎</Typography>
            <FormControl variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                endAdornment={
                  <InputAdornment position="end">
                    <AlternateEmailOutlinedIcon />
                  </InputAdornment>
                }
                label="Email"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="password">Senha</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Senha"
                onChange={(e) => setPassword(e.currentTarget.value)}
              />
            </FormControl>
            <FormControl variant="outlined">
              <InputLabel htmlFor="confirmation-password">
                Confirmação Senha
              </InputLabel>
              <OutlinedInput
                id="confirmation-password"
                type={showConfirmationPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowConfirmationPassword}
                      edge="end"
                    >
                      {showConfirmationPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirmação Senha"
                onChange={(e) => setConfirmationPassword(e.currentTarget.value)}
              />
            </FormControl>
            <Button
              variant="contained"
              onClick={() => onLogin(email, password)}
            >
              Cadastrar
            </Button>
            <Divider />
            <Typography sx={{ textAlign: "center" }}>
              Já possuí um cadastro?
              <Link to="/login">
                <Typography sx={{ fontFamily: "Poppins-Semibold" }}>
                  Clique aqui para realizar o login.
                </Typography>
              </Link>
            </Typography>
          </WrapperRight>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Login;
