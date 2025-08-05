import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Routes.jsx";
import AuthLoginProvider from "./context/AuthLogin/AuthLoginProvider.jsx";
import TodoListProvider from "./context/TodoList/TodoListProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthLoginProvider>
      <TodoListProvider>
        <Router />
      </TodoListProvider>
    </AuthLoginProvider>
  </StrictMode>
);
