import { styled } from "@mui/system";

export const ImageStyled = styled("img")`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
`;
