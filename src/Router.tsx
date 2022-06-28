import { ListPage } from "./pages/ListPage";
import React from "react";
import { Routes, Route } from "react-router-dom";

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route index element={<ListPage />} />
    </Routes>
  );
};
