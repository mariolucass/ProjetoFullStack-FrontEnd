import * as styled from "./styles";
import * as layouts from "../../layouts";

import { Dashboard } from "./dashboard";
import { UseAuthContext } from "../../../context";

export const MainPage = () => {
  const { dashboard } = UseAuthContext();

  return (
    <>
      <layouts.Header />
      <styled.MainStyled>
        {dashboard ? <Dashboard /> : <layouts.Profile />}
      </styled.MainStyled>
    </>
  );
};
