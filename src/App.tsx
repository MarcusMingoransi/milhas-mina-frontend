import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import { CustomThemeProvider } from "./context/theme-context";
import { AuthProvider, useAuth } from "./context/auth-context";
import { Role } from "./models/models";
import { ToastProvider } from "./context/toast-context";

const Login = React.lazy(() => import("./pages/login"));
const Register = React.lazy(() => import("./pages/register"));
const Home = React.lazy(() => import("./pages/home"));
const AccessDenied = React.lazy(() => import("./pages/access-denied"));

const Loading = () => <p>Loading ...</p>;

const App = () => {
  const { user } = useAuth();

  return (
    <CustomThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <React.Suspense fallback={<Loading />}>
            <AuthProvider>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                  path="/home"
                  element={
                    <PrivateRoute
                      redirectPath="login"
                      permissions={[Role.Admin, Role.User]}
                    >
                      <Home />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<AccessDenied />} />
              </Routes>
            </AuthProvider>
          </React.Suspense>
        </BrowserRouter>
      </ToastProvider>
    </CustomThemeProvider>
  );
};

export default App;
