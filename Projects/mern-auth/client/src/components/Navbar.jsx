import { Link } from "react-router-dom";
import { Atom, LogOut } from "lucide-react";
import { useAuth } from "../context/Auth";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();

  const location = useLocation();

  return (
    <nav className="bg-zinc-950 px-4 py-3 border-b-2 border-indigo-500 shadow-2xl flex items-center justify-between">
      {/* Logo */}
      <section>
        <Link
          to="/"
          className="flex items-center text-indigo-500 font-semibold text-2xl gap-2"
        >
          <Atom />
          <h1 className="hidden">MERN-Auth</h1>
        </Link>
      </section>
      {/* Desktop Navigation */}
      <section className="hidden 2xl:flex items-center gap-4">
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "text-indigo-500"
              : "text-zinc-300 hover:text-indigo-500"
          } text-lg font-medium transition-all`}
        >
          Home
        </Link>
        <Link
          to="/shop"
          className={`${
            location.pathname === "/shop"
              ? "text-indigo-500"
              : "text-zinc-300 hover:text-indigo-500"
          } text-lg font-medium transition-all`}
        >
          Shop
        </Link>
        <Link
          to="/about"
          className={`${
            location.pathname === "/about"
              ? "text-indigo-500"
              : "text-zinc-300 hover:text-indigo-500"
          } text-lg font-medium transition-all`}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={`${
            location.pathname === "/contact"
              ? "text-indigo-500"
              : "text-zinc-300 hover:text-indigo-500"
          } text-lg font-medium transition-all`}
        >
          Contact
        </Link>
      </section>
      {/* Authentication Controls */}
      <section>
        {isAuthenticated ? (
          <div className="flex items-center gap-4">
            <p className="text-lg text-indigo-500 font-semibold cursor-default">
              {user.email}
            </p>
            <Link to="/dashboard" className="text-lg text-indigo-500">
              Dashboard
            </Link>
            <button
              onClick={() => logout()}
              className="flex items-center gap-2 text-lg font-bold text-rose-500 px-2 py-1 rounded-md cursor-pointer"
            >
              Logout <LogOut />
            </button>
          </div>
        ) : (
          <Link
            to="/auth/login"
            className={`${
              location.pathname === "/auth/login"
                ? "bg-emerald-500 border-emerald-500"
                : "text-emerald-500 hover:text-zinc-950 hover:bg-emerald-500 hover:border-emerald-500"
            } text-lg font-bold border-2 px-2 py-1 rounded-md transition-all`}
          >
            Get Started
          </Link>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
