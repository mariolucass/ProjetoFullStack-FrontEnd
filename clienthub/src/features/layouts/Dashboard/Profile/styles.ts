import { motion } from "framer-motion";
import styled from "styled-components";

export const DivStyled = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: var(--grey-color);
  display: flex;
  flex-direction: column;
  gap: 1em;

  align-items: center;
  padding-top: 2em;

  h1 {
    text-align: center;
    color: var(--secondary-color);
  }

  @media (min-width: 1440px) {
    width: 100%;
    margin-top: 59px;
  }
`;

export const DivForm = styled(motion.div)`
  width: 50%;

  form {
    min-width: 75%;
    overflow-y: auto;
    bottom: 0px;

    display: flex;
    flex-direction: column;

    gap: 2.4rem;
    padding: 1rem;
    border-radius: 0.5em;
    padding-top: 4em;

    background-color: var(--white-color);
    box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  }
`;

export const DivButtons = styled(motion.main)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    a {
      color: var(--secondary-color);
    }
  }
`;
