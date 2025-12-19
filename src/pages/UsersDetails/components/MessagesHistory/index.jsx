import React from "react";
import useUsersDetails from "../../hooks/useUsersDetails";
import "./index.css";

const MessagesHistory = () => {
  const {
    state: { messages },
  } = useUsersDetails();

  return (
    <section className="messages-section">
      <div className="messages-card">
        <div className="messages-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#0284c7" d="M20 2H2v20h2V4h16v12H6v2H4v2h2v-2h16V2z"/></svg>
          <h2 className="header-title">Historial de mensajes</h2>
        </div>

        <div className="messages-content">
          {messages && messages.length > 0 ? (
            <div className="messages-list">
              {messages.map((msg, index) => (
                <div key={index} className="message-bubble-item">
                  <svg className="bubble-icon" viewBox="0 0 24 24" fill="none" stroke="#0891b2" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span className="message-text">{msg.text || msg}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="empty-circle">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <p className="empty-text">No hay mensajes enviados aún</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MessagesHistory;