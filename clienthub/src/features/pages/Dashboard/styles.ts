import { motion } from "framer-motion";
import styled from "styled-components";

export const MainStyled = styled(motion.main)`
  width: 100%;

  .css-heg063-MuiTabs-flexContainer {
    justify-content: space-around;
    width: 100%;
  }

  .css-yh080k-MuiButtonBase-root-MuiTab-root {
    width: 25%;
  }

  @media (min-width: 1440px) {
    width: 80%;
    height: 70%;
    position: absolute;
    margin-left: 25%;
    left: 0px;
  }
`;

export const DivStyled = styled(motion.div)`
  width: 93.5%;

  h1 {
    text-align: center;
    color: var(--secondary-color);

    text-shadow: horizontal-offset vertical-offset blur color;

    text-shadow: 1px 4px 3px rgba(0, 0, 0, 0.3);
  }
`;

export const DivContainer = styled(motion.div)``;
