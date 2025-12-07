import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Auth";
import Loading from "../components/ui/Loading";

const Protected = () => {
  const { status, isAuthenticated } = useAuth();

  console.log("<Protected.jsx> [status]:", status);
  console.log("<Protected.jsx> [isAuthenticated]:", isAuthenticated);

  if (status === "loading") {
    return (
      <Loading />
      // <main className="min-h-screen flex items-center justify-center">
      //   <section className="animate-pulse text-slate-300 text-lg">
      //     <h1>Checking your session...</h1>
      //   </section>
      // </main>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};

export default Protected;
