import React from "react";
import { useContext } from "react";
import { UsersContext } from "../../context/UsersProvider";
import "./index.css";
import ConfirmDeleteModal from "../../../../components/ModalDelete";
import ModalMessage from "../../../../components/ModalMenssage";
const UsersCard = () => {
  const {
    useUsers: {
      states: {
        users,
        isLoading,
        navigate,
        showModal,
        selectedUser,
        showModalMessage,
        userToMessage,
        dispatch,
        contacts
      },
      handles: {
        openDeleteModal,
        closeModal,
        confirmDelete,
        closeModalMessage,
        confirmSend,
        openMessageModal,
        addContact,
      },
    },
  } = useContext(UsersContext);

  if (isLoading) {
    return <p className="loading">Cargando usuarios...</p>;
  }
  return (
    <>
      <section className="users-container">
        {users?.map((user, index) => (
          <article className="user-card" key={index}>
            <div className="user-header">
              <img
                src={user.picture.medium}
                alt={`${user.name.first} ${user.name.last}`}
              />

              <div className="user-info">
                <div className="header-card">
                  <h2>
                    {user.name.first} {user.name.last}
                  </h2>
                </div>
                <p className="email">{user.email}</p>

                <div className="tags">
                  <span>{user.dob.age}</span>
                  <span>{user.gender === "female" ? "Mujer" : "Hombre"}</span>
                </div>
              </div>
            </div>

            <div className="location">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="#999999"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                </g>
              </svg>{" "}
              {user.location.country}
            </div>

            <div className="actions">
              <button
                className="view"
                onClick={() => navigate(`${user?.login?.uuid}`)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                  >
                    <path d="M2.55 13.406c-.272-.373-.408-.56-.502-.92a2.5 2.5 0 0 1 0-.971c.094-.361.23-.548.502-.92C4.039 8.55 7.303 5 12 5s7.961 3.55 9.45 5.594c.272.373.408.56.502.92a2.5 2.5 0 0 1 0 .971c-.094.361-.23.548-.502.92C19.961 15.45 16.697 19 12 19s-7.961-3.55-9.45-5.594" />
                    <path d="M12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4" />
                  </g>
                </svg>{" "}
                Ver
              </button>
              <button
                className="message"
                onClick={() => openMessageModal(user)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#2661d7"
                    d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z"
                  />
                </svg>
                Mensaje
              </button>
              <button className="delete" onClick={() => openDeleteModal(user)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#e11d48"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
                  />
                </svg>
                Eliminar
              </button>
            </div>
          </article>
        ))}
      </section>
      <ConfirmDeleteModal
        isOpen={showModal}
        userName={
          selectedUser
            ? `${selectedUser.name.first} ${selectedUser.name.last}`
            : ""
        }
        onConfirm={confirmDelete}
        onCancel={closeModal}
      />
      {userToMessage && (
        <ModalMessage
          isOpen={showModalMessage}
          user={{
            name: `${userToMessage.name.first} ${userToMessage.name.last}`,
            email: userToMessage.email,
            avatar: userToMessage.picture.medium,
          }}
          onSend={confirmSend}
          onCancel={closeModalMessage}
        />
      )}
    </>
  );
};

export default UsersCard;
