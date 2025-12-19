import "./index.css";

const ConfirmDeleteModal = ({
  isOpen,
  userName,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">¿Eliminar usuario?</h2>

        <p className="modal-description">
          Estás a punto de eliminar a{" "}
          <strong>{userName}</strong>.
        </p>

        <p className="modal-warning">
          Esta acción no se puede deshacer y se eliminarán
          todos los datos asociados.
        </p>

        <button
          className="modal-btn modal-btn-danger"
          onClick={onConfirm}
        >
          Eliminar
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

export default ConfirmDeleteModal;
