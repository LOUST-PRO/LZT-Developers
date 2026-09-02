import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/AppShell";
import { Squares } from "@/components/ui/squares";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LZT-Developers Directory",
  description: "Curated Directory of Independent Builders and Systems Engineers in the LOUST-PRO Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-[#020617] text-slate-200 selection:bg-sky-500/20 selection:text-sky-300">
        {/* Ambient floating squares background inspired by showcase-app */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-45">
          <Squares 
            direction="diagonal"
            speed={0.35}
            squareSize={56}
            borderColor="rgba(118, 232, 255, 0.08)" 
            hoverFillColor="rgba(76, 141, 255, 0.18)"
          />
        </div>
        
        {/* Collapsible App Shell with closed-by-default Sidebar */}
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
