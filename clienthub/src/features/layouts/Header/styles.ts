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
    height: 100%;
    width: 15%;

    flex-direction: column;
    justify-content: top;
    position: absolute;
    left: 0px;
    border-radius: 0px;
  }
`;

export const DivTabMenus = styled(motion.div)`
  width: 75%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2em;

  .TabMenu {
    min-width: 224px;
    min-height: 112px;

    background-color: var(--white-color);
    color: var(--black-color);
    border-radius: 1em;

    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 1s;
  }

  .active {
    border-left: 1em solid var(--tertiary-color);
    filter: brightness(0.8);
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
  span {
    display: none;
  }

  @media (min-width: 1440px) {
    width: 100%;
    height: 60%;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin-top: 80px;

    span {
      display: block;
      margin-top: 16px;
      font-size: 24px;
      font-weight: bold;
      text-align: center;
      color: var(--white-color);

      text-shadow: horizontal-offset vertical-offset blur color;

      text-shadow: 1px 4px 3px rgba(0, 0, 0, 0.3);
    }
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
