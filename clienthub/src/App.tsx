import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { RoutesMain } from "../src/features/routes";
import { GlobalStyle } from "./features/styles/globalStyle";
import { AllContexts } from "./features/layouts/Contexts";
import { ThemeProvider } from "@mui/material";
import { theme } from "./features/libs/Mui/theme";

export const App = () => {
  return (
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
};
