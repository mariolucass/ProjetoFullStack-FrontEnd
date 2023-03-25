import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as components from "../../../components";
import { UseAuthContext } from "../../../context/AuthContext";
import { ICustomerLogin } from "../../interfaces/auth";
import * as styled from "./styles";
import { Link } from "react-router-dom";
import * as animations from "../../libs/Framer/animations";
import { schemaLogin } from "../../schemas";

export const LoginPage = () => {
  const { handleLogin } = UseAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerLogin>({
    resolver: zodResolver(schemaLogin),
  });

  return (
    <styled.MainStyled>
      <styled.FormStyled
        onSubmit={handleSubmit(handleLogin)}
        animate={animations.animateShowingLogin}
        initial={animations.animateHiddenLogin}
      >
        <styled.DivTitle>
          <h1>Entre com a sua conta</h1>
        </styled.DivTitle>

        <components.Input
          name={"email"}
          label={"Email"}
          type="email"
          placeholder="Insira seu email aqui"
          register={register}
          error={errors.email}
        />
        <components.Input
          name={"password"}
          label={"Senha"}
          type="password"
          placeholder="Insira sua senha aqui"
          register={register}
          error={errors.password}
        />
        <styled.DivButtons>
          <components.Button type="submit"> Login </components.Button>

          <span>
            Não tem uma conta ? <Link to={"/register"}>Registre-se.</Link>
          </span>
        </styled.DivButtons>
      </styled.FormStyled>
    </styled.MainStyled>
  );
};
