import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";

const Navigation = () => {
  const location = useLocation();
  
  // Check if current path matches
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return location.pathname.startsWith(path) && path !== '/';
  };

  return (
    <nav className="navbar">
      <h1>Battleship</h1>
      <ul>
        <li className={isActive('/') ? 'active' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={isActive('/game') ? 'active' : ''}>
          <Link to="/game/normal">Play</Link>
        </li>
        <li className={isActive('/rules') ? 'active' : ''}>
          <Link to="/rules">Rules</Link>
        </li>
        <li className={isActive('/highscores') ? 'active' : ''}>
          <Link to="/highscores">High Scores</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
