import { AuthLayout } from "@/auth/layout/AuthLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}></Route>
        <Route path="/" element={<Navigate to="/auth" />} />

        {/* Cuando colocamos * estamos indicando que cuando una ruta no se encuentra va ir a un comodin */}
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
