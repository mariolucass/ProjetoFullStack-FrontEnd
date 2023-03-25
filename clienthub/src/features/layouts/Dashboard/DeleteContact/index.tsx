import * as styled from "./styles";
import { useState } from "react";
import { DialogDelete } from "./dialog";
import { Button } from "../../../../components";
import { UseAuthContext } from "../../../../context";
import { SelectComponent } from "../../../../components/Selects";

export const DeleteContact = () => {
  const [confirmModal, setConfirmModal] = useState(false);
  const [idToDelete, setIdToDelete] = useState("");

  const { contacts } = UseAuthContext();

  const handleOpenModal = () => setConfirmModal(true);

  return (
    <styled.DivStyled>
      <h1>Delete aqui um contato especifico</h1>

      <styled.DivContainer>
        <SelectComponent list={contacts} setState={setIdToDelete} />

        <Button type={"button"} variant={"tertiary"} onClick={handleOpenModal}>
          Deletar
        </Button>
      </styled.DivContainer>

      <DialogDelete state={confirmModal} setState={setConfirmModal} />
    </styled.DivStyled>
  );
};
