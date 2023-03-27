import styled, { css } from "styled-components";

interface IProps {
  variant?: "primary" | "secondary" | "tertiary";
}

const typeButton = {
  primary: css`
    width: 50%;
    max-width: 200px;
    height: 60px;
    font-size: 20px;
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
    width: 32%;
    height: 60px;
    font-size: 20px;

    background-color: var(--tertiary-color);
    color: var(--white-color);
    border: 2px solid transparent;

    :hover {
      transition: 0.5s;
      filter: grayscale(35%);
    }
  `,

  tertiary: css`
    width: 32%;
    height: 60px;
    font-size: 20px;

    background-color: transparent;
    color: var(--black-color);
    border: 2px solid var(--black-color);

    :hover {
      transition: 0.5s;
      filter: grayscale(35%);
    }
  `,
};

export const ButtonStyled = styled.button<IProps>`
  max-width: 256px;

  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  transition: 0.5s;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  cursor: pointer;
  ${({ variant }) => typeButton[variant || "primary"]};
`;
