import { styled } from "@mui/system";

export const Wrapper = styled("div")(({ theme }) => ({
  height: "100vh",
  backgroundColor: theme.palette.background.default,
}));

export const WrapperLeft = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.primary.main,
}));

export const WrapperRight = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "45px",
  width: "100%",
  height: "100vh",
}));

export const Divider = styled("div")(({ theme }) => ({
  width: "60%",
  height: "2px",
  backgroundColor: theme.palette.primary.main,
  borderRadius: "8px",
}));
