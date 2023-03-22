import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../features/database/axios";
import { ILogin, IRegister } from "../../features/interfaces/auth";
import { IChildren } from "../../features/interfaces/children";
import { toast } from "react-toastify";

export interface AuthContext {
  handleLogin: (data: ILogin) => Promise<void>;
  handleRegister: (data: IRegister) => Promise<void>;
}

export const AuthContext = createContext<AuthContext>({} as AuthContext);

interface IProps extends IChildren {}

export const AuthProvider = ({ children }: IProps) => {
  const navigate = useNavigate();

  const handleLogin = async (data: ILogin) => {
    try {
      const {
        data: {
          token,
          user: { id },
        },
      } = await api.post("/login", data);

      localStorage.setItem("token", token);
      localStorage.setItem("id", JSON.stringify(id));

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const handleRegister = async (data: IRegister) => {
    try {
      await api.post("/register", data);
      toast.success("Login realizado com sucesso");

      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogin, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuthContext = () => useContext(AuthContext);
