import { getMembers } from "@/lib/members";
import { DirectoryBrowser } from "@/components/directory/DirectoryBrowser";
import { 
  ShieldCheck, 
  Terminal, 
  Calendar, 
  Code2, 
  Boxes, 
  ArrowUpRight 
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export default function Home() {
  const members = getMembers();

  const coreTools = [
    {
      name: "SnapPipe",
      stack: "Rust",
      desc: "Identity-based QUIC transport toolkit and self-hosted relay scaffolding.",
      href: "https://github.com/LOUST-PRO/SnapPipe",
    },
    {
      name: "LinkMarks",
      stack: "Rust",
      desc: "Local-first, single-binary bookmark manager with TUI and SQLite.",
      href: "https://github.com/LOUST-PRO/LinkMarks",
    },
    {
      name: "PaperForge",
      stack: "Rust",
      desc: "Linux workspace and frontend for Wallpaper Engine Workshop scenes.",
      href: "https://github.com/LOUST-PRO/paperforge",
    },
    {
      name: "TaxonRouter",
      stack: "Go",
      desc: "GitHub Projects (v2) board automation daemon and MCP server.",
      href: "https://github.com/LOUST-PRO/TaxonRouter",
    },
    {
      name: "storage-mountguardian",
      stack: "Rust",
      desc: "Linux daemon preventing kernel D-state freezes on failing block devices.",
      href: "https://github.com/LOUST-PRO/storage-mountguardian",
    },
    {
      name: "NetBoozt",
      stack: "Rust · Tauri",
      desc: "Cross-platform TCP network optimization and latency diagnostic utility.",
      href: "https://github.com/LOUST-PRO/NetBoozt_InternetUpgrade",
    },
    {
      name: "lzt-virtuoso-tools",
      stack: "Python",
      desc: "RDF dataset ingestion pipeline and SPARQL knowledge graph tooling.",
      href: "https://github.com/LOUST-PRO/lzt-virtuoso-tools",
    },
  ];

  return (
    <div className="p-6 sm:p-10 lg:p-14 font-sans flex flex-col justify-between flex-1">
      <main className="max-w-7xl mx-auto w-full flex flex-col gap-10">
        
        {/* Compact, Modern Top Bar (No bulky hero pushing content down) */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-sky-500/10 text-sky-400 border border-sky-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                LIVE DIRECTORY
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {members.length} verified builder{members.length !== 1 ? 's' : ''}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
              LZT-Developers Directory
            </h1>
            <p className="text-sm text-slate-400">
              Curated showcase of independent builders, systems engineers, and open-source contributors.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://calendar.app.google/XR7FkZXWVwfmZ57x6"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-emerald-400" />
              <span>Schedule Call</span>
            </a>
            <a
              href="https://github.com/LOUST-PRO/LZT-Developers"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white text-xs font-medium transition-all"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>GitHub</span>
            </a>
          </div>
        </header>

        {/* Dynamic Directory Browser & Member Cards */}
        <section>
          <DirectoryBrowser initialMembers={members} />
        </section>

        {/* Relocated Hero Context & Ecosystem in Rich Footer */}
        <footer className="mt-16 pt-12 border-t border-slate-800/80 flex flex-col gap-12 text-slate-400">
          
          {/* About Platform & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-200 font-bold text-base">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <span>About LZT-Developers</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                LZT-Developers is the public showcase and contributor directory for the LOUST-PRO engineering network. 
                Submitting your profile grants you a permanent, high-signal developer card with backlinks to your personal projects, GitHub, and portfolio.
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">
                Profiles are submitted as declarative YAML files in <code className="text-slate-300 font-mono">/members/*.yml</code> via Git. 
                Zero telemetry, zero database lock-in, and full static build isolation.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-slate-200 font-bold text-base">
                <Terminal className="w-5 h-5 text-indigo-400" />
                <span>Platform Architecture</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1.5 font-mono">
                <li>• <strong className="text-slate-300">Framework:</strong> Next.js 16 (App Router) + React 19</li>
                <li>• <strong className="text-slate-300">Styling:</strong> Tailwind CSS + Glassmorphism UI</li>
                <li>• <strong className="text-slate-300">Storage:</strong> Declarative YAML parsed at build time</li>
                <li>• <strong className="text-slate-300">Deployment:</strong> Docker / K3s substrate</li>
                <li>• <strong className="text-slate-300">License:</strong> GNU AGPLv3 (Truly Open-Source)</li>
              </ul>
            </div>
          </div>

          {/* LOUST-PRO Core Open-Source Ecosystem */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-200 font-bold text-sm">
                <Boxes className="w-4 h-4 text-sky-400" />
                <span>Explore Core LOUST-PRO Open-Source Projects</span>
              </div>
              <span className="text-xs text-slate-400 font-mono">Sovereign Systems</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {coreTools.map((tool) => (
                <a
                  key={tool.name}
                  href={tool.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 rounded-xl bg-slate-900/50 hover:bg-slate-900/90 border border-slate-800/80 hover:border-sky-500/30 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-sm text-slate-200 group-hover:text-sky-300 transition-colors">
                        {tool.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                        {tool.stack}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 line-clamp-2">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-sky-400 font-mono mt-3">
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3 text-slate-400">
              <span>&copy; {new Date().getFullYear()} LOUST-PRO</span>
              <span>&middot;</span>
              <span>Licensed under GNU AGPLv3</span>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://github.com/louzt" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Founder (@louzt)
              </a>
              <a href="https://www.linkedin.com/company/loust/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="https://loust.pro" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                loust.pro
              </a>
            </div>
          </div>

        </footer>

      </main>
    </div>
  );
}
