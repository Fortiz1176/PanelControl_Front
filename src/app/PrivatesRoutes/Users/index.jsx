import { Routes, Route } from "react-router-dom";
import { routesUsers } from "../../../routes";
/* import NotFound from "@components/NotFound"; */
import { Suspense, lazy } from "react";
/* import { useSelector } from "react-redux";
import { currentUser } from "../../../pages/Login/services/authSlice"; */

const LazyUsers = lazy(() => import("../../../pages/Users"));
/* const LazyUsersDetails = lazy(() => import("@pages/UsersDetails")); */

export const UsersRoutes = () => {
  /* const { privilege } = useSelector(currentUser); */

  /* if (!routesUsers.Privilegios.includes(privilege)) {
    return <div>No tienes accesos</div>;
  } */
  return (
    <Suspense fallback={<div> Cargando ...</div>}>
      <Routes>
        <Route path={routesUsers.General} element={<LazyUsers />} />
        {/* <Route
          path={routesUsers.Details}
          element={<LazyUsersDetails />}
        /> */}
      </Routes>
    </Suspense>
  );
};
