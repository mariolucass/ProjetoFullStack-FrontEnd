import * as components from "../../../components";
import * as styled from "./styles";
import * as layouts from "../../layouts";
import * as animations from "../../libs/Framer/animations";
import { UseAuthContext } from "../../../context";
import { useForm } from "react-hook-form";
import img from "../../../assets/images/return.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRegister } from "../../interfaces/auth";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  const { handleRegister } = UseAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>({
    // resolver: zodResolver(FormSchemaLogin),
  });

  return (
    <>
      <styled.MainStyled>
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
            name={"confirm_password"}
            label={"Confirme sua senha"}
            type="text"
            placeholder="Confirme sua senha aqui"
            register={register}
            error={errors.confirm_password}
          />
          <styled.DivButtons>
            <components.Button type="submit"> Registre-se </components.Button>

            <span>
              Já tem uma conta? <Link to={"/login"}>Faça login.</Link>
            </span>
          </styled.DivButtons>
        </styled.FormStyled>
      </styled.MainStyled>
    </>
  );
};
