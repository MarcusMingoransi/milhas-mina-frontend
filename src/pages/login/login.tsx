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
  LinkStyled,
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
import { LoadingButton } from "@mui/lab";
import { useToast } from "../../context/toast-context";
import { INVALID_FIELDS } from "../../utils/constants";

const Login = () => {
  const { showToast } = useToast();
  const { onLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    if (!email || !password) return showToast(INVALID_FIELDS, "info");
    setLoading(true);
    await onLogin(email, password);
    setLoading(false);
  };

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
                      onClick={handleClickShowPassword}
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
            <LoadingButton
              size="small"
              onClick={() => handleLogin()}
              loading={loading}
              variant="contained"
              disabled={loading}
            >
              Login
            </LoadingButton>
            <Divider />
            <Typography sx={{ textAlign: "center" }}>
              Se ainda não se cadastrou, faça seu cadastro gratuitamente.
              <br />
              <Link to="/register">
                <LinkStyled>Clique aqui para se cadastrar.</LinkStyled>
              </Link>
            </Typography>
          </WrapperRight>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Login;
