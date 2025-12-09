import {
  Globe,
  Lock,
  LockKeyhole,
  Mail,
  MapPinPlusInside,
  ShieldAlert,
  UserPlus,
} from "lucide-react";
import { useTheme } from "../contexts/Theme";
import { useState } from "react";
import { useAuth } from "../contexts/Auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Auth = () => {
  const { login, register } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === "dark";

  const [mode, setMode] = useState("login");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    adminCode: "",
    city: "",
    country: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "register" && form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (mode === "login") {
      setLoading(true);

      const formData = {
        email: form.email,
        password: form.password,
      };

      try {
        await login(formData.email, formData.password);
        toast.success("Logged in!");
        navigate("/dashboard");
      } catch (e) {
        toast.error("Login failed.", e.message);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(true);

      const formData = {
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        password: form.confirmPassword,
      };

      try {
        await register(
          formData.email,
          formData.password,
          formData.first_name,
          formData.last_name
        );
        toast.success("Account created. Please login!");
        setTimeout(() => {
          setMode("login");
        }, 1500);
      } catch (e) {
        toast.error("Signup failed.", e.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <main>
      <section
        className={`w-full min-h-screen transition-all duration-3000 flex items-center justify-center ${
          isDark ? "bg-zinc-900 text-zinc-100" : "bg-zinc-100 text-zinc-900"
        }`}
      >
        <div className={`w-full max-w-md rounded-xl shadow-lg px-8 py-16`}>
          <h2 className="text-4xl font-bold text-center">
            {mode === "login" ? "Welcome Back" : "Create Your Account"}
          </h2>
          <form className="my-4" onSubmit={handleSubmit}>
            {mode === "register" ? (
              <section className="p-4 space-y-4 flex-col justify-center items-center">
                <div className="flex items-center gap-2">
                  <UserPlus />
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-1000`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <UserPlus />
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-1000`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Mail />
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-1000`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Lock />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-1000`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <LockKeyhole />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-1000`}
                  />
                </div>
              </section>
            ) : (
              <section className="p-4">
                <div className="flex items-center gap-2">
                  <Mail />
                  <input
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-1000`}
                  />
                </div>
                <div className="flex items-center gap-2 my-8">
                  <Lock />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className={`w-full px-2 py-1 rounded-md focus:outline-none focus:ring-2 ${
                      isDark
                        ? "ring-rose-500 placeholder:text-zinc-500"
                        : "ring-sky-500 placeholder:text-zinc-700"
                    } transition-all duration-1000`}
                  />
                </div>
              </section>
            )}
            {error && (
              <p className="mt-2 mb-4 text-sm text-rose-500 font-medium">
                {error}
              </p>
            )}
            <button
              type="submit"
              className={`w-full py-3 rounded-md font-semibold transition-all duration-3000 ${
                isDark
                  ? "bg-rose-500 text-zinc-100"
                  : " bg-sky-500 text-zinc-100"
              }`}
            >
              {mode === "login" ? "Login" : "Register"}
            </button>
          </form>
          <p className={`text-center mt-6 text-sm`}>
            {mode === "login"
              ? "Don't have an account?"
              : "Already have an account?"}{" "}
            <button
              onClick={() => setMode(mode === "login" ? "register" : "login")}
              className={`underline ml-1 ${
                isDark ? "text-rose-500" : "text-sky-500"
              } transition-all duration-3000`}
            >
              {mode === "login" ? "Register" : "Login"}
            </button>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Auth;
