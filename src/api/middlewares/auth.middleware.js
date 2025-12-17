import Swal from "sweetalert2";
/* import { logout } from "../../pages/Login/services/authSlice"; */


const showErrorAlert = (title, message) => {
  Swal.fire({
    icon: "error",
    title,
    text: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

const errorHandlers = {
  401: (store, action, data) => {
    console.log("data del middleware", data)
    localStorage.clear();
    //notify(data?.error || data?.message || "Error de conflicto")
    showErrorAlert(
      "Oops...",
      data?.error || data?.message || "Sesión Expirada"
    );
    /* store.dispatch(logout()); */
    window.location.href = "/#/auth/login";
    return action;
  },
};

export const authMiddleware = (store) => (next) => (action) => {
  const status = action.meta?.baseQueryMeta?.response?.status;
  const data = action?.payload?.data;

  if (status && errorHandlers[status]) {
    return errorHandlers[status](store, action, data);
  }

  return next(action);
};
