import React from "react";
import { LogoutOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import { IUser } from "../../../models/models";
import { ContactWrapper, EmailText, LogoutButton, NameText } from "./styles";
import { useAuth } from "../../../context/auth-context";

const Logout = (user: IUser) => {
  const { onLogout } = useAuth();
  return (
    <ContactWrapper>
      <Box>
        <NameText>{user.name}</NameText>
        <EmailText>{user.email}</EmailText>
      </Box>
      <LogoutButton color="default" aria-label="logout" onClick={onLogout}>
        <LogoutOutlined />
      </LogoutButton>
    </ContactWrapper>
  );
};

export default Logout;
