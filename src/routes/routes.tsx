import React, { useMemo } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { SideMenu } from "../components/shared";
import { HOME_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "../utils/constants";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const Login = React.lazy(() => import("../pages/login"));
const Register = React.lazy(() => import("../pages/register"));
const Home = React.lazy(() => import("../pages/home"));
const AccessDenied = React.lazy(() => import("../pages/access-denied"));

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  if (isAuthenticated) {
    return (
      <>
        <SideMenu />
        {children}
      </>
    );
  }
  return <Navigate to={LOGIN_PAGE} replace />;
};

const RoutesWrapper = () => {
  const { user } = useAuth();
  const isAuthenticated = useMemo(() => user !== null, [user]);

  return (
    <Routes>
      <Route path="*" element={<AccessDenied />} />
      <Route path={LOGIN_PAGE} element={<Login />} />
      <Route path={REGISTER_PAGE} element={<Register />} />
      <Route
        path={HOME_PAGE}
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RoutesWrapper;
