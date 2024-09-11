import { Outlet, Navigate, useLocation } from "react-router-dom";
import useCheckAuth from "../hooks/useCheckAuth";

const ProtectedRoute = () => {
  const { userId, loading } = useCheckAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }

  return userId ? <Outlet /> : <Navigate to='/signup' replace state={{ path: location.pathname }} />;
};

export default ProtectedRoute;
