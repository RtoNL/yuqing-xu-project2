import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GameProvider } from "./context/GameContext";  // 确保正确引入

ReactDOM.createRoot(document.getElementById("root")).render(
      <GameProvider>
        <App />
      </GameProvider>
);
