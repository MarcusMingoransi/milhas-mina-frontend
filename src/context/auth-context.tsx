import React from "react";
import { createContext, ReactNode, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IUser, Role } from "../models/models";
import api from "../services/api";

interface IAuthProvider {
  children: ReactNode;
}

interface IAuth {
  token: string;
  user: IUser | null;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
}

const INITIAL_VALUES: IAuth = {
  token: "",
  user: null,
  onLogin: (email: string, password: string) => {},
  onLogout: () => {},
};
const AuthContext = createContext(INITIAL_VALUES);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(String(localStorage.getItem("token")));
  const [user, setUser] = useState<IUser | null>(null);

  const handleLogin = async (email: string, password: string) => {
    try {
      const isAuthenticated = await api.post("/login", {
        email,
        password,
      });
      if (isAuthenticated && isAuthenticated.data) {
        setToken(String(isAuthenticated.data.token));
        localStorage.setItem("token", isAuthenticated.data.token);
        setUser({
          name: "marcus",
          email: "marcus@gmail.com",
          roles: [Role.User],
        });

        const origin = location.state?.from?.pathname || "/home";
        navigate(origin);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.setItem("token", "");
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
