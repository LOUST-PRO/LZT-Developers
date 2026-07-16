export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm">
      <div className="relative flex flex-col items-center gap-4">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-r-2 border-sky-400 animate-spin animation-delay-150"></div>
          <div className="absolute inset-4 rounded-full border-b-2 border-slate-300 animate-spin animation-delay-300"></div>
        </div>
        <div className="text-slate-300 font-mono text-sm tracking-widest animate-pulse">
          INITIALIZING...
        </div>
      </div>
    </div>
  );
}
