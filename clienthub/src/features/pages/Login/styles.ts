import { motion } from "framer-motion";
import styled from "styled-components";

export const MainStyled = styled(motion.main)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #296073,
    #2c6d83,
    #2f7a93,
    #3288a4,
    #3596b5
  );

  @media (min-width: 1440px) {
  }
`;

export const FormStyled = styled(motion.form)`
  width: 100%;
  position: absolute;
  bottom: 0px;

  display: flex;
  flex-direction: column;

  gap: 2.4rem;
  padding: 1rem;
  border-radius: 128px 0 0;
  padding-top: 4em;

  background-color: var(--white-color);

  @media (min-width: 1440px) {
    width: 800px;
    height: 100%;

    left: 0px;
    top: 0px;
    justify-content: center;
    border-radius: 0px;

    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
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

export const DivTitle = styled(motion.div)`
  width: 100%;

  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    color: var(--secondary-color);
  }
`;
