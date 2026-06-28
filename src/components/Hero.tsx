import { Award, ChevronRight, Activity, ShieldAlert, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { heroData } from "../data";

interface HeroProps {
  onLearnMore: () => void;
  imageSrc: string;
}

export default function Hero({ onLearnMore, imageSrc }: HeroProps) {
  return (
    <section id="accueil" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-brand-beige to-white">
      {/* Absolute Background Elements for Craftsmanship */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-brand-rust/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-slate-300/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional Meta Data & Introduction */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-brand-rust-light text-brand-rust border border-brand-rust/20 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide w-fit"
            >
              <Award size={14} className="animate-pulse" />
              <span>{heroData.admission}</span>
            </motion.div>

            {/* Main Name & Domain */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-1"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-brand-navy">
                  {heroData.firstName}{" "}
                  <span className="text-brand-rust block sm:inline font-black">
                    {heroData.lastName}
                  </span>
                </h1>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl sm:text-2xl font-medium text-slate-600 font-display leading-tight border-l-4 border-brand-rust/45 pl-4"
              >
                {heroData.title}
              </motion.p>
            </div>

            {/* Strategic Quote Card */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-brand-clay border border-brand-rust/10 p-6 rounded-2xl shadow-sm relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-rust" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-rust/5 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110 duration-500" />
              <p className="text-slate-700 font-display font-medium text-base sm:text-lg italic leading-relaxed relative z-10">
                &ldquo;{heroData.quote}&rdquo;
              </p>
            </motion.div>

            {/* Key Perimeters Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                Périmètres Clés
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {heroData.perimeters.map((perim, idx) => (
                  <span
                    key={idx}
                    className="bg-slate-100 hover:bg-slate-200/80 transition-colors text-slate-800 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-slate-200/50 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-rust" />
                    {perim}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <button
                onClick={onLearnMore}
                className="group flex items-center gap-2.5 text-sm font-mono font-bold text-white bg-brand-navy hover:bg-brand-rust transition-all px-6 py-4 rounded-xl shadow-md hover:shadow-lg focus:outline-none"
              >
                <span>Découvrir mon profil</span>
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </button>
              
              <a
                href="#contact"
                className="flex items-center gap-2 text-sm font-mono font-bold text-slate-700 bg-white hover:bg-slate-50 transition-colors px-6 py-4 rounded-xl border border-slate-200 shadow-sm"
              >
                <span>Discuter d&apos;un projet</span>
              </a>
            </motion.div>

          </div>

          {/* Right: Immersive Custom Artwork Frame with Interactive Markers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Picture Frame */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-square lg:aspect-[3/4]">
              <img
                src={imageSrc}
                alt="Workspace d'analyse logistique conteneurisé"
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Overlay Interactive Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg hidden sm:block">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-rust-light text-brand-rust flex items-center justify-center shrink-0">
                    <Activity size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">Aptar Beauty & Keanik</h4>
                    <p className="text-sm font-display font-bold text-brand-navy mt-0.5 leading-tight">
                      Piloter des flux & de la donnée en conditions réelles.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Grid Accent */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[radial-gradient(#d95a2b_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-35 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(#0f172a_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-20 pointer-events-none" />
          </motion.div>

        </div>
        
        {/* Animated Scroll Down Indicator */}
        <div className="hidden lg:flex justify-center mt-12">
          <motion.button
            onClick={onLearnMore}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-brand-rust transition-colors focus:outline-none"
          >
            <span className="font-mono tracking-widest uppercase">Faites défiler</span>
            <ArrowDown size={14} />
          </motion.button>
        </div>

      </div>
    </section>
  );
}
