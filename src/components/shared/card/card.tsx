import React from "react";
import { CardStyled } from "./styles";

interface CardProp {
  backgroundColor?: string;
  borderColor?: string;
  children?: JSX.Element | string;
}

const Card = ({ backgroundColor, borderColor, children }: CardProp) => {
  return (
    <CardStyled
      backgroundColor={backgroundColor || ""}
      borderColor={borderColor || ""}
    >
      {children}
    </CardStyled>
  );
};

export default Card;
