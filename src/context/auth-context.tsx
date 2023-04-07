import { createContext, ReactNode, useContext, useState } from "react";
import { useCookies } from "react-cookie";
import { useLocation, useNavigate } from "react-router-dom";
import { SideMenu } from "../components/shared";
import { IUser } from "../models/models";
import api from "../services/api";
import { COOKIE_NAME, INVALID_EMAIL_PASSWORD } from "../utils/constants";
import { clearCookie } from "../utils/helpers";
import { useToast } from "./toast-context";

interface IAuthProvider {
  children: ReactNode;
}

interface IAuth {
  user: IUser | null;
  onLogin: (email: string, password: string) => Promise<void>;
  onLogout: () => void;
}

const INITIAL_VALUES: IAuth = {
  user: null,
  onLogin: async (email: string, password: string) => {},
  onLogout: () => {},
};
const AuthContext = createContext(INITIAL_VALUES);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();

  const [cookies, setCookie] = useCookies([COOKIE_NAME]);

  const [user, setUser] = useState<IUser | null>(
    cookies && cookies.user
      ? {
          token: cookies.user.token,
          name: `${cookies.user.first_name} ${cookies.user.last_name}`,
          email: cookies.user.email,
          roles: [cookies.user.role],
        }
      : null
  );

  const handleLogin = async (email: string, password: string) => {
    try {
      const isAuthenticated = await api.post("/login", {
        email,
        password,
      });
      if (isAuthenticated && isAuthenticated.data) {
        let expires = new Date();
        expires.setTime(
          expires.getTime() + isAuthenticated.data.expires_in * 1000
        );
        setCookie(COOKIE_NAME, isAuthenticated.data, {
          path: "/",
          expires,
        });

        const { token, first_name, last_name, email, role } =
          isAuthenticated.data;
        setUser({
          token: token,
          name: `${first_name} ${last_name}`,
          email,
          roles: [role],
        });

        const origin = location.state?.from?.pathname || "/home";
        navigate(origin);
      }
    } catch (error) {
      console.log(error);
      showToast(INVALID_EMAIL_PASSWORD, "error");
    }
  };

  const handleLogout = () => {
    setUser(null);
    clearCookie(COOKIE_NAME);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        onLogin: handleLogin,
        onLogout: handleLogout,
      }}
    >
      {user && <SideMenu />}
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
