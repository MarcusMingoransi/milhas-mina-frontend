import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import { CustomThemeProvider } from "./components/theme/theme";
import { AuthProvider, useAuth } from "./context/auth-context";
import { Role } from "./models/models";

const Login = React.lazy(() => import("./pages/login"));
const Home = React.lazy(() => import("./pages/home"));
const AccessDenied = React.lazy(() => import("./pages/access-denied"));

const Loading = () => <p>Loading ...</p>;

const App = () => {
  const { user } = useAuth();

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <React.Suspense fallback={<Loading />}>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/home"
                element={
                  <PrivateRoute permissions={[Role.Admin, Role.User]}>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<AccessDenied />} />
            </Routes>
          </AuthProvider>
        </React.Suspense>
      </BrowserRouter>
    </CustomThemeProvider>
  );
};

export default App;
