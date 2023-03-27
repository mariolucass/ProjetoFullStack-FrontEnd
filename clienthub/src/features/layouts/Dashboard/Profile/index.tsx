import { useState } from "react";
import * as styled from "./styles";
import { useForm } from "react-hook-form";
import * as schemas from "../../../schemas";
import { TiUserDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import * as components from "../../../../components";
import { UseAuthContext } from "../../../../context";
import { ICustomerUpdate } from "../../../interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { toast } from "react-toastify";

export const Profile = () => {
  const navigate = useNavigate();

  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

  const { updateCustomer, deleteCustomer } = UseAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerUpdate>({
    resolver: zodResolver(schemas.customerUpdate),
  });

  const handleModalDelete = () => setConfirmDeleteModal(true);
  const handleDelete = () => {
    deleteCustomer();

    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleUpdate = (data: ICustomerUpdate) => {
    const nonEmptyValues = Object.entries(data)
      .filter(([key, value]) => typeof value === "string" && value !== "")
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

    const dataStrip = schemas.customerUpdate.parse(nonEmptyValues);

    if (!Object.keys(dataStrip).length) {
      toast.error("Selecione pelo menos um campo para atualizar");
      return;
    }
    updateCustomer(dataStrip);
  };

  const SpeedDialProfile = () => (
    <SpeedDial ariaLabel="Profile actions" icon={<SpeedDialIcon />}>
      <SpeedDialAction
        tooltipTitle={"Deletar Perfil"}
        icon={<TiUserDelete />}
        onClick={handleModalDelete}
      />
    </SpeedDial>
  );

  return (
    <styled.DivStyled
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      <h1>Edite aqui seu perfil</h1>

      <styled.DivForm>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <components.Input
            name={"name"}
            label={"Nome"}
            type="text"
            placeholder="Atualize seu nome aqui"
            register={register}
            error={errors.name}
          />
          <components.Input
            name={"password"}
            label={"Senha"}
            type="text"
            placeholder="Atualize sua senha aqui"
            register={register}
            error={errors.password}
          />

          <components.Input
            name={"email"}
            label={"E-mail"}
            type="email"
            placeholder="Atualize seu email aqui"
            register={register}
            error={errors.email}
          />

          <components.Input
            name={"phone"}
            label={"Telefone"}
            type="text"
            placeholder="Atualize seu telefone aqui"
            register={register}
            error={errors.phone}
          />

          <styled.DivButtons>
            <components.Button type="submit"> Editar Perfil </components.Button>
          </styled.DivButtons>
        </form>
      </styled.DivForm>

      <components.DialogComponent
        state={confirmDeleteModal}
        setState={setConfirmDeleteModal}
        handleFunction={handleDelete}
        text={"Deseja mesmo deletar sua conta ?"}
      />

      <SpeedDialProfile />
    </styled.DivStyled>
  );
};
