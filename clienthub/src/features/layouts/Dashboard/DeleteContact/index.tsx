import * as styled from "./styles";
import * as components from "../../../../components";
import { useEffect, useState } from "react";
import { SelectComponent } from "../../../../components/Selects";
import { apiAuthenticated } from "../../../database/axios";
import { IContactReturn } from "../../../interfaces";
import { UseContactsContext } from "../../../../context";
import { toast } from "react-toastify";

export const DeleteContact = () => {
  const [contactsInRender, setContactsInRender] = useState<IContactReturn[]>(
    []
  );
  useEffect(() => {
    (async () => {
      const response = await apiAuthenticated.get("/customers/contacts");
      const data: IContactReturn[] = response.data;

      setContactsInRender(data.filter((contact) => contact.isActive));
    })();
  }, []);

  const [confirmModal, setConfirmModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  const { deleteContact } = UseContactsContext();

  const handleModalDelete = () => {
    if (idToDelete === "") {
      toast.error("Selecione um usuário para deletar");
      return;
    }

    setConfirmModal(true);
  };

  const handleDelete = () => deleteContact(idToDelete);

  return (
    <styled.DivStyled>
      <h1>Delete aqui um contato especifico</h1>

      <styled.DivContainer>
        <SelectComponent list={contactsInRender} setState={setIdToDelete} />

        <components.Button
          type={"button"}
          variant={"tertiary"}
          onClick={handleModalDelete}
        >
          Deletar
        </components.Button>
      </styled.DivContainer>

      <components.DialogComponent
        state={confirmModal}
        setState={setConfirmModal}
        handleFunction={handleDelete}
        text={"Deseja deletar o contato?"}
      />
    </styled.DivStyled>
  );
};
