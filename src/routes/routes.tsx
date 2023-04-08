import React, { useMemo } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { SideMenu } from "../components/shared";
import { ALL_ACCOR_PAGE, LOGIN_PAGE, REGISTER_PAGE } from "../utils/constants";
import { Box, Container } from "@mui/material";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: JSX.Element;
}

const Login = React.lazy(() => import("../pages/login"));
const Register = React.lazy(() => import("../pages/register"));
const AllAccorPage = React.lazy(() => import("../pages/all-accore-page"));
const AccessDenied = React.lazy(() => import("../pages/access-denied"));

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  if (isAuthenticated) {
    return (
      <Box display="flex">
        <SideMenu />
        <Container maxWidth="lg">{children}</Container>
      </Box>
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
        path={ALL_ACCOR_PAGE}
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <AllAccorPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default RoutesWrapper;
