import React, { useState } from "react";
import "./index.css";

const ModalMessage = ({ isOpen, user, onSend, onCancel }) => {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-x" onClick={onCancel}>
          &times;
        </button>

        <h2 className="modal-title">Enviar mensaje</h2>

        <p className="modal-subtitle">
          Envía un mensaje a <strong>{user.name}</strong>
        </p>

        <div className="user-info-card">
          <img src={user.avatar} alt={user.name} className="user-avatar" />
          <div className="user-details">
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
          </div>
        </div>

        <textarea
          className="modal-textarea"
          placeholder="Escribe tu mensaje aquí..."
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="modal-btn modal-btn-primary"
          onClick={handleSend}
        >
          ➤ Enviar
        </button>

        <button
          className="modal-btn modal-btn-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ModalMessage;
