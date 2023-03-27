import * as styled from "./styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { schemaRegister } from "../../schemas";
import * as components from "../../../components";
import { UseAuthContext } from "../../../context";
import img from "../../../assets/images/return.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICustomerRegister } from "../../interfaces";
import * as animations from "../../libs/Framer/animations";

export const RegisterPage = () => {
  const { handleRegister } = UseAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerRegister>({
    resolver: zodResolver(schemaRegister),
  });

  return (
    <styled.MainStyled
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <styled.ReturnButton>
        <Link to={"/login"}>
          <img src={img} alt="backPage" />
        </Link>
      </styled.ReturnButton>

      <styled.FormStyled
        onSubmit={handleSubmit(handleRegister)}
        animate={animations.animateShowingRegister}
        initial={animations.animateHiddenRegister}
      >
        <styled.DivTitle>
          <h1>Criar sua conta</h1>
        </styled.DivTitle>

        <components.Input
          name={"name"}
          label={"Nome"}
          type="text"
          placeholder="Insira seu nome aqui"
          register={register}
          error={errors.name}
        />

        <components.Input
          name={"email"}
          label={"E-mail"}
          type="email"
          placeholder="Insira seu email aqui"
          register={register}
          error={errors.email}
        />

        <components.Input
          name={"phone"}
          label={"Telefone"}
          type="text"
          placeholder="Insira seu telefone aqui"
          register={register}
          error={errors.phone}
        />

        <components.Input
          name={"password"}
          label={"Senha"}
          type="password"
          placeholder="Insira sua senha aqui"
          register={register}
          error={errors.password}
        />

        <components.Input
          name={"confirmPassword"}
          label={"Confirme sua senha"}
          type="password"
          placeholder="Confirme sua senha aqui"
          register={register}
          error={errors.confirmPassword}
        />
        <styled.DivButtons>
          <components.Button type="submit"> Registre-se </components.Button>

          <span>
            Já tem uma conta? <Link to={"/login"}>Faça login.</Link>
          </span>
        </styled.DivButtons>
      </styled.FormStyled>
    </styled.MainStyled>
  );
};
