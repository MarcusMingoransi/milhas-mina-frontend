import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, ReactNode, useContext } from "react";
import { Colors } from "./colors";

interface IThemeProvider {
  children: ReactNode;
}

interface ITheme {
  mode: string;
  toggleColorMode: () => void;
}

const INITIAL_VALUES: ITheme = {
  mode: "",
  toggleColorMode: () => {},
};
const CustomThemeContext = createContext(INITIAL_VALUES);

export const CustomThemeProvider = ({ children }: IThemeProvider) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");

  const switchColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }, []);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: Colors.primary.main,
            contrastText: Colors.primary.constrast,
          },
          secondary: {
            main: Colors.secondary.main,
            contrastText: Colors.primary.constrast,
          },
          background: {
            default: Colors.background,
          },
        },
        components: {
          MuiTextField: {
            defaultProps: {
              InputProps: {
                style: {
                  borderRadius: "8px",
                },
              },
            },
          },
          MuiButton: {
            defaultProps: { style: { borderRadius: "8px", height: "48px" } },
          },
        },
      }),
    [mode]
  );

  return (
    <CustomThemeContext.Provider
      value={{
        mode: mode,
        toggleColorMode: switchColorMode,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export const useCustomTheme = () => useContext(CustomThemeContext);
