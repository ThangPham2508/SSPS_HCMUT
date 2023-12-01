import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = () => {
  const { role } = useSelector((state) => state.auth.userData);
  return role === "admin" ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
