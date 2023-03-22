import { AuthProvider } from "../../../context/AuthContext";
import { ContactsProvider } from "../../../context/ContactsContext";
import { IChildren } from "../../interfaces/children";

export const AllContexts = ({ children }: IChildren) => {
  return (
    <AuthProvider>
      <ContactsProvider>{children}</ContactsProvider>
    </AuthProvider>
  );
};
