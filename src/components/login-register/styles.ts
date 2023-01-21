import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
}));

export const WrapperLeft = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.main,
}));

export const WrapperRight = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "45px",
  width: "100%",
  minHeight: "100vh",
}));

export const Divider = styled("div")(({ theme }) => ({
  width: "60%",
  height: "2px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px",
}));

export const DescriptionText = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: 600,
  textAlign: "center",
  color: theme.palette.primary.contrastText,
}));

export const LogoContent = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "90px",
  padding: "60px",
}));
