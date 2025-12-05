import { useAuth } from "../context/Auth";
import { useEffect, useState } from "react";
import api from "../api/axios";
import { LogOut } from "lucide-react";

const Dashboard = () => {
  const { isAuthenticated, logout } = useAuth();
  const [fetchedUser, setFetchedUser] = useState(null);

  useEffect(() => {
    const fetch_me = async () => {
      try {
        const res = await api.get("/api/auth/me");
        setFetchedUser(res.data.user);
      } catch (e) {
        console.error("Failed to fetch me", e);
      }
    };

    fetch_me();
  }, []);

  return (
    <main className="min-h-screen w-full bg-zinc-300">
      <header className="h-80 w-full bg-zinc-900 flex justify-center items-center">
        <h1 className="text-2xl font-semibold text-indigo-500">DASHBOARD</h1>
      </header>
      {isAuthenticated && (
        <section className="w-full py-8 bg-linear-to-b from-zinc-900 to-zinc-950 border-t-2 border-indigo-500 flex items-center justify-center">
          <div className="space-y-2">
            <h1 className="text-2xl font-medium text-zinc-500">
              {fetchedUser?.email} | {fetchedUser?.role.toUpperCase()}
            </h1>
            <h2 className="text-xl font-semibold text-zinc-300">
              {fetchedUser?.profile?.first_name}{" "}
              {fetchedUser?.profile?.last_name} | Member since:{" "}
              {fetchedUser?.createdAt.substring(0, 10)}
            </h2>
            <button
              onClick={() => logout()}
              className="border-2 border-rose-500 px-2 py-1 rounded-xl font-bold text-rose-500 flex items-center gap-2 hover:bg-rose-500 hover:text-zinc-950 transition-all"
            >
              Logout <LogOut />
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default Dashboard;
