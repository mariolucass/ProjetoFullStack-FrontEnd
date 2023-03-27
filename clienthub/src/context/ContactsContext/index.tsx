import axios, { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { apiAuthenticated } from "../../features/database/axios";

import {
  IChildren,
  IContactRequest,
  IContactUpdate,
} from "../../features/interfaces";

export interface ContactsContext {
  postContact: (data: IContactRequest) => Promise<void>;

  patchContact: (contactId: string, data: IContactUpdate) => Promise<void>;

  deleteContact: (contactId: string) => Promise<void>;
}

export const ContactsContext = createContext<ContactsContext>(
  {} as ContactsContext
);

export const ContactsProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();

  const postContact = async (data: IContactRequest) => {
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

  const patchContact = async (contactId: string, data: IContactUpdate) => {
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
