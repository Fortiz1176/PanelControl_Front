import { createContext } from "react";
import useUsersDetails from "../hooks/useUsersDetails";

export const UsersDetailsContext = createContext();

export const UsersDetailsProvider = ({ children }) => {
  const usersDetailsState = useUsersDetails();

  const contextValue = {
    useUsersDetails: usersDetailsState,
  };
  return (
    <UsersDetailsContext.Provider value={contextValue}>
      {children}
    </UsersDetailsContext.Provider>
  );
};
