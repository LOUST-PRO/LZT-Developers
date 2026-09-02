import { getMembers } from "@/lib/members";

export default function Home() {
  const members = getMembers();

  return (
    <div className="p-8 sm:p-20 font-sans">
      <main className="max-w-5xl mx-auto flex flex-col gap-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
            LZT-Developers
          </h1>
          <p className="text-xl text-slate-400 font-medium">
            The engineering community powering LOUST-PRO's infrastructure.
          </p>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member) => (
            <div key={member.username} className="bg-slate-900/90 border border-slate-800 rounded-xl p-6 shadow-xl hover:border-indigo-500/50 transition-all flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-100">{member.name}</h2>
                <p className="text-indigo-400 font-semibold mb-3">@{member.username} &middot; {member.role}</p>
                
                {member.bio && (
                  <p className="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-4">
                    {member.bio}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {member.skills?.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-slate-800/80 rounded-md text-xs font-mono text-slate-300 border border-slate-700/80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800/60 text-sm font-medium">
                <a href={member.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  GitHub
                </a>
                {member.website && (
                  <a href={member.website} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    Website
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                    Twitter / X
                  </a>
                )}
                {member.discord && (
                  <span className="text-xs text-slate-500 font-mono">
                    Discord: <span className="text-slate-400">{member.discord}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </section>

        <footer className="text-center mt-20 pt-8 border-t border-slate-800 text-slate-500">
          <p>Licensed under AGPL-3.0. To join, submit a PR with your YAML file.</p>
        </footer>
      </main>
    </div>
  );
}
