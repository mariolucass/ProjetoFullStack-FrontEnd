import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import * as styled from "./styles";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: "email" | "name" | "phone" | "password" | "confirm_password";

  error: any;

  register: UseFormRegister<any>;
}

export const Input = ({
  name,
  register,
  error,
  label,
  ...rest
}: IInputProps) => {
  return (
    <styled.DivInput>
      <styled.LabelStyled>{label}</styled.LabelStyled>

      <styled.InputStyled {...register(name)} {...rest} />
      {error && <span>{error.message}</span>}
    </styled.DivInput>
  );
};
