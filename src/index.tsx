import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './fonts/poppins/Poppins-Regular.ttf'
import './fonts/poppins/Poppins-Medium.ttf'
import './fonts/poppins/Poppins-SemiBold.ttf'
import './fonts/poppins/Poppins-Bold.ttf'
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
