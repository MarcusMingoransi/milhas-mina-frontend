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
          },
          secondary: {
            main: Colors.secondary.main,
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
