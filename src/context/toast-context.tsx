import { Alert, AlertColor, Snackbar } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

interface IToastProvider {
  children: ReactNode;
}

interface IToast {
  showToast: (message: string, severity: AlertColor) => void;
}

const INITIAL_VALUES: IToast = {
  showToast: (message: string, severity: AlertColor) => {},
};
const ToastContext = createContext(INITIAL_VALUES);

export const ToastProvider = ({ children }: IToastProvider) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("info");

  const showToast = async (message: string, severity: AlertColor) => {
    setMessage(message);
    setSeverity(severity);
    setOpen((prevValue) => !prevValue);
  };

  return (
    <ToastContext.Provider
      value={{
        showToast,
      }}
    >
      {children}
      <Snackbar
        open={open}
        message={message}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
