import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
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
  title: "LZT-Developers",
  description: "LOUST-PRO Community Directory",
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
      <body className="min-h-full flex bg-[#020617] text-slate-200">
        <Sidebar />
        
        {/* Background layer */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
          <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#ffffff08" 
            hoverFillColor="#6366f115"
          />
        </div>
        
        {/* Main Content Area */}
        <div className="flex-1 ml-64 min-h-screen relative z-10 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
