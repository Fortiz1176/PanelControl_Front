import React from "react";
import { UsersDetailsProvider } from "./context/usersDetailsProvider";
import UserInfo from "./components/UserInfo";
import MessagesHistory from "./components/MessagesHistory";
import "./index.css";

const UsersDetails = () => {
  console.log("Hola");
  return (
    <UsersDetailsProvider>
      <div className="content-user">
        <UserInfo />
        <MessagesHistory />
      </div>
    </UsersDetailsProvider>
  );
};

export default UsersDetails;
