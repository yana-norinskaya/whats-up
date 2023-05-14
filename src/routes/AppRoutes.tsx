import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { useAuthStore } from "../store/auth.store";
import { MainPage } from "../pages/MainPage";

const AppRoutes = () => {
  const { wid } = useAuthStore((state) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        {!wid && <Route path="*" element={<LoginPage />} />}
        {wid && <Route path="*" element={<MainPage />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
