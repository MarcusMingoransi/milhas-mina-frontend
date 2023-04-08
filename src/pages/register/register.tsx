import React, { useState } from "react";
import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
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
import { useToast } from "../../context/toast-context";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
  LOGIN_PAGE,
  PASSWORD_NOT_MATCHED,
  SOMETHING_WENT_WRONG,
} from "../../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmationPassword, setShowConfirmationPassword] =
    React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);
  const handleShowConfirmationPassword = () =>
    setShowConfirmationPassword((show) => !show);

  const handleRegister = () => {
    if (password !== confirmationPassword)
      return showToast(PASSWORD_NOT_MATCHED, "info");
    setLoading(true);
    api
      .post("/register", {
        email,
        password,
      })
      .then((result) => {
        showToast(result.data.message, "success");
        navigate(LOGIN_PAGE);
      })
      .catch((error) => {
        console.log(error);
        showToast(error.response.data.message || SOMETHING_WENT_WRONG, "error");
      })
      .finally(() => setLoading(false));
  };
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
            <LoadingButton
              size="small"
              onClick={handleRegister}
              loading={loading}
              variant="contained"
              disabled={loading}
            >
              Cadastrar
            </LoadingButton>
            <Divider />
            <Typography sx={{ textAlign: "center" }}>
              Já possuí um cadastro?
              <Link to={LOGIN_PAGE}>
                <LinkStyled> Clique aqui para realizar o login.</LinkStyled>
              </Link>
            </Typography>
          </WrapperRight>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Login;
