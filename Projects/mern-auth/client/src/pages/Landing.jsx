import { Link } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Landing = () => {
  const { isAuthenticated } = useAuth();

  return (
    <main className="min-h-screen w-full bg-zinc-300">
      <section className="h-80 w-full bg-zinc-900 flex justify-center items-center">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold text-indigo-500">LANDING</h1>
          {isAuthenticated && (
            <Link
              to="/dashboard"
              className="underline text-zinc-500 hover:text-indigo-500 transition-all"
            >
              Go to Dashboard
            </Link>
          )}
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Landing;
