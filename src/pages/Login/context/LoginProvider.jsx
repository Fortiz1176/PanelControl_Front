import { createContext } from "react";
import useLogin from "../hooks/useLogin";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const loginState = useLogin();

  const contextValue = {
    useLogin: loginState,
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};
