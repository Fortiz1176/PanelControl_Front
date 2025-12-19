import React from "react";
import { UsersProvider } from "./context/UsersProvider";
import UsersCard from "./componennts/UsersCard";
import "./index.css";
import Filters from "./componennts/Filters";

const Users = () => {
  return (
    <UsersProvider>
      <Filters />
      <UsersCard />
    </UsersProvider>
  );
};

export default Users;
