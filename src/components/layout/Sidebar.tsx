import Link from "next/link";
import { Home, Users, Terminal, Briefcase } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 fixed h-full flex flex-col bg-slate-950/80 backdrop-blur-lg border-r border-slate-800/60 z-50 text-slate-300">
      <div className="p-6 border-b border-slate-800/60">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
            <span className="font-bold text-indigo-400">LZT</span>
          </div>
          <span className="font-bold text-lg text-slate-100 tracking-tight">Developers</span>
        </div>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <Link href="/" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-slate-800/50 hover:text-white transition-colors group">
          <Home className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
          <span className="font-medium text-sm">Overview</span>
        </Link>
        <Link href="/members" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-inner">
          <Users className="w-5 h-5 text-indigo-400" />
          <span className="font-medium text-sm">Community Directory</span>
        </Link>
        <a href="https://github.com/LOUST-PRO/LZT-Developers" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-slate-800/50 hover:text-white transition-colors group">
          <Terminal className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
          <span className="font-medium text-sm">Source Code</span>
        </a>
        <a href="https://loust.pro/careers" target="_blank" rel="noreferrer" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-slate-800/50 hover:text-white transition-colors group">
          <Briefcase className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
          <span className="font-medium text-sm">Enterprise & Careers</span>
        </a>
      </nav>

      <div className="p-6 border-t border-slate-800/60 text-xs text-slate-500">
        &copy; {new Date().getFullYear()} LOUST-PRO
      </div>
    </aside>
  );
}
