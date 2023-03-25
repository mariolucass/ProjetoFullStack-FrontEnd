import { motion } from "framer-motion";
import styled from "styled-components";

export const DivStyled = styled(motion.div)`
  padding-top: 2em;
  background-color: var(--grey-color);
  display: flex;
  flex-direction: column;
  gap: 4em;

  align-items: center;

  @media (min-width: 1440px) {
    min-height: 94vh;
  }
`;

export const ListStyled = styled(motion.ul)`
  min-width: 100%;
  min-height: 100%;
  justify-content: top;

  justify-content: center;

  display: flex;
  gap: 2em;
  flex-wrap: wrap;

  li {
  }
`;

export const DivList = styled(motion.div)`
  width: 50%;
  min-height: 750px;
  display: flex;
  align-items: center;
  min-width: 90%;
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
`;
