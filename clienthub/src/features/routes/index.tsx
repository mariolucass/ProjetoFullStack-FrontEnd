import { LoginPage } from "../pages/Login";
import { MainPage } from "../pages/MainPage";
import { RegisterPage } from "../pages/Register";
import { Navigate, Route, Routes } from "react-router-dom";

export const RoutesMain = () => (
  <Routes>
    <Route path="/dashboard" element={<MainPage />}></Route>
    <Route path="/login" element={<LoginPage />}></Route>
    <Route path="/register" element={<RegisterPage />}></Route>
    <Route path="/*" element={<Navigate to={"/register"} />}></Route>
  </Routes>
);
