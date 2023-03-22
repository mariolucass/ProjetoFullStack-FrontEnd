import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderStyled = styled(motion.header)`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--secondary-color);

  border-radius: 0px 0px 0.4em 0.4em;

  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  @media (min-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    position: absolute;
    height: 100%;
    width: 25%;
    left: 0px;
    border-radius: 0px;

    box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px,
      rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
  }
`;

export const DivMenu = styled(motion.div)`
  display: flex;
  width: 32px;
  height: 32px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(68deg)
      brightness(112%) contrast(101%);
  }
`;

export const DivAvatar = styled(DivMenu)`
  @media (min-width: 1440px) {
    width: 100%;
    height: 60%;
  }
`;

export const DivLinks = styled(motion.div)`
  display: flex;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
