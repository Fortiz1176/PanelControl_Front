// src/app/PrivatesRoutes/Users/index.jsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { routesUsers } from "../../../routes";

const LazyUsers = lazy(() => import("../../../pages/Users"));

export const UsersRoutes = () => {
  return (
    <Suspense fallback={<div>Cargando usuarios...</div>}>
      <Routes>
        <Route path={routesUsers.Users} element={<LazyUsers />} />
      </Routes>
    </Suspense>
  );
};
