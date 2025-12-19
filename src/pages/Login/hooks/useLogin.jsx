import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../services/authSlice";
import { setUsers } from "../../Users/services/usersSlice";
import { useGetUsersQuery } from "../../../api/userApi";

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const usersInStore = useSelector((state) => state.users.list);

  const shouldFetchUsers = usersInStore.length === 0;

  const { data, isLoading } = useGetUsersQuery(30, {
    skip: !shouldFetchUsers,
  });

  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    setError(null);

    const usersSource =
      usersInStore.length > 0 ? usersInStore : data?.results;

    if (!usersSource) {
      setError("Usuarios no disponibles");
      return;
    }

    const user = usersSource.find(
      (u) =>
        u.email === formData.email &&
        u.login.password === formData.password
    );

    if (!user) {
      setError("Credenciales inválidas");
      return;
    }

    //Guardar los usuarios solo una vez
    if (usersInStore.length === 0) {
      dispatch(setUsers(usersSource));
    }

    dispatch(loginSuccess(user));
    navigate("/app");
  };

  return {
    states: {
      data,
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
