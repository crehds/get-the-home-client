import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/auth-context";
import { BrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import { global, reset } from "./styles/global";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Global styles={reset} />
        <Global styles={global} />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
