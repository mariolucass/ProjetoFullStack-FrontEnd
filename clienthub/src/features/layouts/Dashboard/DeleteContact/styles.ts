import { motion } from "framer-motion";
import styled from "styled-components";

export const DivStyled = styled(motion.div)`
  background-color: var(--grey-color);

  padding-top: 2em;
  gap: 4em;

  display: flex;
  flex-direction: column;

  align-items: center;

  @media (min-width: 1440px) {
    min-height: 94vh;
  }
`;

export const DivContainer = styled(motion.div)`
  width: 50%;

  overflow-y: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2.4rem;
  padding: 1rem;
  border-radius: 1em;
  padding-top: 4em;

  background-color: var(--white-color);

  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;
