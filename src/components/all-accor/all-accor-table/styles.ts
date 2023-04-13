import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const DataGridWrapper = styled("div")(({ theme }) => ({
  height: "300px",
  width: "100%",
}));

export const CellWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
}));

export const CellWrapperText = styled(Typography)(({ theme }) => ({
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: "32px",
  fontWeight: 800,
  lineHeight: "28px",
  color: theme.palette.text.primary,
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "28px",
  color: theme.palette.text.disabled,
}));
