import React from "react";
import { LinkStyled } from "./styles";

interface Props {
  to: string;
  children?: React.ReactNode;
}
const Link = ({ to, children }: Props) => {
  return <LinkStyled to={to}>{children}</LinkStyled>;
};

export default Link;
