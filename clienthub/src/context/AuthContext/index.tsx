import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../features/database/axios";
import * as interfaces from "../../features/interfaces";
import { IChildren } from "../../features/interfaces/children";
import { toast } from "react-toastify";

export interface AuthContext {
  handleLogin: (data: interfaces.ICustomerLogin) => Promise<void>;
  handleRegister: (data: interfaces.ICustomerRegister) => Promise<void>;
  contacts: interfaces.IContactReturn[];
  setContacts: React.Dispatch<
    React.SetStateAction<interfaces.IContactReturn[]>
  >;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

interface IProps extends IChildren {}

export const AuthProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const [contacts, setContacts] = useState<interfaces.IContactReturn[]>(
    [] as interfaces.IContactReturn[]
  );

  // useEffect(() => {
  //   const autoLogin = async () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       try {
  //         const response: interfaces.IContactReturn[] = await api.get(
  //           "/customers/contacts"
  //         );

  //         setContacts(response.filter((contact) => contact.isActive));
  //         navigate("/dashboard");
  //       } catch (error) {
  //         toast.error(
  //           "O token expirou e/ou não foi validado no sistema, por favor faca o login novamente"
  //         );

  //         navigate("/login");
  //       }
  //     } else {
  //       navigate("/login");
  //     }
  //   };
  //   autoLogin();
  // }, []);

  const handleLogin = async (data: interfaces.ICustomerLogin) => {
    try {
      const response: any = await api.post("/login", data);

      localStorage.setItem("token", response.token);

      toast.success("Login realizado com sucesso.");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const handleRegister = async (data: interfaces.ICustomerRegister) => {
    try {
      await api.post("/register", data);

      toast.success("Registro realizado com sucesso.");

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, handleRegister, contacts, setContacts }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthContext);
