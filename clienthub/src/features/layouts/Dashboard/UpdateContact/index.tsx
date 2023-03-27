import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import * as styled from "./styles";
import * as components from "../../../../components";
import { UseContactsContext } from "../../../../context";
import { SelectComponent } from "../../../../components/Selects";
import { zodResolver } from "@hookform/resolvers/zod";
import { IContactUpdate, IContactReturn } from "../../../interfaces";
import * as schemas from "../../../schemas";
import { apiAuthenticated } from "../../../database/axios";
import { toast } from "react-toastify";

export const UpdateContact = () => {
  const [idToUpdate, setIdToUpdate] = useState("");
  const [contactsInRender, setContactsInRender] = useState<IContactReturn[]>(
    [] as IContactReturn[]
  );

  useEffect(() => {
    (async () => {
      const response = await apiAuthenticated.get("/customers/contacts");
      const data: IContactReturn[] = response.data;
      console.log(data);

      setContactsInRender(data.filter((contact) => contact.isActive));
    })();
  }, []);

  const { patchContact } = UseContactsContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactUpdate>({
    resolver: zodResolver(schemas.contactUpdate),
  });

  const handleUpdate = async (data: IContactUpdate) => {
    const nonEmptyValues = Object.entries(data)
      .filter(([key, value]) => typeof value === "string" && value !== "")
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
    const dataStrip = schemas.contactUpdate.parse(nonEmptyValues);

    if (idToUpdate === "") {
      toast.error("Selecione pelo menos um usuário para atualizar");
      return;
    }

    if (!Object.keys(dataStrip).length) {
      toast.error("Selecione pelo menos um campo para atualizar");
      return;
    }

    patchContact(idToUpdate, dataStrip);
  };

  return (
    <styled.DivStyled>
      <h1>Atualize aqui um contato especifico</h1>

      <styled.DivForm>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <styled.DivButtons>
            <SelectComponent list={contactsInRender} setState={setIdToUpdate} />
          </styled.DivButtons>

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
            <components.Button type="submit">Atualizar</components.Button>
          </styled.DivButtons>
        </form>
      </styled.DivForm>
    </styled.DivStyled>
  );
};
