import { useAuth } from "../context/Auth";
import { useEffect, useState } from "react";
import api from "../api/axios";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [fetchedUser, setFetchedUser] = useState(null);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await api.get("/api/auth/me");
        setFetchedUser(res.data.user);
      } catch (e) {
        console.error("Failed to fetch me", e);
      }
    };

    fetchMe();
  }, []);

  return (
    <main className="min-h-screen w-full bg-zinc-300">
      <header className="h-80 w-full bg-zinc-900 flex justify-center items-center">
        <h1 className="text-2xl font-semibold text-indigo-500">DASHBOARD</h1>
      </header>
      <section></section>
      <section></section>
    </main>
  );
};

export default Dashboard;
