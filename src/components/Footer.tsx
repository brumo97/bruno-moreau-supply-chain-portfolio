import { ArrowUp, Award } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-brand-beige border-t border-slate-200/60 py-12 text-slate-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Name and Title */}
        <div className="text-center md:text-left space-y-1.5">
          <p className="font-display font-bold text-slate-800 text-base">
            Bruno Moreau
          </p>
          <p className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-none">
            Supply Chain, Achats & Transformation Opérationnelle
          </p>
        </div>

        {/* Middle: SKEMA confirmation badge */}
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-slate-200/50 text-[11px] font-mono font-medium text-slate-500">
          <Award size={14} className="text-brand-rust" />
          <span>SKEMA Business School — Rentrée 2026</span>
        </div>

        {/* Right Side: Back to top button & copy */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono">
            &copy; {new Date().getFullYear()} — Tous droits réservés
          </span>
          
          <button
            onClick={handleScrollToTop}
            className="p-3 bg-white hover:bg-slate-100 border border-slate-200/60 hover:border-slate-300 text-slate-500 rounded-xl transition-all shadow-sm focus:outline-none"
            aria-label="Retourner en haut"
          >
            <ArrowUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
