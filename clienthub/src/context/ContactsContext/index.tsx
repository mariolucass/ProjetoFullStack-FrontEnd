import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IChildren } from "../../features/interfaces/children";

export interface ContactsContext {}

export const ContactsContext = createContext<ContactsContext>(
  {} as ContactsContext
);

interface IProps extends IChildren {}

export const ContactsProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  return (
    <ContactsContext.Provider value={{}}>{children}</ContactsContext.Provider>
  );
};

export const UseContactsContext = () => useContext(ContactsContext);
