import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Albums } from "./components/Albums/Albums";
import { FavoritesAlbums } from "./components/FavoritesAlbums/FavoritesAlbums";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/favorites" element={<FavoritesAlbums />} />
      </Routes>
    </BrowserRouter>
  );
};
