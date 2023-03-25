import { Skeleton } from "@mui/material";
import { UseAuthContext } from "../../../../context";
import * as styled from "./styles";

export const AllContacts = () => {
  const { contacts } = UseAuthContext();

  const renderContacts = contacts.map((elem: any) => {
    return (
      <li>
        <img src={elem.img} alt={elem.name} />
        <span>{elem.name}</span>
        <span>{elem.email}</span>
        <span>{elem.phone}</span>
      </li>
    );
  });

  const renderList = () => {
    return contacts.length ? (
      <styled.ListStyled>{renderContacts}</styled.ListStyled>
    ) : (
      <styled.ListStyled>
        <Skeleton variant="rounded" width={248} height={248} />
        <Skeleton variant="rounded" width={248} height={248} />
        <Skeleton variant="rounded" width={248} height={248} />
        <Skeleton variant="rounded" width={248} height={248} />
        <Skeleton variant="rounded" width={248} height={248} />
        <Skeleton variant="rounded" width={248} height={248} />
        <Skeleton variant="rounded" width={248} height={248} />
        <Skeleton variant="rounded" width={248} height={248} />
      </styled.ListStyled>
    );
  };

  return (
    <styled.DivStyled>
      <h1>Aqui estão todos os seus contatos</h1>

      <styled.DivList>{renderList()}</styled.DivList>
    </styled.DivStyled>
  );
};
