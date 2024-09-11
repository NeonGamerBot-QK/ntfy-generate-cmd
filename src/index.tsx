import "@neongamerbot/credits";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./catppuccin.css";
import "@catppuccin/highlightjs/css/catppuccin-mocha.css";
import "highlight.js/styles/github.css";

import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
