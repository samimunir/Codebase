import { useTheme } from "../contexts/Theme";
import logo from "../assets/ttc_logo.jpg";
import {
  Activity,
  Atom,
  Home,
  Info,
  Menu,
  Package,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Theme from "./ui/Theme";
import Cart from "./ui/Cart";

const navBaseItems = [
  {
    id: 0,
    label: "Home",
    href: "/",
    icon: <Home className="w-6 h-6" />,
  },
  {
    id: 1,
    label: "Products",
    href: "/products",
    icon: <Package className="w-6 h-6" />,
  },
  {
    id: 2,
    label: "Services",
    href: "/services",
    icon: <Wrench className="w-6 h-6" />,
  },
  {
    id: 3,
    label: "Bookings",
    href: "/available-bookings",
    icon: <Activity className="w-6 h-6" />,
  },
  {
    id: 4,
    label: "About",
    href: "/about",
    icon: <Info className="w-6 h-6" />,
  },
  {
    id: 5,
    label: "Testimonials",
    href: "/testimonials",
    icon: <Users className="w-6 h-6" />,
  },
];

const navAuthItems = [
  {
    id: 6,
    label: "Dashboard",
    href: "/dashboard",
    icon: <Atom className="w-6 h-6" />,
  },
];

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const accentTextColor = isDark ? "text-rose-500" : "text-sky-500";
  const activeLinkBg = isDark
    ? "bg-zinc-800/50 shadow-2xl"
    : "bg-zinc-200/50 shadow-2xl";

  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const isAuthenticated = true;

  return (
    <nav
      className={`w-full px-8 py-4 sticky top-0 z-50 backdrop-blur-xs transition-all duration-1000 ${
        isDark ? "bg-zinc-950/90 text-zinc-50" : "bg-zinc-50/90 text-zinc-950"
      }`}
    >
      <main className="flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src={logo}
            alt="Logo"
            className={`w-10 rounded-full border-3 transition-all duration-1000 ${
              isDark ? "border-rose-500" : "border-sky-500"
            }`}
          />
          <h1 className="text-2xl font-bold uppercase">
            Top-Tier{" "}
            <span
              className={`transition-all duration-1000 ${
                isDark ? "text-rose-500" : "text-sky-500"
              }`}
            >
              Customs
            </span>
          </h1>
        </div>
        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-4">
          {navBaseItems.map((navItem) => (
            <div
              onClick={() => navigate(navItem.href)}
              className={`${
                location.pathname === navItem.href && accentTextColor
              } flex items-center gap-2 font-semibold hover:${accentTextColor} transition-all duration-1000 cursor-default`}
            >
              <p>{navItem.icon}</p>
              <p>{navItem.label}</p>
            </div>
          ))}
          {isAuthenticated &&
            navAuthItems.map((navItem) => (
              <div
                key={navItem.id}
                onClick={() => navigate(navItem.href)}
                className={`${
                  location.pathname === navItem.href && accentTextColor
                } flex items-center gap-2 font-semibold hover:${accentTextColor} transition-all duration-1000 cursor-default`}
              >
                <p>{navItem.icon}</p>
                <p>{navItem.label}</p>
              </div>
            ))}
        </div>
        {/* Right section */}
        <div className="hidden lg:flex items-center gap-2">
          {isAuthenticated && <Cart />}
          <Theme />
        </div>
        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <Cart />
          <Theme />
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="p-2"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </main>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="flex flex-col gap-2 mt-4 lg:hidden">
          {[...navBaseItems, ...(isAuthenticated ? navAuthItems : [])].map(
            (navItem) => (
              <div
                key={navItem.id}
                onClick={() => {
                  setMobileOpen(false);
                  navigate(navItem.href);
                }}
                className={`rounded-md p-2 flex items-center gap-2 font-semibold transition-all duration-1000 ${
                  location.pathname === navItem.href && accentTextColor
                } ${location.pathname === navItem.href && activeLinkBg} ${
                  isDark ? "hover:text-rose-500" : "hover:text-sky-500"
                }`}
              >
                <p>{navItem.icon}</p>
                <p>{navItem.label}</p>
              </div>
            )
          )}
          {isAuthenticated && (
            <div className="flex-col">
              <p className="font-semibold">Sami M.</p>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
