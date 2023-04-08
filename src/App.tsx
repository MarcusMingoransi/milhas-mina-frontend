import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CustomThemeProvider } from "./context/theme-context";
import { AuthProvider } from "./context/auth-context";
import { ToastProvider } from "./context/toast-context";
import Routes from "./routes/routes";

const Loading = () => <p>Loading ...</p>;

const App = () => {
  return (
    <CustomThemeProvider>
      <ToastProvider>
        <BrowserRouter>
          <React.Suspense fallback={<Loading />}>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </React.Suspense>
        </BrowserRouter>
      </ToastProvider>
    </CustomThemeProvider>
  );
};

export default App;
