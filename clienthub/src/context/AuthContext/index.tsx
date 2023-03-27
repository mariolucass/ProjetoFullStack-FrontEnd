import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, apiAuthenticated } from "../../features/database/axios";
import * as interfaces from "../../features/interfaces";
import { IChildren } from "../../features/interfaces/children";
import { toast } from "react-toastify";

export interface AuthContext {
  handleLogin: (data: interfaces.ICustomerLogin) => Promise<void>;
  handleRegister: (data: interfaces.ICustomerRegister) => Promise<void>;
  updateCustomer: (
    id: string,
    data: interfaces.ICustomerUpdate
  ) => Promise<void>;
  deleteCustomer: (id: string) => Promise<void>;

  dashboard: boolean;
  setDashboard: React.Dispatch<React.SetStateAction<boolean>>;
  contacts: interfaces.IContactReturn[];
  setContacts: React.Dispatch<
    React.SetStateAction<interfaces.IContactReturn[]>
  >;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

interface IProps extends IChildren {}

export const AuthProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const [dashboard, setDashboard] = useState(true);
  const [contacts, setContacts] = useState<interfaces.IContactReturn[]>(
    [] as interfaces.IContactReturn[]
  );

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("tokenContactsApp");

      if (token) {
        try {
          const response = await apiAuthenticated.get("/customers/contacts");
          const data: interfaces.IContactReturn[] = response.data;

          setContacts(data.filter((contact) => contact.isActive));

          navigate("/dashboard");
        } catch (error) {
          toast.error(
            "O token expirou e/ou não foi validado no sistema, por favor faca o login novamente"
          );

          navigate("/login");
        }
      } else {
        navigate("/login");
      }
    };
    autoLogin();
  }, []);

  const handleLogin = async (data: interfaces.ICustomerLogin) => {
    try {
      const response: any = await api.post("/auth/login", data);

      localStorage.setItem("tokenContactsApp", response.data.token);
      console.log(response);

      toast.success("Login realizado com sucesso.");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const handleRegister = async (data: interfaces.ICustomerRegister) => {
    try {
      await api.post("/auth/register", data);

      toast.success("Registro realizado com sucesso.");

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const updateCustomer = async (
    id: string,
    data: interfaces.ICustomerUpdate
  ) => {
    try {
      await apiAuthenticated.patch(`/customer/${id}`, data);

      toast.success("Usuário atualizado com sucesso.");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const deleteCustomer = async (id: string) => {
    try {
      await apiAuthenticated.delete(`/customer/${id}`);

      toast.success("Usuário atualizado com sucesso.");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleLogin,
        handleRegister,
        updateCustomer,
        deleteCustomer,
        contacts,
        setContacts,
        dashboard,
        setDashboard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthContext);
