import { Navigate, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/MainPage";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export const RoutesMain = () => (
  <Routes>
    <Route path="/dashboard" element={<MainPage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
    <Route path="/*" element={<Navigate to={"/register"} />}></Route>
  </Routes>
);
