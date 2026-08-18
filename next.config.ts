import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  experimental: {
    // Next.js 16.3+: Turbopack memory eviction reduces `next dev` RAM by ~90%
    // (21.5GB → ~2GB per Vercel benchmark) by evicting cached modules from RSS
    // rather than relying solely on OS swap. 'auto' = Turbopack picks strategy
    // per workload; safe default for this app's mixed server + client tree.
    // Docs: https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopackMemoryEviction
    turbopackMemoryEviction: "auto",
  },
};

export default nextConfig;
