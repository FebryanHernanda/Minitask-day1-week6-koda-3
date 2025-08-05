import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ShoppingApp from "./pages/ShoppingApp/ShoppingApp";
import Home from "./pages/home";
import AuthLogin from "./pages/AuthLogin/AuthLogin";
import TodoApp from "./pages/ToDoList/TodoApp";

function Router() {
  return (
    <BrowserRouter>
      <main className="w-full mx-auto max-w-screen-2xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-app" element={<ShoppingApp />} />
          <Route path="/auth/login" element={<AuthLogin />} />
          <Route path="/todo-app" element={<TodoApp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default Router;
