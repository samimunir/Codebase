// import { Link } from "react-router-dom";
// import { Atom, LogOut } from "lucide-react";
// import { useAuth } from "../context/Auth";
// import { useLocation } from "react-router-dom";

// const Navbar = () => {
//   const { user, isAuthenticated, logout } = useAuth();

//   const location = useLocation();

//   return (
//     <nav className="bg-zinc-950 px-4 py-3 border-b-2 border-indigo-500 shadow-2xl flex items-center justify-between">
//       {/* Logo */}
//       <section>
//         <Link
//           to="/"
//           className="flex items-center text-indigo-500 font-semibold text-2xl gap-2"
//         >
//           <Atom />
//           <h1 className="hidden md:inline-flex">MERN-AUTH</h1>
//         </Link>
//       </section>
//       {/* Desktop Navigation */}
//       <section className="hidden md:inline-flex items-center gap-4">
//         <Link
//           to="/"
//           className={`${
//             location.pathname === "/"
//               ? "text-indigo-500"
//               : "text-zinc-300 hover:text-indigo-500"
//           } text-lg font-medium transition-all`}
//         >
//           Home
//         </Link>
//         <Link
//           to="/shop"
//           className={`${
//             location.pathname === "/shop"
//               ? "text-indigo-500"
//               : "text-zinc-300 hover:text-indigo-500"
//           } text-lg font-medium transition-all`}
//         >
//           Shop
//         </Link>
//         <Link
//           to="/about"
//           className={`${
//             location.pathname === "/about"
//               ? "text-indigo-500"
//               : "text-zinc-300 hover:text-indigo-500"
//           } text-lg font-medium transition-all`}
//         >
//           About
//         </Link>
//         <Link
//           to="/contact"
//           className={`${
//             location.pathname === "/contact"
//               ? "text-indigo-500"
//               : "text-zinc-300 hover:text-indigo-500"
//           } text-lg font-medium transition-all`}
//         >
//           Contact
//         </Link>
//       </section>
//       {/* Authentication Controls */}
//       <section>
//         {isAuthenticated ? (
//           <div className="flex items-center gap-4">
//             <p className="text-lg text-indigo-500 font-semibold cursor-default">
//               {user.email}
//             </p>
//             <Link to="/dashboard" className="text-lg text-indigo-500">
//               Dashboard
//             </Link>
//             <button
//               onClick={() => logout()}
//               className="flex items-center gap-2 text-lg font-bold text-rose-500 px-2 py-1 rounded-md cursor-pointer"
//             >
//               Logout <LogOut />
//             </button>
//           </div>
//         ) : (
//           <Link
//             to="/auth/login"
//             className={`${
//               location.pathname === "/auth/login"
//                 ? "bg-emerald-500 border-emerald-500"
//                 : "text-emerald-500 hover:text-zinc-950 hover:bg-emerald-500 hover:border-emerald-500"
//             } text-lg font-bold border-2 px-2 py-1 rounded-md transition-all`}
//           >
//             Get Started
//           </Link>
//         )}
//       </section>
//     </nav>
//   );
// };

// export default Navbar;

/*
 ****************************************************************************************************
 */

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/#features" },
  { label: "Docs", to: "/#docs" },
  { label: "Dashboard", to: "/dashboard" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") setIsOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Optional: close menu when viewport becomes desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    function handler(e) {
      if (e.matches) setIsOpen(false);
    }

    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  function handleNavClick() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-slate-100">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 font-semibold">
            Z
          </span>
          <span className="font-semibold tracking-tight">Zephiron Auth</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-slate-200">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    [
                      "transition-colors",
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-300",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <Link
            to="/auth"
            className="rounded-full border border-cyan-500/60 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
          >
            Sign in
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-slate-100 hover:bg-slate-800/70 focus:outline-none focus:ring-2 focus:ring-cyan-500 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1 transition-transform bg-slate-100 ${
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 transition-opacity bg-slate-100 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 block h-0.5 w-5 translate-y-1 transition-transform bg-slate-100 ${
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-1"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm md:hidden"
          onClick={handleNavClick}
        >
          <div
            id="mobile-menu"
            className="ml-auto flex h-full w-72 max-w-full flex-col gap-6 border-l border-slate-800 bg-slate-950 px-5 py-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold tracking-tight text-slate-100">
                Menu
              </span>
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
              >
                <span className="sr-only">Close</span>
                <span className="block h-0.5 w-4 rotate-45 bg-slate-100" />
                <span className="block h-0.5 w-4 -rotate-45 bg-slate-100 -mt-0.5" />
              </button>
            </div>

            <ul className="flex flex-1 flex-col gap-3 text-sm font-medium text-slate-100">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={handleNavClick}
                    className={({ isActive }) =>
                      [
                        "block rounded-lg px-3 py-2 transition-colors",
                        isActive
                          ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40"
                          : "text-slate-200 hover:bg-slate-800",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <Link
              to="/auth"
              onClick={handleNavClick}
              className="mt-auto w-full rounded-full border border-cyan-500/60 bg-cyan-500/10 px-4 py-2 text-center text-sm font-semibold text-cyan-300 shadow-sm hover:bg-cyan-500/20 hover:border-cyan-400 transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
