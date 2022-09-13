import { ListPage } from "./pages/ListPage";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProfilePage } from "./pages/ProfilePage";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ListPage />} />
      <Route path="/:id" element={<ProfilePage />} />
    </Routes>
  );
};
