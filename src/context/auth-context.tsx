import React from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IUser, Role } from "../models/models";
import { fakeAuth } from "../utils/helpers";

interface IAuthProvider {
  children: ReactNode;
}

interface IAuth {
  token: string;
  user: IUser | null;
  onLogin: () => void;
  onLogout: () => void;
}

const INITIAL_VALUES: IAuth = {
  token: "",
  user: null,
  onLogin: () => {},
  onLogout: () => {},
};
const AuthContext = createContext(INITIAL_VALUES);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState("");
  const [user, setUser] = useState<IUser | null>(null);

  const handleLogin = async () => {
    const token = await fakeAuth();
    setToken(String(token));
    setUser({
      name: "marcus",
      email: "marcus@gmail.com",
      roles: [Role.User],
    });

    const origin = location.state?.from?.pathname || "/home";
    navigate(origin);
  };

  const handleLogout = () => {
    setToken("");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
