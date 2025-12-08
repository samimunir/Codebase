// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Lock, LogIn, Mail } from "lucide-react";
// import { useAuth } from "../context/Auth";

// const Auth = () => {
//   const [mode, setMode] = useState("login");
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//     first_name: "",
//     last_name: "",
//   });
//   const [error, setError] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const { login } = useAuth();

//   useEffect(() => {
//     if (location.pathname === "/auth/login") {
//       setMode("login");
//     } else {
//       setMode("signup");
//     }
//   }, []);

//   const handleChange = (e) => {
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const toggle_auth_mode = () => {
//     if (mode === "login") {
//       setMode("signup");
//     } else {
//       setMode("login");
//     }
//   };

//   const handleSubmit = async (e) => {
//     if (mode === "login") {
//       try {
//         e.preventDefault();

//         setIsSubmitting(true);
//         setError("");

//         await login(form.email, form.password);
//         navigate("/dashboard");
//       } catch (e) {
//         setError(
//           e.response?.data?.message || "Login failed. Please try again."
//         );
//       } finally {
//         setIsSubmitting(false);
//       }
//     } else {
//       alert("Not yet implemented!");
//     }
//   };

//   return (
//     <main className="min-h-screen w-full bg-zinc-300">
//       <section className="p-4 w-full bg-zinc-900 flex flex-col items-center justify-center">
//         <div className="flex items-center justify-center">
//           <div className="tracking-tight">
//             <h1 className="text-2xl font-semibold text-indigo-500 flex items-center gap-2">
//               Welcome back, please signin <LogIn />
//             </h1>
//             <h2 className="text-md text-center font-medium text-indigo-800">
//               Toggle below to {mode === "login" ? "signup" : "login"}!
//             </h2>
//           </div>
//         </div>
//         {/* Auth Mode Toggle Pill */}
//         <div
//           className={`mt-4 mx-auto w-[100px] h-5 border-2 border-indigo-500 rounded-full flex items-center ${
//             mode === "login" ? "justify-start" : "justify-end"
//           } transition-all`}
//         >
//           <div
//             onClick={() => toggle_auth_mode()}
//             className="w-[50px] h-5 border-2 border-indigo-500 rounded-full bg-indigo-500"
//           ></div>
//         </div>
//         {/* Auth Form */}
//         {mode === "login" ? (
//           <form
//             onSubmit={handleSubmit}
//             className="mt-4 p-4 bg-zinc-395000 rounded-xl shadow-2xl space-y-4 border-2 border-zinc-900"
//           >
//             <div className="flex items-center gap-2 text-indigo-500">
//               <Mail />
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 id="email"
//                 name="email"
//                 required
//                 onChange={handleChange}
//                 value={form.email}
//                 // disabled={loading}x
//                 className="border-2 border-indigo-500 rounded-xl pl-2 outline-none"
//               />
//             </div>
//             <div className="flex items-center gap-2 text-indigo-500">
//               <Lock />
//               <input
//                 type="password"
//                 placeholder="Your password"
//                 id="password"
//                 name="password"
//                 required
//                 onChange={handleChange}
//                 value={form.password}
//                 // disabled={loading}
//                 className="border-2 border-indigo-500 rounded-xl pl-2 outline-none"
//               />
//             </div>
//             {error && (
//               <p className="text-rose-500 font-bold text-sm">{error}</p>
//             )}
//             <div className="flex items-center justify-center">
//               <button
//                 type="submit"
//                 // disabled={loading}
//                 className="w-[100px] text-center flex items-center justify-center gap-1 border-2 border-indigo-500 text-indigo-500 font-bold rounded-xl px-2 py-1 hover:bg-indigo-500 hover:text-zinc-300 transition-all"
//               >
//                 Login <LogIn />
//               </button>
//             </div>
//           </form>
//         ) : (
//           <section>
//             <div>
//               <input type="email" placeholder="Your email" />
//             </div>
//             <div>
//               <input type="password" placeholder="Your password" />
//             </div>
//             <div>
//               <input type="text" placeholder="First name" />
//             </div>
//             <div>
//               <input type="text" placeholder="Last name" />
//             </div>
//             <div>
//               <button>Signup</button>
//             </div>
//           </section>
//         )}
//       </section>
//       <section className="h-60 bg-linear-to-b from-zinc-900 to-zinc-950"></section>
//     </main>
//   );
// };

// export default Auth;

/*
 **********
 */

import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

function FeaturePill({ label }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-950/60 px-3 py-1 text-xs text-slate-300/90">
      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      <span>{label}</span>
    </div>
  );
}

export default function Auth() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [localError, setLocalError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  // const { login, register, authError } = useAuth();

  const isLogin = mode === "login";
  const redirectTo = (location.state && location.state.from) || "/dashboard";

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLocalError(null);

    if (!form.email || !form.password || (!isLogin && !form.name)) {
      setLocalError("Please fill out all required fields.");
      return;
    }

    if (!isLogin && form.password !== form.confirmPassword) {
      setLocalError("Passwords do not match.");
      return;
    }

    try {
      setSubmitting(true);

      if (isLogin) {
        // await login({ email: form.email, password: form.password });
      } else {
        // await register({
        //   name: form.name,
        //   email: form.email,
        //   password: form.password,
        // });
      }

      navigate(redirectTo, { replace: true });
    } catch (err) {
      setLocalError(
        err?.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col overflow-hidden rounded-none border-x border-slate-800/70 bg-slate-950/80 shadow-[0_20px_80px_rgba(15,23,42,0.9)] md:mt-10 md:rounded-3xl md:border">
        <div className="flex flex-1 flex-col md:flex-row">
          {/* Left: branding */}
          <aside className="relative hidden w-full flex-col justify-between border-b border-slate-900/80 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 px-8 py-8 md:flex md:w-2/5 md:border-r">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.22),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(14,165,233,0.18),_transparent_55%)] opacity-70" />

            <div className="relative space-y-6">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-cyan-500/40 bg-cyan-500/10 text-base font-semibold text-cyan-300">
                  Z
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Zephiron Auth
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-2xl font-semibold tracking-tight text-slate-50">
                  Secure sign-in for modern apps.
                </h1>
                <p className="text-sm text-slate-300">
                  Experience a polished JWT-based auth flow with refresh tokens,
                  httpOnly cookies, and role-ready user profiles.
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-300/90">
                <FeaturePill label="Access & refresh tokens" />
                <FeaturePill label="RBAC-ready design" />
                <FeaturePill label="Session-aware UI states" />
              </div>
            </div>

            <div className="relative mt-10 space-y-2 text-xs text-slate-400">
              <p className="font-medium text-slate-300">Developer mode</p>
              <p>
                This auth UI is designed for real-world MERN stacks. Swap in
                your own API endpoints and AuthContext without touching the
                layout.
              </p>
            </div>
          </aside>

          {/* Right: form */}
          <main className="flex w-full flex-1 flex-col justify-center bg-slate-950/95 px-5 py-10 md:w-3/5 md:px-10">
            <div className="mx-auto w-full max-w-md space-y-8">
              {/* Mobile header */}
              <div className="flex items-center justify-between md:hidden">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-xs font-semibold tracking-tight text-slate-100"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-xs text-cyan-300">
                    Z
                  </div>
                  Zephiron Auth
                </Link>
              </div>

              <div className="space-y-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  {isLogin ? "Welcome back" : "Create account"}
                </p>
                <h2 className="text-xl font-semibold tracking-tight text-slate-50">
                  {isLogin ? "Sign in to your dashboard" : "Join the platform"}
                </h2>
                <p className="text-xs text-slate-400">
                  {isLogin
                    ? "Enter your credentials to access your account."
                    : "It only takes a few seconds to get started."}
                </p>
              </div>

              {/* Mode toggle */}
              <div className="inline-flex rounded-full border border-slate-800 bg-slate-900/80 p-1 text-xs text-slate-400">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={
                    "flex-1 rounded-full px-3 py-1.5 transition " +
                    (isLogin
                      ? "bg-slate-950 text-slate-50 shadow-sm"
                      : "hover:text-slate-200")
                  }
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className={
                    "flex-1 rounded-full px-3 py-1.5 transition " +
                    (!isLogin
                      ? "bg-slate-950 text-slate-50 shadow-sm"
                      : "hover:text-slate-200")
                  }
                >
                  Create account
                </button>
              </div>

              {/* Error banner */}
              {localError /* || authError */ && (
                <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-200">
                  {localError /* || authError */}
                </div>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-slate-200"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/60"
                      placeholder="Sami Doe"
                    />
                  </div>
                )}

                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-slate-200"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/60"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-xs font-medium text-slate-200"
                    >
                      Password
                    </label>
                    {isLogin && (
                      <button
                        type="button"
                        className="text-[11px] font-medium text-cyan-300 hover:text-cyan-200"
                        // onClick={() => navigate("/forgot-password")}
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={isLogin ? "current-password" : "new-password"}
                    value={form.password}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/60"
                    placeholder="••••••••"
                  />
                </div>

                {!isLogin && (
                  <div className="space-y-1.5">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-xs font-medium text-slate-200"
                    >
                      Confirm password
                    </label>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      autoComplete="new-password"
                      value={form.confirmPassword}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-50 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/60"
                      placeholder="••••••••"
                    />
                  </div>
                )}

                <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400">
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-3 w-3 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                    />
                    <span>Remember this device</span>
                  </label>
                  {!isLogin && (
                    <span>
                      By creating an account, you agree to our{" "}
                      <button
                        type="button"
                        className="text-cyan-300 hover:text-cyan-200"
                      >
                        terms
                      </button>
                      .
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting
                    ? isLogin
                      ? "Signing in..."
                      : "Creating account..."
                    : isLogin
                    ? "Sign in"
                    : "Create account"}
                </button>
              </form>

              <p className="text-center text-[11px] text-slate-400">
                {isLogin ? (
                  <>
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className="font-medium text-cyan-300 hover:text-cyan-200"
                    >
                      Create one
                    </button>
                    .
                  </>
                ) : (
                  <>
                    Already registered?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="font-medium text-cyan-300 hover:text-cyan-200"
                    >
                      Sign in
                    </button>
                    .
                  </>
                )}
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
