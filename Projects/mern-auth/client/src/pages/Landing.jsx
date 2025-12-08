// import { Link } from "react-router-dom";
// import { useAuth } from "../context/Auth";
// import { FaReact, FaNode } from "react-icons/fa";
// import { SiMongodb, SiExpress } from "react-icons/si";

// const Landing = () => {
//   const { isAuthenticated } = useAuth();

//   return (
//     <main className="min-h-screen w-full bg-zinc-300">
//       <section className="h-80 w-full bg-zinc-900 flex justify-center items-center">
//         <div className="w-4xl space-y-2 bg-linear-to-b from-zinc-900 to-zinc-950 p-4 md:p-16 rounded-lg shadow-2xl text-center md:text-left">
//           <h1 className="text-2xl md:text-4xl font-semibold text-indigo-500">
//             Welcome to MERN-AUTH
//           </h1>
//           <h2 className="text-zinc-500 text-lg md:text-xl">
//             Built using only{" "}
//             <span className="font-semibold">
//               MongoDB, Express, React, and Node.js
//             </span>
//           </h2>
//           <div className="text-sky-500 text-3xl md:text-4xl flex items-center gap-4 justify-center md:justify-start">
//             <SiMongodb />
//             <SiExpress />
//             <FaReact />
//             <FaNode />
//           </div>
//           {isAuthenticated ? (
//             <Link
//               to="/dashboard"
//               className="underline text-zinc-500 hover:text-indigo-500 transition-all"
//             >
//               Go to Dashboard
//             </Link>
//           ) : (
//             <div>
//               <p className="text-zinc-400 text-sm md:text-md">
//                 Already have an account?{" "}
//                 <Link
//                   to="/auth/login"
//                   className="hover:underline text-indigo-500"
//                 >
//                   Login
//                 </Link>
//               </p>
//             </div>
//           )}
//         </div>
//       </section>
//       <section></section>
//       <section></section>
//     </main>
//   );
// };

// export default Landing;

/*
 *****
 */

import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Hero */}
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6 lg:py-24">
        {/* Left column */}
        <section className="max-w-xl space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-xs font-medium uppercase tracking-wide text-cyan-300">
            Secure • Modern • JWT-based
          </p>

          <div className="space-y-4">
            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
              Professional-grade authentication for your MERN stack.
            </h1>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              Zephiron Auth gives you a production-inspired authentication
              experience: JWT access & refresh tokens, httpOnly cookies, and a
              clean UI that feels like a real SaaS product.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/auth"
              className="rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400"
            >
              Start now – it&apos;s free
            </Link>
            <Link
              to="/auth"
              className="text-sm font-medium text-slate-300 hover:text-cyan-300"
            >
              View the auth flow →
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 pt-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Secure JWT flows
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              RBAC-ready design
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Fully responsive
            </div>
          </div>
        </section>

        {/* Right column: glassmorphism preview card */}
        <section className="relative mt-10 flex flex-1 justify-center md:mt-0">
          <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(59,130,246,0.08),_transparent_55%)]" />

          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_18px_80px_rgba(15,23,42,0.9)] backdrop-blur">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Live preview
              </p>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-300">
                Auth demo
              </span>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-100">
                    Welcome back
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Sign in to continue to your dashboard.
                  </p>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                </div>
              </div>

              <div className="space-y-3 text-[11px]">
                <div className="space-y-1.5">
                  <label className="block text-slate-300">Email</label>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-slate-200">
                    you@example.com
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="block text-slate-300">Password</label>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-slate-500">
                    ••••••••••
                  </div>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[10px] text-cyan-300">
                    Forgot password?
                  </span>
                  <span className="rounded-full bg-cyan-500 px-3 py-1 text-[10px] font-semibold text-slate-950">
                    Sign in
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-[11px] text-slate-500">
              Built with React, TailwindCSS, and a secure JWT-based backend.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
