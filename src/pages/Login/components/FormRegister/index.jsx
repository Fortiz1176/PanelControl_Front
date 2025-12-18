import React from "react";
import useLogin from "../../hooks/useLogin";

const FormRegister = () => {
  const {
    states: { showRegister },
    setters: { setShowRegister },
    handles: { onSubmit },
    useForm: { register, handleSubmit, errors },
  } = useLogin();

  return (
    <>
      <form class="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div class="form-group">
          <label for="email">Correo</label>
          <input
            type="text"
            id="email"
            placeholder="Ingresa tu correo"
            required
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <button type="submit" class="btn-primary">
          Registrarte
        </button>
      </form>
    </>
  );
};

export default FormRegister;
