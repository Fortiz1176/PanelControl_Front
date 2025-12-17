
import { Navigate, Outlet } from "react-router-dom";

/**
 * Protege rutas según tipo (pública o privada)
 */

export const AuthGuard = ({ children, type }) => {

  if(type === "Private"){
    if(!localStorage.getItem("token")){
      return <Navigate replace to="/"/>
    }

    return children;
  }

  if(localStorage.getItem("token")){
    return <Navigate replace to="/app/users"/>
  }
  return children;
};

const PrivateRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet/> : <Navigate to="/auth/login" />;
};

export default PrivateRoute;
