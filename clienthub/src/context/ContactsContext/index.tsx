import axios, { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api, apiAuthenticated } from "../../features/database/axios";

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
    try {
      await apiAuthenticated.post("contacts", data);
      toast.success("O contato foi criado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error((error.response?.data as AxiosError).message);
      } else {
        console.log(error);
      }
    }
  };

  const patchContact = async (
    contactId: string,
    data: interfaces.IContactUpdate
  ) => {
    try {
      apiAuthenticated.patch(`contacts/${contactId}`, data);
      toast.success("O contato foi atualizado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error((error.response?.data as AxiosError).message);
      } else {
        console.log(error);
      }
    }
  };

  const deleteContact = async (contactId: string) => {
    try {
      await apiAuthenticated.delete(`contacts/${contactId}`);
      toast.success("O contato foi deletado com sucesso!");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error((error.response?.data as AxiosError).message);
      } else {
        console.log(error);
      }
    }
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
