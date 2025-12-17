import Swal from "sweetalert2";
import { toast , ToastContainer } from 'react-toastify';

const notify = (message) => {
  console.log("Mensaje:", message);
  toast.error(message);
};

// Función para mostrar mensajes de error con SweetAlert
const showErrorAlert = (title, message) => {
  console.log("Error Alert:", title, message);
  Swal.fire({
    icon: "error",
    title,
    text: message,
    showConfirmButton: false,
    timer: 2000,
  });
};

// Manejador de errores por código de estado
  const errorHandlers = {
    400: (store, action, data) => {
      const errors = data?.error;
      console.log("Errores recibidos ", errors);

      if (Array.isArray(errors)) {
        // Concatenar todos los mensajes en una cadena de texto
        const errorMessages = errors
          .map((err) => err.constrains?.[0] || "Error desconocido")
          .join("\n\n");

        // Mostrar todos los errores en un solo notify
        notify(errorMessages);
      } else {
        notify(data?.message || data?.error);
      }
    },
    404: (store, action, data) => {
      notify(data?.error || data?.message || "Error al realizar la acción");
    },
    405: (store, action, data) => {
      notify(data?.error || data?.message || "Error al realizar la acción");
    },
    409: (store, action, data) => {
      showErrorAlert(data?.error || data?.message || "Error de conflicto");
    },
    503: (store, action, data) => {
      notify(data?.error || data?.message || "Error del servidor");
    },
    500: (store, action, data) => {
      notify(data?.error || data?.message || "Error del servidor");
    },
    // Otros códigos de estado...
  };


export const statusMiddleware = (store) => (next) => (action) => {
  const status = action.meta?.baseQueryMeta?.response?.status;
  const data = action?.payload?.data;

  if (status && errorHandlers[status]) {
    errorHandlers[status](store, action, data);
  }

  return next(action);
};

  