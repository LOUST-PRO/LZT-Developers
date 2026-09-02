'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Users, 
  Boxes,
  ShieldCheck,
  Code2, 
  Briefcase, 
  PanelLeftClose, 
  PanelLeft, 
  ExternalLink 
} from "lucide-react";

interface SidebarProps {
  expanded: boolean;
  onToggle: () => void;
}

export function Sidebar({ expanded, onToggle }: SidebarProps) {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Directory",
      href: "/",
      icon: Users,
      active: pathname === "/",
      external: false,
    },
    {
      label: "Core Ecosystem",
      href: "/#ecosystem",
      icon: Boxes,
      active: false,
      external: false,
    },
    {
      label: "Architecture",
      href: "/#about",
      icon: ShieldCheck,
      active: false,
      external: false,
    },
    {
      label: "GitHub Source",
      href: "https://github.com/LOUST-PRO/LZT-Developers",
      icon: Code2,
      active: false,
      external: true,
    },
    {
      label: "LOUST Enterprise",
      href: "https://loust.pro",
      icon: Briefcase,
      active: false,
      external: true,
    },
  ];

  return (
    <aside 
      className={`fixed top-0 left-0 h-full flex flex-col justify-between bg-slate-950/90 backdrop-blur-xl border-r border-slate-800/70 z-50 text-slate-300 transition-all duration-300 ease-in-out ${
        expanded ? 'w-64 shadow-2xl shadow-indigo-950/40' : 'w-16'
      }`}
    >
      <div>
        {/* Header / Brand Logo */}
        <div className={`h-16 flex items-center border-b border-slate-800/60 ${
          expanded ? 'px-4 justify-between' : 'justify-center'
        }`}>
          <Link href="/" className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 shrink-0 rounded-xl bg-slate-900 border border-slate-800/90 flex items-center justify-center p-1.5 shadow-sm hover:border-sky-500/40 transition-colors">
              <img 
                src="/loust-logo.png" 
                alt="LOUST" 
                className="w-6 h-6 object-contain"
              />
            </div>
            {expanded && (
              <div className="flex flex-col truncate">
                <span className="font-bold text-sm text-slate-100 tracking-tight leading-tight">LZT-Developers</span>
                <span className="text-[10px] font-mono text-slate-400">Directory</span>
              </div>
            )}
          </Link>

          {expanded && (
            <button
              onClick={onToggle}
              aria-label="Collapse sidebar"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <PanelLeftClose className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Navigation Items with strictly uniform centering when collapsed */}
        <nav className="p-2 space-y-2 mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div
                className={`transition-all group relative ${
                  expanded
                    ? `flex items-center gap-3 px-3 py-2.5 rounded-xl ${
                        item.active
                          ? 'bg-sky-500/10 text-sky-300 border border-sky-500/25 shadow-sm'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                      }`
                    : `w-10 h-10 mx-auto flex items-center justify-center rounded-xl ${
                        item.active
                          ? 'bg-sky-500/15 text-sky-300 border border-sky-500/35 shadow-sm'
                          : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                      }`
                }`}
                title={!expanded ? item.label : undefined}
              >
                <Icon className={`w-5 h-5 shrink-0 transition-transform duration-200 group-hover:scale-110 ${
                  item.active ? 'text-sky-400' : 'text-slate-400 group-hover:text-slate-200'
                }`} />
                {expanded && (
                  <span className="font-medium text-sm truncate flex-1">{item.label}</span>
                )}
                {expanded && item.external && (
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                )}
              </div>
            );

            return item.external ? (
              <a 
                key={item.label} 
                href={item.href} 
                target="_blank" 
                rel="noreferrer" 
                className="block"
              >
                {content}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className="block">
                {content}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Toggle & Copyright */}
      <div className="p-2 border-t border-slate-800/60">
        {!expanded && (
          <button
            onClick={onToggle}
            aria-label="Expand sidebar"
            title="Expand Sidebar"
            className="w-10 h-10 mx-auto flex items-center justify-center rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <PanelLeft className="w-5 h-5" />
          </button>
        )}

        {expanded && (
          <div className="px-3 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>&copy; {new Date().getFullYear()} LOUST</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400 border border-slate-700/60">AGPLv3</span>
          </div>
        )}
      </div>
    </aside>
  );
}
