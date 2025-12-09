import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/Auth";
import Loading from "../components/ui/Loading";

const CustomerProtected = () => {
  const { status, isAuthenticated } = useAuth();

  console.log("<Protected.jsx> [status]:", status);
  console.log("<Protected.jsx> [isAuthenticated]:", isAuthenticated);

  if (status === "loading") {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default CustomerProtected;
