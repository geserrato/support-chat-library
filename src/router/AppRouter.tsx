import { Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { sleep } from "@/lib/sleep";

import { AuthLayout } from "@/auth/layout/AuthLayout";
import { LoginPage } from "@/auth/pages/LoginPage";
import { RegisterPage } from "@/auth/pages/RegitserPage";


const ChatLayout = lazy(async () => {
  await sleep(1000); // Simula una carga lenta  
  return import("@/chat/layout/ChatLayout");
});

const ChatPage = lazy(() => import("@/chat/pages/ChatPage"));
const NoChatSelectedPage = lazy(() => import("@/chat/pages/NoChatSelectedPage"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route path="/chat" element={
          <Suspense fallback={<div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>}>
            <ChatLayout />
          </Suspense>
        }>
          <Route path="/chat/:clientId" element={<ChatPage />} />
          <Route index element={<NoChatSelectedPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        {/* Cuando colocamos * estamos indicando que cuando una ruta no se encuentra va ir a un comodin */}
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter >
  );
};
