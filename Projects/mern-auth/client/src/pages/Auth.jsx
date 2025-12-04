import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Lock, LogIn, Mail } from "lucide-react";
import { useAuth } from "../context/Auth";

const Auth = () => {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const { login } = useAuth();

  useEffect(() => {
    if (location.pathname === "/auth/login") {
      setMode("login");
    } else {
      setMode("signup");
    }
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.namme]: e.target.value }));
  };

  const toggle_auth_mode = () => {
    if (mode === "login") {
      setMode("signup");
    } else {
      setMode("login");
    }
  };

  const handleSubmit = async (e) => {
    if (mode === "login") {
      try {
        e.preventDefault();

        setLoading(true);
        setError("");

        await login(form.email, form.password);
        navigate("/dashboard");
      } catch (e) {
        setError(
          e.response?.data?.message || "Login failed. Please try again."
        );
      } finally {
        setLoading(false);
      }
    } else {
      alert("Not yet implemented!");
    }
  };

  return (
    <main className="min-h-screen w-full bg-zinc-300">
      <section className="p-4 w-full bg-zinc-900 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="tracking-tight">
            <h1 className="text-2xl font-semibold text-indigo-500 flex items-center gap-2">
              Welcome back, please signin <LogIn />
            </h1>
            <h2 className="text-md text-center font-medium text-indigo-800">
              Toggle below to {mode === "login" ? "signup" : "login"}!
            </h2>
          </div>
        </div>
        {/* Auth Mode Toggle Pill */}
        <div
          className={`mt-4 mx-auto w-[100px] h-5 border-2 border-indigo-500 rounded-full flex items-center ${
            mode === "login" ? "justify-start" : "justify-end"
          } transition-all`}
        >
          <div
            onClick={() => toggle_auth_mode()}
            className="w-[50px] h-5 border-2 border-indigo-500 rounded-full bg-indigo-500"
          ></div>
        </div>
        {/* Auth Form */}
        {mode === "login" ? (
          <form
            onSubmit={handleSubmit}
            className="mt-4 p-4 bg-zinc-395000 rounded-xl shadow-2xl space-y-4 border-2 border-zinc-900"
          >
            <div className="flex items-center gap-2 text-indigo-500">
              <Mail />
              <input
                type="email"
                placeholder="Your email"
                id="email"
                name="email"
                required
                onChange={handleChange}
                value={form.email}
                disabled={loading}
                className="border-2 border-indigo-500 rounded-xl pl-2 outline-none"
              />
            </div>
            <div className="flex items-center gap-2 text-indigo-500">
              <Lock />
              <input
                type="password"
                placeholder="Your password"
                id="password"
                name="password"
                required
                onChange={handleChange}
                value={form.password}
                disabled={loading}
                className="border-2 border-indigo-500 rounded-xl pl-2 outline-none"
              />
            </div>
            {error && (
              <p className="text-rose-500 font-bold text-sm">{error}</p>
            )}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-[100px] text-center flex items-center justify-center gap-1 border-2 border-indigo-500 text-indigo-500 font-bold rounded-xl px-2 py-1 hover:bg-indigo-500 hover:text-zinc-300 transition-all"
              >
                Login <LogIn />
              </button>
            </div>
          </form>
        ) : (
          <section>
            <div>
              <input type="email" placeholder="Your email" />
            </div>
            <div>
              <input type="password" placeholder="Your password" />
            </div>
            <div>
              <input type="text" placeholder="First name" />
            </div>
            <div>
              <input type="text" placeholder="Last name" />
            </div>
            <div>
              <button>Signup</button>
            </div>
          </section>
        )}
      </section>
      <section className="h-60 bg-linear-to-b from-zinc-900 to-zinc-950"></section>
    </main>
  );
};

export default Auth;
