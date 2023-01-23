import { styled } from "@mui/system";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: "bold",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));
