export default function PageShell({ children }) {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative overflow-x-hidden">
      {children}
    </div>
  );
}
