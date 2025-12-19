import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addMessageToUser } from "../../Users/services/usersSlice";

const useUsersDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.list);

  const user = users.find((u) => u.login.uuid === id);

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

  return {
    state: {
      user,
      messages: user?.messages || [],
      navigate,
      showModalMessage,
      userToMessage
    },
    handles: {
      openMessageModal,
      closeModalMessage,
      confirmSend
    }
  };
};

export default useUsersDetails;
