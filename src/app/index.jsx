// src/app/App.jsx
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import { AuthGuard } from "./AuthGuard";
import { AuthRoutes } from "./PublicRoutes";
import { UsersRoutes } from "./PrivatesRoutes/Users";
/* import Layout from "@components/Layout"; */
import { routesApp,
    routesUsers } from "../routes";

function App() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Cargando app...</div>}>
        <Routes>
          {/* Redirección raíz */}
          <Route path="/" element={<Navigate to="/auth/login" replace />} />

          {/* Rutas públicas */}
          <Route path={`${routesApp.Public}/*`} element={<AuthGuard type="Public"><AuthRoutes /></AuthGuard>} />

          {/* Rutas privadas dentro del layout */}
          <Route path={`/${routesUsers.raiz}/*`} element={<UsersRoutes />} />
          {/* <Route path={`${routesApp.Private}/*`} element={<AuthGuard type="Private"><Layout /></AuthGuard>} >
            
          </Route> */}
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
