import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContextProvider } from "./context/MainContext";
import { UserContextProvider } from "./context/UserContext";
ReactDOM.render(
  <MainContextProvider>
    <UserContextProvider>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </UserContextProvider>
  </MainContextProvider>,
  document.getElementById("root")
);
