'use client';

import React, { useState, useMemo } from 'react';
import { Member } from '@/lib/members';
import { 
  Search, 
  X, 
  Globe, 
  MessageSquare, 
  Sparkles,
  ExternalLink,
  Plus
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/ui/Icons';

interface DirectoryBrowserProps {
  initialMembers: Member[];
}

export function DirectoryBrowser({ initialMembers }: DirectoryBrowserProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Extract all unique skills across all members
  const allSkills = useMemo(() => {
    const skillsSet = new Set<string>();
    initialMembers.forEach((m) => {
      m.skills?.forEach((s) => skillsSet.add(s));
    });
    return Array.from(skillsSet);
  }, [initialMembers]);

  // Filter members based on query and selected skill
  const filteredMembers = useMemo(() => {
    return initialMembers.filter((member) => {
      const matchesSkill = selectedSkill 
        ? member.skills?.includes(selectedSkill)
        : true;

      if (!matchesSkill) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const nameMatch = member.name.toLowerCase().includes(q);
      const userMatch = member.username.toLowerCase().includes(q);
      const roleMatch = member.role.toLowerCase().includes(q);
      const bioMatch = member.bio ? member.bio.toLowerCase().includes(q) : false;
      const skillsMatch = member.skills?.some(s => s.toLowerCase().includes(q));

      return nameMatch || userMatch || roleMatch || bioMatch || skillsMatch;
    });
  }, [initialMembers, searchQuery, selectedSkill]);

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Top Controls: Search and Filter Pills */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by name, role, skill, or bio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-slate-900/80 border border-slate-800 rounded-xl text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1 focus:ring-sky-500/50 transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Add Profile CTA */}
          <a
            href="https://github.com/LOUST-PRO/LZT-Developers/new/main/members?filename=your-username.yml&value=username%3A%20your-username%0Aname%3A%20Your%20Name%0Arole%3A%20Software%20Engineer%0Abio%3A%20%22Passionate%20about%20building%20resilient%20systems%20and%20high-throughput%20architectures.%22%0Askills%3A%20%0A%20%20-%20Next.js%0A%20%20-%20Rust%0Agithub%3A%20%22https%3A%2F%2Fgithub.com%2Fyour-username%22%0Alinkedin%3A%20%22%22%0Awebsite%3A%20%22%22"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white text-sm font-medium shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>Add Your Profile</span>
          </a>
        </div>

        {/* Skill Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedSkill(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              selectedSkill === null
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
            }`}
          >
            All ({initialMembers.length})
          </button>
          {allSkills.map((skill) => (
            <button
              key={skill}
              onClick={() => setSelectedSkill(selectedSkill === skill ? null : skill)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                selectedSkill === skill
                  ? 'bg-indigo-500/25 text-indigo-300 border border-indigo-500/50 shadow-sm'
                  : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Members Grid */}
      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.username}
              className="bg-slate-900/70 backdrop-blur-xl border border-slate-800/90 hover:border-sky-500/40 hover:shadow-2xl hover:shadow-sky-500/5 hover:-translate-y-1 transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top ambient highlight line */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Member Header with Avatar */}
                <div className="flex items-start gap-3.5 mb-4">
                  {/* Avatar */}
                  <img
                    src={`https://github.com/${member.username}.png`}
                    alt={member.name}
                    onError={(e) => {
                      // Fallback to placeholder if avatar doesn't exist
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-700/80 ring-2 ring-sky-500/10 shrink-0"
                  />
                  <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-lg font-bold text-slate-100 truncate group-hover:text-sky-300 transition-colors">
                        {member.name}
                      </h3>
                      <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    </div>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-sky-400/90 hover:text-sky-300 font-mono flex items-center gap-1 truncate"
                    >
                      @{member.username}
                    </a>
                    <span className="text-xs text-slate-400 font-medium truncate mt-0.5">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Technical Bio */}
                {member.bio && (
                  <p className="text-sm text-slate-300/90 leading-relaxed mb-5 line-clamp-4">
                    {member.bio}
                  </p>
                )}

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {member.skills?.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setSelectedSkill(skill)}
                      className="px-2.5 py-1 bg-slate-800/70 hover:bg-slate-800 text-slate-300 text-xs font-mono rounded-lg border border-slate-700/70 transition-colors"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Social & Project Links */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noreferrer"
                    title="GitHub Profile"
                    className="text-slate-400 hover:text-white transition-colors p-1 rounded-md hover:bg-slate-800/60"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noreferrer"
                      title="Portfolio Website"
                      className="text-slate-400 hover:text-sky-400 transition-colors p-1 rounded-md hover:bg-slate-800/60"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      title="LinkedIn Profile"
                      className="text-slate-400 hover:text-blue-400 transition-colors p-1 rounded-md hover:bg-slate-800/60"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noreferrer"
                      title="Twitter / X"
                      className="text-slate-400 hover:text-sky-300 transition-colors p-1 rounded-md hover:bg-slate-800/60"
                    >
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {member.discord && (
                  <div 
                    title={`Discord: ${member.discord}`}
                    className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-800/50 px-2 py-1 rounded-md border border-slate-700/50"
                  >
                    <MessageSquare className="w-3 h-3 text-indigo-400" />
                    <span className="truncate max-w-[100px]">{member.discord}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 bg-slate-900/40 border border-slate-800/60 rounded-2xl">
          <p className="text-slate-400 text-sm mb-4">
            No developers found matching &quot;{searchQuery}&quot; {selectedSkill && `with skill &quot;${selectedSkill}&quot;`}.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSkill(null);
            }}
            className="text-xs text-sky-400 hover:underline font-mono"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
