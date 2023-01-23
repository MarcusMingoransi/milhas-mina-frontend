import React from "react";
import { ImageStyled } from "./styles";

interface Props {
  src: string;
  alt?: string;
  width?: string;
  height?: string;
}
const Image = ({ src, alt, width, height }: Props) => {
  return <ImageStyled src={src} alt={alt} width={width} height={height} />;
};

export default Image;
