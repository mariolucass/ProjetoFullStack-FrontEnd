import styled from "styled-components";

export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const LabelStyled = styled.label`
  width: 85%;
  max-width: 384px;

  font-weight: bold;
  font-size: 20px;
  color: var(--tertiary-color);
`;

export const InputStyled = styled.input`
  width: 85%;
  max-width: 384px;
  height: 3.5em;

  position: relative;
  padding: 0 1rem;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1.2px solid var(--tertiary-color);

  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  :hover {
    border: 1.2px solid var(--tertiary-color);
  }
`;
