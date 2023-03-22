import * as styled from "./styles";
import * as components from "../../../components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import menu from "../../../assets/images/menu.svg";
import { Avatar, Tab, Tabs } from "@mui/material";
import { CgProfile, CgLogOut } from "react-icons/cg";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [modal, setModal] = useState(false);
  const [value, setValue] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const MenuBurger = () => (
    <styled.DivMenu onClick={() => setModal(modal!)}>
      <motion.img src={menu} alt="menu" />
    </styled.DivMenu>
  );

  const TabsMenu = () => (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      sx={{ width: 500 }}
    >
      <Tab icon={<CgProfile />} label="Profile" />
      <Tab icon={<CgLogOut />} label="Logout" />
    </Tabs>
  );

  return (
    <styled.HeaderStyled>
      <Avatar />
      {windowWidth < 1440 ? <MenuBurger /> : <TabsMenu />}
    </styled.HeaderStyled>
  );
};
