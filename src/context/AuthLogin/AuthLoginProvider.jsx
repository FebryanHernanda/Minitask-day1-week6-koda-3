import { useState } from "react";
import { AuthLoginContext } from "./AuthLoginContext";

const AuthLoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const userData = { username: "Fathi Izzati", isLoggedIn: isLogin };

  return (
    <AuthLoginContext.Provider value={{ userData, setIsLogin }}>
      {children}
    </AuthLoginContext.Provider>
  );
};

export default AuthLoginProvider;
