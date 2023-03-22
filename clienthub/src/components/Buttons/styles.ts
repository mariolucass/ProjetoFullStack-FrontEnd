import styled, { css } from "styled-components";

interface IProps {
  variant?: "primary" | "secondary" | "tertiary" | "quaternary";
}
const typeButton = {
  primary: css`
    width: 50%;
    height: 60px;
    font-size: 24px;

    background-color: var(--secondary-color);
    color: var(--white-color);
    border: 2px solid transparent;

    :hover {
      transition: 0.5s;

      background-color: var(--secondary95-color);
      border: 2px solid var(--secondary-color);
    }
  `,

  secondary: css`
    width: 50px;
    height: 60px;
    font-size: 20px;

    background-color: var(--white-color);
    color: var(--primary-color);

    :hover {
      transition: 0.5s;

      background-color: var(--white-color);
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
    }
  `,

  tertiary: css`
    width: 140px;
    height: 48px;
    font-size: 14px;

    background-color: var(--primary-color);
    color: var(--white-color);

    :hover {
      transition: 0.5s;

      background-color: var(--white-color);
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
    }
  `,

  quaternary: css`
    width: 140px;
    height: 48px;
    font-size: 16px;

    background-color: var(--white-color);
    color: var(--primary-color);

    :hover {
      transition: 0.5s;

      background-color: transparent;
      border: 2px solid var(--white-color);
      color: var(--white-color);
    }
  `,
};

export const ButtonStyled = styled.button<IProps>`
  max-width: 256px;

  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  transition: 0.5s;
  cursor: pointer;
  ${({ variant }) => typeButton[variant || "primary"]};
`;
