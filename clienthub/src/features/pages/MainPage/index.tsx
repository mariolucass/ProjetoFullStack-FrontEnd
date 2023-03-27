import * as styled from "./styles";
import { Dashboard } from "./dashboard";
import * as layouts from "../../layouts";
import { UseAuthContext } from "../../../context";

export const MainPage = () => {
  const { dashboard } = UseAuthContext();
  return (
    <>
      <layouts.Header />
      <styled.MainStyled
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {dashboard ? <Dashboard /> : <layouts.Profile />}
      </styled.MainStyled>
    </>
  );
};
