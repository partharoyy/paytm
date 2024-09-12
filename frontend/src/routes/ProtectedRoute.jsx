import { Outlet, Navigate } from "react-router-dom";
import useCheckAuth from "../hooks/useCheckAuth";

const ProtectedRoute = () => {
  const { userId, loading } = useCheckAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return userId ? <Outlet /> : <Navigate to='/signin' />;
};

export default ProtectedRoute;
