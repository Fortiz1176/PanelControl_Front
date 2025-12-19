import { useState } from "react";
import { useGetUsersQuery } from "../../../api/userApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser, addMessageToUser  } from "../services/usersSlice";

const useUsers = () => {
  const users = useSelector((state) => state.users.list);
  const { data, isLoading } = useGetUsersQuery(30);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [showModalMessage, setShowModalMessage] = useState(false);
  const [userToMessage, setUserToMessage] = useState(null);

  const openMessageModal = (user) => {
    setUserToMessage(user);
    setShowModalMessage(true);
  };

  const closeModalMessage = () => {
    setShowModalMessage(false);
    setUserToMessage(null);
  };

  const confirmSend = (text) => {
    dispatch(
      addMessageToUser({
        userId: userToMessage.login.uuid,
        message: {
          id: crypto.randomUUID(),
          text,
          date: new Date().toISOString(),
          from: "admin",
        },
      })
    );

    closeModalMessage();
  };

  const openDeleteModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setShowModal(false);
  };

  const confirmDelete = () => {
    dispatch(removeUser(selectedUser.login.uuid));
    closeModal();
  };

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
      showModal,
      selectedUser,
      showModalMessage,
      userToMessage
    },
    setters: {
      setShowModal,
      setSelectedUser,
    },
    handles: {
      handleDelete,
      openDeleteModal,
      closeModal,
      confirmDelete,
      openMessageModal,
      closeModalMessage,
      confirmSend
    },
  };
};

export default useUsers;
