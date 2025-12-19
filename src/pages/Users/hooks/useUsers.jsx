import React from "react";
import { useGetUsersQuery } from "../../../api/userApi";
import { useSelector } from "react-redux";

const useUsers = () => {
  const users = useSelector((state) => state.users.list);
  const { data, isLoading } = useGetUsersQuery(30);

  return {
    states: {
      users,
      data,
      isLoading,
    },
  };
};

export default useUsers;
