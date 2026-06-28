import { Globe, Shield, Sparkles, Award } from "lucide-react";
import { motion } from "motion/react";
import { postureData } from "../data";

interface PostureProps {
  imageSrc: string;
}

export default function Posture({ imageSrc }: PostureProps) {
  // Langues with flags or elegant tags
  const languages = [
    { name: "Français", level: "Langue Maternelle / Bilingue" },
    { name: "Portugais", level: "Langue Maternelle / Bilingue (Double nationalité BR)" },
    { name: "Anglais", level: "Courant / Professionnel" },
    { name: "Espagnol", level: "Courant / Opérationnel" }
  ];

  return (
    <section id="posture" className="py-24 bg-brand-beige/35 border-t border-b border-slate-200/40 relative overflow-hidden">
      {/* Decorative accent background */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-rust/5 rounded-full filter blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-0.5 bg-brand-rust" />
            <span className="text-sm font-mono font-bold tracking-wider text-brand-rust uppercase">
              Posture Professionnelle
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy">
            Posture & Valeur Ajoutée
          </h2>
          <p className="text-slate-500 text-sm font-mono mt-1 uppercase tracking-widest">
            — Rigueur sportive et adaptabilité multiculturelle
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Boxing Glove Artwork with artistic caption */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] max-w-sm mx-auto group">
              <img
                src={imageSrc}
                alt="Gants de boxe suspendus contre un mur en béton"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-center sm:text-left">
                <span className="font-mono text-[10px] tracking-widest text-brand-rust font-bold uppercase block mb-1">
                  Mental & Rigueur
                </span>
                <p className="font-display font-semibold text-lg text-slate-100">
                  &ldquo;La régularité dans l&apos;effort.&rdquo;
                </p>
              </div>
            </div>
            
            <p className="text-[11px] font-mono text-slate-400 text-center mt-4">
              * Approche pragmatique, axée sur les faits et orientée résultats.
            </p>
          </motion.div>

          {/* Right Column: Values & Language details */}
          <div className="lg:col-span-7 space-y-8 order-1 lg:order-2">
            
            {/* Philosophy blockquote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-rust-light border border-brand-rust/20 p-6 rounded-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-rust" />
              <p className="text-brand-navy font-display font-bold text-base sm:text-lg italic leading-relaxed">
                &ldquo;{postureData.quote}&rdquo;
              </p>
            </motion.div>

            {/* Posture items */}
            <div className="space-y-6">
              
              {/* Boxe discipline */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0 shadow-sm font-mono font-bold text-sm">
                  1
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-lg text-brand-navy flex items-center gap-2">
                    {postureData.items[0].title}
                    <span className="text-xs font-mono font-normal text-slate-400">
                      — {postureData.items[0].subtitle}
                    </span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {postureData.items[0].description}
                  </p>
                </div>
              </motion.div>

              {/* Multicultural item */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center shrink-0 shadow-sm font-mono font-bold text-sm">
                  2
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-lg text-brand-navy flex items-center gap-2">
                    {postureData.items[1].title}
                    <span className="text-xs font-mono font-normal text-slate-400">
                      — {postureData.items[1].subtitle}
                    </span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {postureData.items[1].description}
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Languages Grid Section */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
              <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase flex items-center gap-2">
                <Globe size={14} className="text-brand-rust" />
                Agilité Linguistique (4 Langues Opérationnelles)
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex flex-col p-3 rounded-xl bg-brand-beige/35 border border-slate-200/50 hover:border-brand-rust/25 transition-colors">
                    <span className="font-display font-bold text-sm text-brand-navy flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-rust" />
                      {lang.name}
                    </span>
                    <span className="text-xs font-mono text-slate-500 mt-1 leading-none">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
