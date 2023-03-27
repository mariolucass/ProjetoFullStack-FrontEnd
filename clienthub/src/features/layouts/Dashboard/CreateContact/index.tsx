import * as styled from "./styles";
import { useForm } from "react-hook-form";
import * as schemas from "../../../schemas";
import * as components from "../../../../components";
import { IContactRequest } from "../../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { UseContactsContext } from "../../../../context";

export const CreateContact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactRequest>({
    resolver: zodResolver(schemas.contactCreate),
  });

  const { postContact } = UseContactsContext();

  return (
    <styled.DivStyled>
      <h1>Crie aqui um contato.</h1>

      <styled.DivForm>
        <form onSubmit={handleSubmit(postContact)}>
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

          <styled.DivButtons>
            <components.Button type="submit"> Criar </components.Button>
          </styled.DivButtons>
        </form>
      </styled.DivForm>
    </styled.DivStyled>
  );
};
