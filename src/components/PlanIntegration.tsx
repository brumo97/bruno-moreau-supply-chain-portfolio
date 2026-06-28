import { useState } from "react";
import { CheckSquare, Calendar, Compass, ShieldCheck, TrendingUp, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { planSteps } from "../data";

export default function PlanIntegration() {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Milestone checklists for each step to make it feel operational and premium!
  const milestones = [
    [
      "Cartographie des flux d'approvisionnement actuels",
      "Immersion terrain avec les équipes de production",
      "Évaluation des indicateurs clés (Lead Times, MOQ, Taux de service)",
      "Identification des goulets d'étranglement majeurs"
    ],
    [
      "Prise en main autonome de la mise à jour SAP ERP & CRM",
      "Déploiement de tableaux de bord Power BI de suivi opérationnel",
      "Soutien à la planification S&OP pour l'ordonnancement de lignes",
      "Animation de revues de performance avec les interlocuteurs transverses"
    ],
    [
      "Prise en charge complète d'un périmètre d'approvisionnement",
      "Mise en œuvre d'actions correctives (Amélioration continue & Lean)",
      "Négociation de protocoles logistiques avec les fournisseurs critiques",
      "Réduction active des risques de rupture (Safety Stock optimisé)"
    ]
  ];

  return (
    <section id="integration" className="py-24 bg-white">
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
              Objectif Réussite
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy">
            Intégration & Plan à 90 Jours
          </h2>
          <p className="text-slate-500 text-sm font-mono mt-1 uppercase tracking-widest">
            — Un plan d&apos;action structuré pour garantir un ROI rapide
          </p>
        </motion.div>

        {/* Tab/Interactive Navigation for Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
        >
          
          {/* Left: Tab selection */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-slate-600 font-display font-medium text-base mb-6">
              Plan d&apos;intégration structuré conçu pour prendre rapidement de l&apos;autonomie et sécuriser les flux de votre service :
            </p>

            <div className="space-y-3.5">
              {planSteps.map((step, idx) => {
                const isActive = activeTab === idx;
                const getIcon = (i: number) => {
                  switch (i) {
                    case 0: return <Compass size={18} />;
                    case 1: return <TrendingUp size={18} />;
                    case 2: return <ShieldCheck size={18} />;
                    default: return <Compass size={18} />;
                  }
                };

                return (
                  <button
                    key={step.period}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all flex items-center gap-4 focus:outline-none ${
                      isActive
                        ? "bg-brand-navy text-white border-brand-navy shadow-md scale-[1.02]"
                        : "bg-brand-beige/25 hover:bg-brand-beige/50 text-slate-700 border-slate-200/60"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? "bg-brand-rust text-white" : "bg-slate-100 text-slate-500"
                    }`}>
                      {getIcon(idx)}
                    </div>
                    
                    <div className="grow">
                      <span className={`block text-[10px] font-mono font-bold tracking-widest ${
                        isActive ? "text-brand-rust" : "text-slate-400"
                      }`}>
                        {step.period}
                      </span>
                      <span className="block font-display font-bold text-base mt-0.5 leading-none">
                        {step.title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Selected Tab Content */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-brand-clay border border-slate-200 p-8 rounded-3xl shadow-sm space-y-6 relative overflow-hidden h-full min-h-[400px] flex flex-col justify-between"
              >
                {/* Large semi-transparent background numbers */}
                <div className="absolute top-2 right-2 text-9xl font-display font-black text-slate-200/35 select-none pointer-events-none">
                  0{activeTab + 1}
                </div>

                <div className="space-y-5 relative z-10">
                  <div>
                    <span className="inline-flex items-center gap-1.5 bg-brand-rust-light text-brand-rust px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-brand-rust/10">
                      <Calendar size={12} />
                      {planSteps[activeTab].period}
                    </span>
                    <h3 className="text-2xl font-display font-bold text-brand-navy mt-1">
                      {planSteps[activeTab].title}
                    </h3>
                  </div>

                  <p className="text-slate-600 font-display font-medium text-base leading-relaxed">
                    {planSteps[activeTab].description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-slate-200/60">
                    <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                      Actions & Jalons opérationnels :
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {milestones[activeTab].map((milestone, mIdx) => (
                        <div key={mIdx} className="flex items-start gap-2.5 bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm">
                          <CheckSquare size={16} className="text-brand-rust mt-0.5 shrink-0" />
                          <span className="text-xs sm:text-sm text-slate-600 leading-tight">
                            {milestone}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footnote about value-add */}
                <div className="text-xs font-mono text-slate-500 bg-slate-100 p-3.5 rounded-xl border border-slate-200/50 mt-6 flex gap-2 items-center relative z-10">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
                  <span>Objectif principal : Intégration autonome et réduction immédiate de la charge de travail de l&apos;équipe.</span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
