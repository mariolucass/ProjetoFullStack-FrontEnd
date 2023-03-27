import * as styled from "./styles";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IContactReturn } from "../../../interfaces";
import { apiAuthenticated } from "../../../database/axios";
import { Card, CardContent, Skeleton } from "@mui/material";

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
    <Card sx={{ minWidth: 275 }} key={contact.email} className="Card">
      <CardContent>
        <motion.div>
          <motion.h4>Nome:</motion.h4>
          <motion.span>{contact.name}</motion.span>
        </motion.div>

        <motion.div>
          <motion.h4>Email:</motion.h4>
          <motion.span>{contact.email}</motion.span>
        </motion.div>

        <motion.div>
          <motion.h4>Telefone:</motion.h4>
          <motion.span>{contact.phone}</motion.span>
        </motion.div>
      </CardContent>
    </Card>
  ));

  const RenderList = () => {
    return contactsInRender.length ? (
      <styled.ListStyled>{renderContacts}</styled.ListStyled>
    ) : (
      <styled.ListStyled>
        <Skeleton variant="rounded" width={275} height={160} />
        <Skeleton variant="rounded" width={275} height={160} />
        <Skeleton variant="rounded" width={275} height={160} />
        <Skeleton variant="rounded" width={275} height={160} />
        <Skeleton variant="rounded" width={275} height={160} />
        <Skeleton variant="rounded" width={275} height={160} />
        <Skeleton variant="rounded" width={275} height={160} />
        <Skeleton variant="rounded" width={275} height={160} />
      </styled.ListStyled>
    );
  };

  return (
    <styled.DivStyled>
      <h1>Aqui estão todos os seus contatos.</h1>

      <styled.DivList>
        <RenderList />
      </styled.DivList>
    </styled.DivStyled>
  );
};
