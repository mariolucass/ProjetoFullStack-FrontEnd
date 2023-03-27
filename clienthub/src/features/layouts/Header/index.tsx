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

export const Header = () => {
  const navigate = useNavigate();
  const { setDashboard, dashboard } = UseAuthContext();

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
      <motion.div
        whileHover={{
          scale: 0.97,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Tab
          className={dashboard ? "TabMenu active" : "TabMenu"}
          onClick={handleDashboardPage}
          icon={<MdDashboard />}
          label={"Dashboard"}
        />
      </motion.div>

      <motion.div
        whileHover={{
          scale: 0.97,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <Tab
          className={dashboard ? "TabMenu" : "TabMenu active"}
          onClick={handleProfilePage}
          icon={<CgProfile />}
          label={"Profile"}
        />
      </motion.div>

      <motion.div
        whileHover={{
          scale: 0.97,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
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
    <styled.HeaderStyled>
      {windowWidth < 1440 ? (
        <>
          <styled.DivAvatar>
            <Avatar />
            <span>Mário Lucas</span>
          </styled.DivAvatar>

          <MenuBurger />
        </>
      ) : (
        <>
          <styled.DivAvatar>
            <Avatar sx={{ width: 216, height: 216 }} />
            <span>Mário Lucas</span>
          </styled.DivAvatar>

          <TabsMenu />
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
