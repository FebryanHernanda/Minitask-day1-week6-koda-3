import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Routes.jsx";
import AuthLoginProvider from "./context/AuthLogin/AuthLoginProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthLoginProvider>
      <Router />
    </AuthLoginProvider>
  </StrictMode>
);
