// import { useAuth } from "../context/Auth";
// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import { LogOut } from "lucide-react";

// const Dashboard = () => {
//   const { isAuthenticated, logout } = useAuth();
//   const [fetchedUser, setFetchedUser] = useState(null);

//   useEffect(() => {
//     const fetch_me = async () => {
//       try {
//         const res = await api.get("/api/auth/me");
//         setFetchedUser(res.data.user);
//       } catch (e) {
//         console.error("Failed to fetch me", e);
//       }
//     };

//     fetch_me();
//   }, []);

//   return (
//     <main className="min-h-screen w-full bg-zinc-300">
//       <header className="h-80 w-full bg-zinc-900 flex justify-center items-center">
//         <h1 className="text-2xl font-semibold text-indigo-500">DASHBOARD</h1>
//       </header>
//       {isAuthenticated && (
//         <section className="w-full py-8 bg-linear-to-b from-zinc-900 to-zinc-950 border-t-2 border-indigo-500 flex items-center justify-center">
//           <div className="space-y-2">
//             <h1 className="text-2xl font-medium text-zinc-500">
//               {fetchedUser?.email} | {fetchedUser?.role.toUpperCase()}
//             </h1>
//             <h2 className="text-xl font-semibold text-zinc-300">
//               {fetchedUser?.profile?.first_name}{" "}
//               {fetchedUser?.profile?.last_name} | Member since:{" "}
//               {fetchedUser?.createdAt.substring(0, 10)}
//             </h2>
//             <button
//               onClick={() => logout()}
//               className="border-2 border-rose-500 px-2 py-1 rounded-xl font-bold text-rose-500 flex items-center gap-2 hover:bg-rose-500 hover:text-zinc-950 transition-all"
//             >
//               Logout <LogOut />
//             </button>
//           </div>
//         </section>
//       )}
//     </main>
//   );
// };

// export default Dashboard;

/*
 **********
 */

import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

function ActivityDot({ type }) {
  let color = "bg-amber-400";
  if (type === "login") color = "bg-emerald-400";
  else if (type === "security") color = "bg-cyan-400";

  return <span className={"inline-block h-2.5 w-2.5 rounded-full " + color} />;
}

export default function Dashboard() {
  // const { user, logout } = useAuth();

  const user = {
    name: "Sami",
    email: "sami@example.com",
    role: "admin",
  };

  const stats = [
    {
      label: "Active sessions",
      value: "3",
      hint: "Includes this device",
    },
    {
      label: "Last login",
      value: "2h ago",
      hint: "From New York, US",
    },
    {
      label: "Role",
      value: user.role || "user",
      hint: "RBAC-ready",
    },
  ];

  const activity = [
    {
      id: 1,
      title: "Logged in",
      time: "Just now",
      detail: "Signed in from Chrome on Windows.",
      type: "login",
    },
    {
      id: 2,
      title: "Refresh token rotated",
      time: "2 hours ago",
      detail: "Background token rotation succeeded.",
      type: "security",
    },
    {
      id: 3,
      title: "Password updated",
      time: "Yesterday",
      detail: "Password changed from dashboard.",
      type: "account",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Top bar */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-xs font-semibold text-cyan-300">
              Z
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Zephiron Auth
              </span>
              <span className="text-xs text-slate-400">
                Secure dashboard · JWT
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden text-xs text-slate-400 hover:text-slate-200 md:inline-block"
            >
              View landing
            </Link>

            <button
              // onClick={logout}
              className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300 hover:border-rose-500/60 hover:bg-rose-500/10 hover:text-rose-200"
            >
              Sign out
            </button>

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/90 to-sky-500 text-xs font-semibold text-slate-950">
              {user.name ? user.name[0] : "U"}
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        {/* Greeting / hero */}
        <section className="flex flex-col gap-4 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              Dashboard
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 md:text-3xl">
              Welcome back, {user.name || "there"}.
            </h1>
            <p className="mt-2 text-sm text-slate-400">
              This is your authenticated area. Plug in analytics, user settings,
              RBAC controls, or anything else your MERN app needs.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Session active
            </span>
            <span className="text-[11px] text-slate-400">
              Signed in as <span className="font-medium">{user.email}</span>
            </span>
          </div>
        </section>

        {/* Grid */}
        <section className="grid gap-5 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
          {/* Stats */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 md:p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-100">
                Security overview
              </h2>
              <span className="text-[11px] text-slate-400">
                JWT-based · Refresh rotation
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-800 bg-slate-950/80 px-3 py-3"
                >
                  <p className="text-[11px] text-slate-400">{stat.label}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-50">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">{stat.hint}</p>
                </div>
              ))}
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
              <span>Wire this section to real metrics from your backend.</span>
              <button className="hidden text-cyan-300 hover:text-cyan-200 sm:inline">
                View security settings →
              </button>
            </div>
          </div>

          {/* Activity */}
          <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 md:p-5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-100">
                Recent activity
              </h2>
              <span className="text-[11px] text-slate-400">
                Example events · Replace with real logs
              </span>
            </div>

            <ul className="space-y-3 text-sm">
              {activity.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-xl border border-slate-800 bg-slate-950/80 p-3"
                >
                  <div className="mt-0.5">
                    <ActivityDot type={item.type} />
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-medium text-slate-100">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-slate-500">{item.time}</p>
                    </div>
                    <p className="text-[11px] text-slate-400">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <button className="mt-1 text-[11px] font-medium text-cyan-300 hover:text-cyan-200">
              View full audit log →
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
