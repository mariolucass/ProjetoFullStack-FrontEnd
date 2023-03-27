import { motion } from "framer-motion";
import styled from "styled-components";

export const MainStyled = styled(motion.main)`
  width: 100%;

  .css-heg063-MuiTabs-flexContainer {
    background-color: var(--white-color);
    justify-content: space-evenly;
    width: 100%;
  }

  .css-yh080k-MuiButtonBase-root-MuiTab-root {
    width: 25%;
  }

  @media (min-width: 1440px) {
    width: 85%;
    height: 70%;

    position: absolute;

    margin-left: 15%;
    left: 0px;
  }
`;

export const DivStyled = styled(motion.div)`
  width: 100%;

  h1 {
    text-align: center;
    color: var(--secondary-color);
  }
`;

export const DivContainer = styled(motion.div)``;
