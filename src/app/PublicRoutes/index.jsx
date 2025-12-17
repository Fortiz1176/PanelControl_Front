// src/app/PublicRoutes.jsx
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { routesAuth } from '../../routes/index';

const LazyLogin = lazy(() => import("../../pages/Login/index.jsx"));

export const AuthRoutes = () => (
  <Suspense fallback={<div>Cargando login...</div>}>
    <Routes>
      <Route path={routesAuth.Login} element={<LazyLogin/>}/>
    </Routes>
  </Suspense>
);
