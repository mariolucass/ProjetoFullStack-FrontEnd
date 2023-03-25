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
    <styled.DivTabMenus>
      <Tab icon={<CgProfile />} label="Profile" className="TabMenu" />
      <Tab icon={<CgLogOut />} label="Logout" className="TabMenu" />
    </styled.DivTabMenus>
  );

  return (
    <styled.HeaderStyled>
      {windowWidth < 1440 ? (
        <Avatar />
      ) : (
        <Avatar sx={{ width: 216, height: 216 }} />
      )}

      {windowWidth < 1440 ? <MenuBurger /> : <TabsMenu />}
    </styled.HeaderStyled>
  );
};
