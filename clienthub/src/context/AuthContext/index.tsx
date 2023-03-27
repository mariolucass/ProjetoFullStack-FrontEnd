import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api, apiAuthenticated } from "../../features/database/axios";
import {
  ICustomerLogin,
  ICustomerRegister,
  ICustomerReturn,
  ICustomerUpdate,
} from "../../features/interfaces";
import { IChildren } from "../../features/interfaces/children";
import { toast } from "react-toastify";

export interface AuthContext {
  handleLogin: (data: ICustomerLogin) => Promise<void>;
  handleRegister: (data: ICustomerRegister) => Promise<void>;
  updateCustomer: (data: ICustomerUpdate) => Promise<void>;
  deleteCustomer: () => Promise<void>;
  dashboard: boolean;
  setDashboard: React.Dispatch<React.SetStateAction<boolean>>;
  customer: ICustomerReturn;
  setCustomer: React.Dispatch<React.SetStateAction<ICustomerReturn>>;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

interface IProps extends IChildren {}

export const AuthProvider = ({ children }: IProps) => {
  const navigate = useNavigate();
  const [customer, setCustomer] = useState<ICustomerReturn>(
    {} as ICustomerReturn
  );
  const [dashboard, setDashboard] = useState(true);

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("tokenContactsApp");

      if (token) {
        try {
          const response = await apiAuthenticated.get("/customers/profile");
          const data: ICustomerReturn = response.data;
          setCustomer(data);

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

  const handleLogin = async (data: ICustomerLogin) => {
    try {
      const response: any = await api.post("/auth/login", data);

      localStorage.setItem("tokenContactsApp", response.data.token);

      toast.success("Login realizado com sucesso.");

      navigate("/dashboard");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const handleRegister = async (data: ICustomerRegister) => {
    try {
      await api.post("/auth/register", data);

      toast.success("Registro realizado com sucesso.");

      navigate("/login");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const updateCustomer = async (data: ICustomerUpdate) => {
    try {
      const response = await apiAuthenticated.patch(
        `/customers/${customer.id}`,
        data
      );

      setCustomer(response.data);

      toast.success("Usuário atualizado com sucesso.");
    } catch (error) {
      toast.error("Ops! Algo deu errado");
    }
  };

  const deleteCustomer = async () => {
    try {
      await apiAuthenticated.delete(`/customers/${customer.id}`);

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
        customer,
        setCustomer,
        dashboard,
        setDashboard,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthContext);
