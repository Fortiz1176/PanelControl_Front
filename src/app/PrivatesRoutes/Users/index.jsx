// src/app/PrivatesRoutes/Users/index.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { routesUsers } from "../../../routes";

const LazyUsers = lazy(() => import("../../../pages/Users"));
const LazyUsersDetalles = lazy(() => import("../../../pages/UsersDetails"))

export const UsersRoutes = () => {
  return (
    <Suspense fallback={<div>Cargando usuarios...</div>}>
      <Routes>
        <Route path={routesUsers.General} element={<LazyUsers />} />
        <Route path={routesUsers.Detalles} element={<LazyUsersDetalles />} />
      </Routes>
    </Suspense>
  );
};
