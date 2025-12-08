import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-xs text-slate-400 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-500/40 bg-cyan-500/10 text-xs font-semibold text-cyan-300">
            Z
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-200">Zephiron Auth</span>
            <span className="text-[11px] text-slate-500">
              MERN-stack authentication demo · JWT + refresh tokens
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/#features"
              className="hover:text-slate-200 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/#docs"
              className="hover:text-slate-200 transition-colors"
            >
              Docs
            </Link>
            <Link to="/auth" className="hover:text-slate-200 transition-colors">
              Auth
            </Link>
          </div>
          <span className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} Zephiron. For demonstration purposes.
          </span>
        </div>
      </div>
    </footer>
  );
}
