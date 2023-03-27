import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import { TiUserDelete } from "react-icons/ti";
import { BsFiletypePdf } from "react-icons/bs";
import * as styled from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import { ICustomerUpdate } from "../../../interfaces";
import { useForm } from "react-hook-form";
import * as schemas from "../../../schemas";
import * as components from "../../../../components";
import { UseAuthContext } from "../../../../context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const id = "";
    deleteCustomer(id);

    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleUpdate = (data: ICustomerUpdate) => {
    const nonEmptyValues = Object.entries(data)
      .filter(([key, value]) => typeof value === "string" && value !== "")
      .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

    const dataStrip = schemas.customerUpdate.parse(nonEmptyValues);

    const id = "";
    updateCustomer(id, dataStrip);
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
    <styled.DivStyled>
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
