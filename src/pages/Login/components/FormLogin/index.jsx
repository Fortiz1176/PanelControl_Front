import { useContext } from "react";
import useLogin from "../../hooks/useLogin";
import { LoginContext } from "../../context/LoginProvider";
import ButtonCopy from "../../../../components/buttonCopy";

const FormLogin = () => {
  const {
    states: { data, error, isLoading },
    handlers: { onSubmit },
    form: { register, handleSubmit, errors },
  } = useLogin();

  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label>Email</label>
        <input
          {...register("email", { required: true })}
          type="email"
          placeholder="Ingresa tu email"
        />
        {errors.email && <span>Email requerido</span>}
      </div>

      <div className="form-group">
        <label>Contraseña</label>
        <input
          {...register("password", { required: true })}
          type="password"
          placeholder="Ingresa tu contraseña"
        />
        {errors.password && <span>Contraseña requerida</span>}
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Validando..." : "Iniciar sesión"}
      </button>

      {error && <p className="error">{error}</p>}

      <div className="demo">
        <p>Demo:</p>
        <p>
          <strong>Email:</strong>
          <ButtonCopy value={data?.results?.[0]?.email} placement="top">
            {data?.results?.[0]?.email}
          </ButtonCopy>
        </p>
        <p>
          <strong>Password:</strong>{" "}
          <ButtonCopy value={data?.results?.[0]?.login?.password} placement="top">{data?.results?.[0]?.login?.password}</ButtonCopy>
        </p>
      </div>
    </form>
  );
};

export default FormLogin;
