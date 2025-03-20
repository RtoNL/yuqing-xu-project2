import React from "react";
import { Link } from "react-router-dom";
import battleshipLogo from "../assets/logo.png";
import "../styles/home.css";

const Home = () => {
  return (
      <div className="home-container">
        <div className="logo-container">
          <img src={battleshipLogo} alt="Battleship Logo" className="game-logo" />
        </div>
        <h1>Welcome to Battleship!</h1>
        <p>Find and destroy your opponent's fleet before they destroy yours.</p>
        <div className="game-modes">
          <h2>Select Game Mode:</h2>
          <div className="buttons">
            <Link to="/game/normal" className="btn normal-mode">
              <h3>Normal Mode</h3>
              <p>Play against AI opponent</p>
            </Link>
            <Link to="/game/easy" className="btn free-mode">
              <h3>Free Play Mode</h3>
              <p>Practice without AI turns</p>
            </Link>
          </div>
        </div>
        <div className="nav-buttons">
          <Link to="/rules" className="btn">View Rules</Link>
          <Link to="/highscores" className="btn">View High Scores</Link>
        </div>
      </div>
  );
};

export default Home;
