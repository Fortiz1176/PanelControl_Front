// src/app/AuthGuard/index.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const AuthGuard = ({ type }) => {
  const isAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );

  // Rutas privadas
  if (type === "Private") {
    return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" replace />;
  }

  // Rutas públicas (login)
  if (type === "Public") {
    return isAuthenticated ? <Navigate to="/app/users" replace /> : <Outlet />;
  }

  return <Outlet />;
};
