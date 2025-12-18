// pages/Login/hooks/useLogin.jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../services/authSlice";
import { useGetUsersQuery } from "../../../api/userApi";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetUsersQuery(30);
  const [error, setError] = useState(null);
  console.log(data?.results);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    setError(null);

    if (!data?.results) {
      setError("Usuarios no disponibles");
      return;
    }

    const user = data.results.find(
      (u) =>
        u.email === formData.email &&
        u.login.password === formData.password
    );

    if (!user) {
      setError("Credenciales inválidas");
      return;
    }

    dispatch(loginSuccess(user));
    navigate("/app/users");
  };

  return {
    states: {
      isLoading,
      error,
    },
    handlers: {
      onSubmit,
    },
    form: {
      register,
      handleSubmit,
      errors,
    },
  };
};

export default useLogin;
