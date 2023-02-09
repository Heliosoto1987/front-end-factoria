import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/NavBar";
import { FavoriteScreen } from "../pages/FavoriteScreen";
import { HomeScreen } from "../pages/HomeScreen";
import { LoginScreen } from "../pages/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<HomeScreen />} />
        <Route path="login" element={<LoginScreen />} />
        <Route path="favorite" element={<FavoriteScreen />} />
        <Route path="register" element={<RegisterScreen />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
