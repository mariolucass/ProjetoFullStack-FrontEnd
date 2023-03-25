import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../features/database/axios";

import * as interfaces from "../../features/interfaces";

export interface ContactsContext {
  postContact: (data: interfaces.IContactRequest) => Promise<void>;

  patchContact: (
    contactId: string,
    data: interfaces.IContactUpdate
  ) => Promise<void>;

  deleteContact: (contactId: string) => Promise<void>;
}

export const ContactsContext = createContext<ContactsContext>(
  {} as ContactsContext
);

interface IProps extends interfaces.IChildren {}

export const ContactsProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const postContact = async (data: interfaces.IContactRequest) => {
    const response = await api.post("contacts", data);

    toast.success("O contato foi criado com sucesso!");
  };

  const patchContact = async (
    contactId: string,
    data: interfaces.IContactUpdate
  ) => {
    const response = api.patch(`contacts/${contactId}`, data);

    toast.success("O contato foi atualizado com sucesso!");
  };

  const deleteContact = async (contactId: string) => {
    const response = await api.delete(`contacts/${contactId}`);

    toast.success("O contato foi deletado com sucesso!");
  };

  return (
    <ContactsContext.Provider
      value={{ postContact, patchContact, deleteContact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const UseContactsContext = () => useContext(ContactsContext);
