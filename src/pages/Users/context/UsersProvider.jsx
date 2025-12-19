import { createContext } from "react";
import useUsers from "../hooks/useUsers";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
  const usersState = useUsers();

  const contextValue = {
    useUsers: usersState,
  };

  return (
    <UsersContext.Provider value={contextValue}>
      {children}
    </UsersContext.Provider>
  );
};
