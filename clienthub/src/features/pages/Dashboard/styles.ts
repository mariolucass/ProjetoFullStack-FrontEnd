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
  width: 100%;

  h1 {
    text-align: center;
  }
`;
