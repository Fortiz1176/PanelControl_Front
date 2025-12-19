import React from "react";
import "./index.css";
import useUsersDetails from "../../hooks/useUsersDetails";
import ModalMessage from "../../../../components/ModalMenssage";

const UserInfo = () => {
  const {
    state: { user, navigate, showModalMessage, userToMessage },
    handles: { openMessageModal, closeModalMessage, confirmSend },
  } = useUsersDetails();
  if (!user) return null;

  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const fullAddress = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country} ${user.location.postcode}`;

  return (
    <>
      <section className="user-detail">
        <button className="button" onClick={() => navigate("/app")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#000000"
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"
            />
            <path
              fill="#000000"
              d="m237.248 512l265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312z"
            />
          </svg>
          Volver al listado
        </button>
        <div className="user-header">
          <img src={user.picture.large} alt={fullName} className="avatar" />

          <div className="header-info">
            <h1>{fullName}</h1>
            <p className="email">{user.email}</p>

            <div className="badges">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#333333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M8 2v4m8-4v4" />
                    <rect width="18" height="18" x="3" y="4" rx="2" />
                    <path d="M3 10h18" />
                  </g>
                </svg>{" "}
                {user.dob.age} años
              </span>
              <span>{user.gender === "female" ? "Mujer" : "Hombre"}</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2" />
                    <path d="M11.499 21.988a10 10 0 0 0 1.001 0c4.613-5.766 4.613-14.21 0-19.976a10 10 0 0 0-1.001 0c-4.613 5.766-4.613 14.21 0 19.976" />
                    <path
                      stroke="#333333"
                      stroke-linecap="square"
                      stroke-width="2"
                      d="M3 12h18M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"
                    />
                    <path
                      stroke="#333333"
                      stroke-linecap="square"
                      stroke-width="2"
                      d="M11.499 21.988a10 10 0 0 0 1.001 0c4.613-5.766 4.613-14.21 0-19.976a10 10 0 0 0-1.001 0c-4.613 5.766-4.613 14.21 0 19.976Z"
                    />
                  </g>
                </svg>
                {user.location.country}
              </span>
            </div>

            <button className="primary-btn" onClick={() => openMessageModal(user)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  d="M3 9.436L21.63 2.37L14.565 21l-3.855-7.709zm7.709 3.855l4.497-4.497"
                />
              </svg>
              Enviar mensaje
            </button>
          </div>
        </div>

        <hr />

        <div className="info-grid">
          <div className="info-card">
            <div className="icon-label">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="#0891b2"
                    d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"
                  />
                </svg>
              </span>
              <span className="label">Email</span>
            </div>
            <p>{user.email}</p>
          </div>

          <div className="info-card">
            <div className="icon-label">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#0891b2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047c.42 2.783 1.66 7.83 5.283 11.453c3.805 3.805 9.286 5.456 12.302 6.113c1.165.253 2.198-.655 2.198-1.848v-3.584z"
                  />
                </svg>
              </span>
              <span className="label">Teléfono</span>
            </div>
            <p>{user.phone}</p>
          </div>

          <div className="info-card">
            <div className="icon-label">
              <span className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#0891b2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="10" r="3" />
                    <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
                  </g>
                </svg>
              </span>
              <span className="label">Dirección</span>
            </div>
            <p>{fullAddress}</p>
          </div>
        </div>
      </section>
      {userToMessage && (
        <ModalMessage
          isOpen={showModalMessage}
          user={{
            name: `${fullName}`,
            email: user.email,
            avatar: user.picture.large,
          }}
          onSend={confirmSend}
          onCancel={closeModalMessage}
        />
      )}
    </>
  );
};

export default UserInfo;
