import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Albums } from "./components/Albums/Albums";
import AppHeader from "./components/AppLayout/AppHeader";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppHeader>
        <Routes>
          <Route path="/" element={<Albums />} />
        </Routes>
      </AppHeader>
    </BrowserRouter>
  );
};
