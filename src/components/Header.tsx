import { useState, useEffect } from "react";
import { Menu, X, FileText, Send } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

interface HeaderProps {
  onOpenPDF: () => void;
}

export default function Header({ onOpenPDF }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");

  const navItems = [
    { id: "accueil", label: "Accueil" },
    { id: "experiences", label: "Expériences" },
    { id: "competences", label: "Compétences" },
    { id: "posture", label: "Posture & Boxe" },
    { id: "integration", label: "Plan 90 Jours" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-rust to-amber-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-brand-beige/85 backdrop-blur-md border-b border-slate-200/40 shadow-sm py-4"
            : "bg-transparent py-6"
        }`}
      >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Initials */}
        <button
          onClick={() => handleNavClick("accueil")}
          className="group flex items-center gap-2 text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-lg bg-brand-rust flex items-center justify-center text-white font-display font-bold text-lg shadow-sm transition-transform group-hover:scale-105">
            BM
          </div>
          <div>
            <span className="block font-display font-bold text-brand-navy leading-none tracking-tight">
              Bruno Moreau
            </span>
            <span className="block text-[10px] text-slate-500 font-mono tracking-wider mt-0.5 uppercase">
              Supply Chain & Achats
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors relative py-1 focus:outline-none ${
                    activeSection === item.id
                      ? "text-brand-rust"
                      : "text-slate-600 hover:text-brand-navy"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-rust rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-l border-slate-200 pl-6">
            <button
              onClick={onOpenPDF}
              className="flex items-center gap-2 text-xs font-mono text-slate-600 hover:text-brand-rust bg-slate-100 hover:bg-brand-rust-light transition-all px-3 py-2 rounded-md border border-slate-200/60"
            >
              <FileText size={14} />
              <span>Dossier PDF</span>
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="flex items-center gap-2 text-xs font-mono text-white bg-brand-navy hover:bg-brand-rust transition-all px-4 py-2 rounded-md shadow-sm"
            >
              <Send size={12} />
              <span>Me Recruter</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-600 hover:text-brand-navy focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-beige border-b border-slate-200 px-6 py-6 space-y-6 overflow-hidden shadow-inner"
          >
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left text-lg font-medium py-1 transition-colors ${
                      activeSection === item.id ? "text-brand-rust font-semibold" : "text-slate-600"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenPDF();
                }}
                className="flex items-center justify-center gap-2 font-mono text-sm text-slate-600 bg-slate-100 hover:bg-brand-rust-light transition-colors py-3 px-4 rounded-md border border-slate-200"
              >
                <FileText size={16} />
                <span>Consulter le Dossier PDF</span>
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="flex items-center justify-center gap-2 font-mono text-sm text-white bg-brand-navy hover:bg-brand-rust transition-colors py-3 px-4 rounded-md shadow-sm"
              >
                <Send size={14} />
                <span>Me Contacter</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  </>
  );
}
