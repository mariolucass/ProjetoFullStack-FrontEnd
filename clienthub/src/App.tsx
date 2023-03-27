import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { theme } from "./features/libs/Mui/theme";
import { RoutesMain } from "../src/features/routes";
import { AllContexts } from "./features/layouts/Contexts";
import { GlobalStyle } from "./features/styles/globalStyle";

import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <AllContexts>
        <RoutesMain />
      </AllContexts>
    </ThemeProvider>

    <GlobalStyle />
    <ToastContainer limit={3} autoClose={2000} />
  </>
);
