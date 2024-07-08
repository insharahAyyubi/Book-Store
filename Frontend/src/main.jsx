import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="dark:bg-slate-800 dark:text-white">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);
