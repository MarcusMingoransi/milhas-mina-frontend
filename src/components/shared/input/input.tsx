import { TextFieldProps } from "@mui/material";
import React from "react";
import { InputField } from "./styles";

const Input = (props: TextFieldProps) => {
  return <InputField {...props} />;
};

export default Input;
