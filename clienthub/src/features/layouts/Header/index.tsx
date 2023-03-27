import * as styled from "./styles";
import * as components from "../../../components";
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { Avatar, Tab } from "@mui/material";
import { CgProfile, CgLogOut } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { UseAuthContext } from "../../../context";

import menuIcon from "../../../assets/images/menu.svg";
import { useNavigate } from "react-router-dom";
import {
  animateHover,
  animateShowingLeave,
  animateTap,
} from "../../libs/Framer/animations";
import { transitionAccordion } from "../../libs/Framer/transitions";

export const Header = () => {
  const navigate = useNavigate();
  const { setDashboard, dashboard, customer } = UseAuthContext();

  const [windowWidth, setWindowWidth] = useState(0);
  const [confirmModal, setConfirmModal] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleDashboardPage = () => setDashboard(true);
  const handleProfilePage = () => setDashboard(false);

  const handleMenu = () => setMenu((menu) => !menu);
  const handleModalLogout = () => setConfirmModal(true);

  const handleLogout = () => {
    localStorage.removeItem("tokenContactsApp");

    navigate("/login");
  };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MenuBurger = () => (
    <styled.DivMenu onClick={handleMenu}>
      <motion.img src={menuIcon} alt="menu" />
    </styled.DivMenu>
  );

  const TabsMenu = () => (
    <styled.DivTabMenus>
      <motion.div whileHover={animateHover} whileTap={animateTap}>
        <Tab
          label={"Dashboard"}
          icon={<MdDashboard />}
          onClick={handleDashboardPage}
          className={dashboard ? "TabMenu active" : "TabMenu"}
        />
      </motion.div>

      <motion.div whileHover={animateHover} whileTap={animateTap}>
        <Tab
          label={"Profile"}
          icon={<CgProfile />}
          onClick={handleProfilePage}
          className={dashboard ? "TabMenu" : "TabMenu active"}
        />
      </motion.div>

      <motion.div whileHover={animateHover} whileTap={animateTap}>
        <Tab
          label="Logout"
          icon={<CgLogOut />}
          className="TabMenu"
          onClick={handleModalLogout}
        />
      </motion.div>
    </styled.DivTabMenus>
  );

  return (
    <styled.HeaderStyled animate={animateShowingLeave}>
      {windowWidth > 1440 ? (
        <>
          <styled.DivAvatar>
            <Avatar sx={{ width: 216, height: 216 }} />
            <span>Olá, {customer.name}</span>
          </styled.DivAvatar>

          <TabsMenu />
        </>
      ) : (
        <>
          <Avatar />

          <MenuBurger />
        </>
      )}

      <components.DialogComponent
        state={confirmModal}
        setState={setConfirmModal}
        handleFunction={handleLogout}
        text={"Deseja realmente fazer o logout ?"}
      />
    </styled.HeaderStyled>
  );
};
