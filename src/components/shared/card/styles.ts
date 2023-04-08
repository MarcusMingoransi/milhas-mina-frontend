import { styled } from "@mui/system";
import { Card } from "@mui/material";

type CardStyledProp = {
  backgroundColor?: string;
  borderColor?: string;
};

export const CardStyled = styled(Card)<CardStyledProp>(
  ({ theme, backgroundColor, borderColor }) => ({
    backgroundColor: backgroundColor || theme.palette.primary.light,
    border: borderColor ? `1px solid ${borderColor}` : "initial",
    borderRadius: "8px",
    padding: "15px",
    boxShadow: "none",
  })
);
