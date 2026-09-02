'use client';

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';

export function AppShell({ children }: { children: React.ReactNode }) {
  // Collapsed by default per user directive
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen flex w-full">
      <Sidebar expanded={expanded} onToggle={() => setExpanded(!expanded)} />
      <div 
        className={`flex-1 min-h-screen relative z-10 flex flex-col transition-all duration-300 ease-in-out ${
          expanded ? 'ml-64' : 'ml-16'
        }`}
      >
        {children}
      </div>
    </div>
  );
}
