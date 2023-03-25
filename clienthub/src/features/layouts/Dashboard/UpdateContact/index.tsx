import { useForm } from "react-hook-form";
import { useState } from "react";
import * as styled from "./styles";
import * as components from "../../../../components";
import { UseAuthContext, UseContactsContext } from "../../../../context";
import { DialogUpdate } from "./dialog";
import { SelectComponent } from "../../../../components/Selects";
import { zodResolver } from "@hookform/resolvers/zod";
import { IContactUpdate } from "../../../interfaces";
import * as schemas from "../../../schemas";

export const UpdateContact = () => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [idToUpdate, setIdToUpdate] = useState("");
  const { contacts } = UseAuthContext();
  const { patchContact } = UseContactsContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContactUpdate>({
    resolver: zodResolver(schemas.contactCreate),
  });

  const handleOpenModal = () => setConfirmModal(true);

  const handleUpdate = async (data: IContactUpdate) => {
    await patchContact(idToUpdate, data);
  };

  return (
    <styled.DivStyled>
      <h1>Atualize aqui um contato especifico</h1>

      <styled.DivForm>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <styled.DivButtons>
            <SelectComponent list={contacts} setState={setIdToUpdate} />
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
            <components.Button
              type={"button"}
              variant="tertiary"
              onClick={handleOpenModal}
            >
              Atualizar
            </components.Button>
          </styled.DivButtons>
        </form>
      </styled.DivForm>

      <DialogUpdate state={confirmModal} setState={setConfirmModal} />
    </styled.DivStyled>
  );
};
