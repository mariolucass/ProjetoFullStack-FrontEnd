import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { apiAuthenticated } from "../../../database/axios";
import * as styled from "./styles";
import { IContactReturn } from "../../../interfaces";

export const AllContacts = () => {
  const [contactsInRender, setContactsInRender] = useState<IContactReturn[]>(
    [] as IContactReturn[]
  );

  useEffect(() => {
    (async () => {
      const response = await apiAuthenticated.get("/customers/contacts");
      const data: IContactReturn[] = response.data;

      setContactsInRender(data.filter((contact) => contact.isActive));
    })();
  }, []);

  const renderContacts = contactsInRender.map((contact: any) => (
    <styled.ContactTab key={contact.email}>
      <div>
        <h4>Nome:</h4>
        <span>{contact.name}</span>
      </div>

      <div>
        <h4>Email:</h4>
        <span>{contact.email}</span>
      </div>

      <div>
        <h4>Telefone:</h4>
        <span>{contact.phone}</span>
      </div>
    </styled.ContactTab>
  ));

  const RenderList = () => {
    return contactsInRender.length ? (
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

      <styled.DivList>
        <RenderList />
      </styled.DivList>
    </styled.DivStyled>
  );
};
