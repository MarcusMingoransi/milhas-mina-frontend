import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const ContactWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const NameText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins-Semibold",
  fontSize: "14px",
  fontWeight: 600,
  textAlign: "center",
  color: theme.palette.text.primary,
}));

export const EmailText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins-Semibold",
  fontSize: "8px",
  textAlign: "center",
  color: theme.palette.text.disabled,
}));

export const LogoutButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
