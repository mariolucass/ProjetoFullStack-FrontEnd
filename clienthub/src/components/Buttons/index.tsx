import { ButtonHTMLAttributes } from "react";
import * as styled from "./styles";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  type: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "tertiary";
}

export const Button = ({ children, type, variant, onClick }: IButton) => {
  return (
    <styled.ButtonStyled type={type} onClick={onClick} variant={variant}>
      {children}
    </styled.ButtonStyled>
  );
};
