import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import GameNormal from "./pages/GameNormal";
import GameEasy from "./pages/GameEasy";
import HighScores from "./pages/HighScores";
import Navigation from "./components/Navigation";

const AppRoutes = () => {
  return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/highscores" element={<HighScores />} />
          <Route path="/game/normal" element={<GameNormal />} />
          <Route path="/game/easy" element={<GameEasy />} />
        </Routes>
      </Router>
  );
};

export default AppRoutes;
