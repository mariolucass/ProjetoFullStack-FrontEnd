import { motion } from "framer-motion";
import styled from "styled-components";

export const DivStyled = styled(motion.div)`
  padding-top: 2em;
  background-color: var(--grey-color);

  @media screen {
    min-height: 95vh;
  }
`;

export const ListStyled = styled(motion.ul)`
  display: flex;
  justify-content: space-around;
  background-color: var(--secondary-color);
`;
