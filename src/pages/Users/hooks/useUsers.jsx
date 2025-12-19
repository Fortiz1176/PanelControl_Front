import React from "react";
import { useGetUsersQuery } from "../../../api/userApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../services/usersSlice";

const useUsers = () => {
  const users = useSelector((state) => state.users.list);
  const { data, isLoading } = useGetUsersQuery(30);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (uuid) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este usuario?"
    );

    if (!confirmDelete) return;

    dispatch(removeUser(uuid));
  };

  return {
    states: {
      users,
      data,
      isLoading,
      dispatch,
      navigate,
    },
    handles: {
      handleDelete,
    },
  };
};

export default useUsers;
