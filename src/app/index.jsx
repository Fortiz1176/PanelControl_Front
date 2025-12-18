// src/app/index.jsx o App.jsx
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { AuthGuard } from "./AuthGuard";
import { AuthRoutes } from "./PublicRoutes";
import { UsersRoutes } from "./PrivatesRoutes/Users";
import { routesApp } from "../routes";

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Cargando app...</div>}>
        <Routes>
          {/* Root */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />

          {/* Rutas públicas */}
          <Route element={<AuthGuard type="Public" />}>
            <Route path={`${routesApp.Public}/*`} element={<AuthRoutes />} />
          </Route>

          {/* Rutas privadas */}
          <Route element={<AuthGuard type="Private" />}>
            <Route path={`${routesApp.Private}/*`} element={<UsersRoutes />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
