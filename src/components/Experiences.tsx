import { CheckCircle2, Factory, Calendar, MapPin, Building, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { experiences } from "../data";

interface ExperiencesProps {
  imageSrc: string;
}

export default function Experiences({ imageSrc }: ExperiencesProps) {
  return (
    <section id="experiences" className="py-24 bg-brand-beige/35 border-t border-b border-slate-200/40">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
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
              Immersion Industrielle
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy">
            Expérience & Réalité Terrain
          </h2>
          <p className="text-slate-500 text-sm font-mono mt-1 uppercase tracking-widest">
            — De l&apos;atelier de luxe au conseil stratégique
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Timeline of Experiences */}
          <div className="lg:col-span-7 space-y-10">
            {experiences.map((exp, idx) => {
              const isAptar = exp.id === "aptar";
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ 
                    y: -6,
                    scale: 1.01,
                    borderColor: "rgba(186, 95, 61, 0.4)",
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.08)"
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    opacity: { duration: 0.6, delay: idx * 0.15 },
                    x: { duration: 0.6, delay: idx * 0.15 }
                  }}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm relative overflow-hidden cursor-pointer"
                >
                  {/* Accent Corner Tag */}
                  <div className={`absolute top-0 right-0 px-4 py-1.5 rounded-bl-xl text-[10px] font-mono font-bold uppercase tracking-wider ${
                    isAptar 
                      ? "bg-brand-rust-light text-brand-rust border-l border-b border-brand-rust/10" 
                      : "bg-slate-100 text-slate-600 border-l border-b border-slate-200"
                  }`}>
                    {exp.type}
                  </div>

                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isAptar ? "bg-brand-rust-light text-brand-rust" : "bg-slate-100 text-brand-navy"
                        }`}>
                          {isAptar ? <Factory size={16} /> : <Building size={16} />}
                        </div>
                        <h3 className="text-2xl font-display font-bold text-brand-navy">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-lg font-medium text-slate-700 font-display pl-10">
                        {exp.role}
                      </p>
                    </div>

                    <div className="sm:text-right pl-10 sm:pl-0">
                      <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand-rust bg-brand-rust-light/50 px-2.5 py-1 rounded-md border border-brand-rust/10">
                        <Calendar size={12} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs font-mono text-slate-400 mt-1.5 sm:justify-end">
                        <MapPin size={12} />
                        <span>{isAptar ? "Le Vaudreuil (Normandie)" : "Paris / Hybride"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Subtitle / Description of Environment */}
                  <div className="mb-6 pl-0 sm:pl-10 bg-slate-50 p-4 rounded-xl border border-slate-200/40 text-sm font-medium text-slate-600 font-display">
                    {exp.tagline}
                  </div>

                  {/* Bullet Achievements */}
                  <ul className="space-y-4 pl-0 sm:pl-10">
                    {exp.details.map((detail, bIdx) => {
                      // Separate label and text
                      const colonIdx = detail.indexOf(":");
                      const label = colonIdx !== -1 ? detail.substring(0, colonIdx) : "";
                      const text = colonIdx !== -1 ? detail.substring(colonIdx + 1) : detail;

                      return (
                        <li key={bIdx} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle2 size={16} className="text-brand-rust mt-1 shrink-0" />
                          <span className="text-sm leading-relaxed">
                            {label && (
                              <strong className="font-semibold text-brand-navy">
                                {label}:
                              </strong>
                            )}
                            {text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                </motion.div>
              );
            })}
          </div>

          {/* Right Column: High Quality Factory Floor Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Image card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] group">
              <img
                src={imageSrc}
                alt="Usine moderne de moulage plastique"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-flex items-center gap-1.5 bg-brand-rust px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase mb-2">
                  <Sparkles size={10} className="animate-spin" />
                  Moulage & Ordonnancement
                </span>
                <p className="text-sm font-display font-medium text-slate-100">
                  Immersion au sein d&apos;ateliers d&apos;injection plastique haute cadence.
                </p>
              </div>
            </div>

            {/* Industrial Data Overlay / Mini Dashboard Card */}
            <div className="bg-brand-navy text-white rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-rust/10 rounded-full -mr-16 -mt-16 pointer-events-none" />
              
              <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-4">
                Chiffres Clés — Aptar Beauty
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="border-l-2 border-brand-rust pl-3 py-1">
                  <div className="text-2xl font-display font-black tracking-tight text-white">
                    12.5 M€
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                    Portefeuille global
                  </div>
                </div>
                
                <div className="border-l-2 border-brand-rust pl-3 py-1">
                  <div className="text-2xl font-display font-black tracking-tight text-white">
                    24/7
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                    Flux Industriel
                  </div>
                </div>

                <div className="border-l-2 border-brand-rust pl-3 py-1">
                  <div className="text-2xl font-display font-black tracking-tight text-white">
                    SAP ERP
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                    Bases de données
                  </div>
                </div>

                <div className="border-l-2 border-brand-rust pl-3 py-1">
                  <div className="text-2xl font-display font-black tracking-tight text-white">
                    S&OP
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                    Régulation & Flux
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
