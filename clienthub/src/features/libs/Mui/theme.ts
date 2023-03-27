import { createTheme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#296073",
    },
    secondary: {
      main: "#3596B5",
    },
    background: {
      default: "#eaeef0",
    },
  },
  typography: {
    fontFamily: "Inter",
  },
};

export const theme = createTheme(themeOptions);
