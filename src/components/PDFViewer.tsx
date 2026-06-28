import { X, ArrowLeft, ArrowRight, Download, Eye, Award } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { planSteps, experiences, skillCategories, expertiseBadges } from "../data";

interface PDFViewerProps {
  isOpen: boolean;
  onClose: () => void;
  officeImg: string;
  factoryImg: string;
  boxingImg: string;
}

export default function PDFViewer({ isOpen, onClose, officeImg, factoryImg, boxingImg }: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  const totalPages = 5;

  const handleDownloadSimulatedPDF = () => {
    setDownloadSuccess(true);
    // Triggers file download simulation
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-brand-navy/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-brand-beige w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 relative z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header controls */}
            <div className="bg-white border-b border-slate-200/60 p-4 sm:px-6 flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-slate-800 text-sm sm:text-base leading-none">
                  Dossier de Présentation Professionnelle.pdf
                </h3>
                <span className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-widest block">
                  Interactive Slideshow — Page {currentPage + 1} sur {totalPages}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleDownloadSimulatedPDF}
                  className="flex items-center gap-1.5 text-xs font-mono font-bold text-white bg-brand-rust hover:bg-brand-navy transition-all px-3.5 py-2 rounded-lg shadow-sm"
                >
                  <Download size={14} />
                  <span>{downloadSuccess ? "Téléchargé ✔" : "Télécharger"}</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
                  aria-label="Fermer"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Slides Viewport */}
            <div className="p-6 overflow-y-auto grow flex items-center justify-center bg-slate-100">
              <div className="w-full max-w-3xl aspect-[16/9] bg-white rounded-2xl shadow-lg border border-slate-200/80 overflow-hidden relative">
                
                {/* PAGE 1: Landing Slide */}
                {currentPage === 0 && (
                  <div className="w-full h-full grid grid-cols-12 relative bg-[#F9F8F6]">
                    <div className="col-span-7 p-8 flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        <div>
                          <h1 className="text-4xl font-display font-black text-brand-navy tracking-tight leading-none">
                            BRUNO
                          </h1>
                          <h1 className="text-4xl font-display font-black text-brand-rust tracking-tight leading-none mt-1">
                            MOREAU
                          </h1>
                        </div>
                        <p className="text-lg font-display font-bold text-slate-700 leading-tight">
                          Supply Chain, Achats & Transformation Opérationnelle
                        </p>
                      </div>

                      <div className="bg-[#FAF2EE] border border-brand-rust/20 p-4 rounded-xl">
                        <p className="text-xs sm:text-sm font-display font-medium italic text-slate-700 leading-relaxed">
                          &ldquo;Transformer la donnée brute en performance logistique hautement rentable et mesurable.&rdquo;
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 bg-white/60 p-2 rounded-lg border border-slate-200/40">
                        <Award size={14} className="text-brand-rust" />
                        <span>Admis au MS Manager de la Chaîne Logistique & Achats (SKEMA Rentrée 2026)</span>
                      </div>

                      <div className="border-t border-slate-200 pt-3">
                        <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Périmètres Clés :</span>
                        <p className="text-[11px] font-display font-bold text-brand-navy mt-1">
                          Pilotage des Flux | Performance Achats & SRM | Amélioration Continue
                        </p>
                      </div>
                    </div>
                    <div className="col-span-5 relative h-full">
                      <img src={officeImg} className="w-full h-full object-cover" alt="Office" referrerPolicy="no-referrer" />
                      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F9F8F6] to-transparent" />
                    </div>
                  </div>
                )}

                {/* PAGE 2: Experiences Slide */}
                {currentPage === 1 && (
                  <div className="w-full h-full grid grid-cols-12 relative bg-[#F9F8F6]">
                    <div className="col-span-7 p-8 flex flex-col justify-between h-full">
                      <div>
                        <div className="border-l-4 border-brand-rust pl-3">
                          <h2 className="text-xl font-display font-bold text-brand-navy uppercase tracking-tight">
                            Expérience & Réalité Terrain
                          </h2>
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Immersion Industrielle</span>
                        </div>

                        <div className="mt-5 space-y-4">
                          {/* Aptar */}
                          <div className="space-y-1">
                            <div className="flex justify-between items-baseline">
                              <h3 className="font-display font-bold text-sm text-brand-navy">Aptar Beauty — Apprentissage</h3>
                              <span className="text-[9px] font-mono font-bold text-brand-rust">Oct. 2023 - 2026</span>
                            </div>
                            <p className="text-[10px] text-slate-500 italic">Industrie manufacturière premium (Packaging de Luxe) — 12.5 M€</p>
                            <ul className="text-[9px] text-slate-600 pl-4 list-disc space-y-0.5 mt-1">
                              <li>Interface Transverse : Relation quotidienne Ventes, Supply Chain, ADV & Qualité</li>
                              <li>Régulation : Analyse fine des contraintes d&apos;ordonnancement (MOQ, lead times)</li>
                              <li>Systèmes : Fiabilisation des bases de données SAP ERP & CRM C4C</li>
                            </ul>
                          </div>

                          {/* Keanik */}
                          <div className="space-y-1">
                            <div className="flex justify-between items-baseline">
                              <h3 className="font-display font-bold text-sm text-brand-navy">Keanik — Projets & Business Dev.</h3>
                              <span className="text-[9px] font-mono font-bold text-brand-rust">Mars 2023 - Juillet 2023</span>
                            </div>
                            <p className="text-[10px] text-slate-500 italic">Cabinet de conseil & plateforme digitale innovante</p>
                            <ul className="text-[9px] text-slate-600 pl-4 list-disc space-y-0.5 mt-1">
                              <li>UX/UI : Conception fonctionnelle & architecture de l&apos;information</li>
                              <li>Marché : Cartographie photovoltaïque/éolienne, qualification de leads</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="text-[9px] font-mono text-slate-400 border-t border-slate-200/50 pt-2">
                        * Immersion concrète en ateliers de production de haute technologie.
                      </div>
                    </div>

                    <div className="col-span-5 relative h-full">
                      <img src={factoryImg} className="w-full h-full object-cover" alt="Factory" referrerPolicy="no-referrer" />
                      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F9F8F6] to-transparent" />
                    </div>
                  </div>
                )}

                {/* PAGE 3: Competences Slide */}
                {currentPage === 2 && (
                  <div className="w-full h-full p-8 flex flex-col justify-between bg-[#F9F8F6]">
                    <div>
                      <div className="border-l-4 border-brand-rust pl-3 mb-4">
                        <h2 className="text-xl font-display font-bold text-brand-navy uppercase tracking-tight">
                          Compétences Métier & Alignement
                        </h2>
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Matrice de Valeur</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mt-6">
                        {skillCategories.map((cat, cIdx) => (
                          <div key={cat.title} className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs space-y-2">
                            <h3 className="font-display font-bold text-xs text-brand-navy leading-tight">{cat.title}</h3>
                            <ul className="text-[8px] text-slate-500 space-y-1 list-disc pl-3">
                              {cat.bullets.slice(0, 3).map((b, bIdx) => (
                                <li key={bIdx}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest block">Badges d&apos;Expertises Directes :</span>
                      <div className="flex flex-wrap gap-1.5">
                        {expertiseBadges.map((badge) => (
                          <span key={badge} className="bg-brand-navy text-white text-[8px] font-mono font-bold px-2.5 py-1 rounded-md">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* PAGE 4: Posture Slide */}
                {currentPage === 3 && (
                  <div className="w-full h-full grid grid-cols-12 relative bg-[#F9F8F6]">
                    <div className="col-span-7 p-8 flex flex-col justify-between h-full">
                      <div className="space-y-4">
                        <div className="border-l-4 border-brand-rust pl-3">
                          <h2 className="text-xl font-display font-bold text-brand-navy uppercase tracking-tight">
                            Posture & Valeur Ajoutée
                          </h2>
                          <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Qualités Humaines & Adaptabilité</span>
                        </div>

                        <p className="text-[11px] text-slate-700 italic font-medium bg-[#FAF2EE] p-3 rounded-lg border border-brand-rust/10 leading-relaxed">
                          &ldquo;Je maîtrise la méthode : structurer l&apos;information fragmentée et exécuter proprement pour soulager mon équipe.&rdquo;
                        </p>

                        <div className="space-y-3">
                          <div className="flex gap-2.5">
                            <span className="w-5 h-5 rounded bg-brand-navy text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0">1</span>
                            <div>
                              <h4 className="text-[11px] font-display font-bold text-brand-navy">La Discipline de la Boxe</h4>
                              <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Muay Thaï & Boxe Anglaise : résilience aux imprévus, gestion du stress critique.</p>
                            </div>
                          </div>

                          <div className="flex gap-2.5">
                            <span className="w-5 h-5 rounded bg-brand-navy text-white text-[10px] font-mono font-bold flex items-center justify-center shrink-0">2</span>
                            <div>
                              <h4 className="text-[11px] font-display font-bold text-brand-navy">L&apos;Agilité Multiculturelle Native</h4>
                              <p className="text-[9px] text-slate-500 leading-tight mt-0.5">Double culture FR-BR. Maîtrise opérationnelle de 4 langues.</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-[9px] font-mono text-slate-400 border-t border-slate-200/50 pt-2">
                        * Approche pragmatique, axée sur les faits et orientée résultats.
                      </div>
                    </div>

                    <div className="col-span-5 relative h-full">
                      <img src={boxingImg} className="w-full h-full object-cover" alt="Boxing Gloves" referrerPolicy="no-referrer" />
                      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F9F8F6] to-transparent" />
                    </div>
                  </div>
                )}

                {/* PAGE 5: Integration Slide */}
                {currentPage === 4 && (
                  <div className="w-full h-full p-8 flex flex-col justify-between bg-[#F9F8F6]">
                    <div>
                      <div className="border-l-4 border-brand-rust pl-3">
                        <h2 className="text-xl font-display font-bold text-brand-navy uppercase tracking-tight">
                          Intégration & Plan à 90 Jours
                        </h2>
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">Plan d&apos;action d&apos;alternance</span>
                      </div>

                      <div className="grid grid-cols-3 gap-3.5 mt-6">
                        {planSteps.map((step, sIdx) => (
                          <div key={step.period} className="bg-white p-3.5 rounded-xl border border-slate-200/60 shadow-xs space-y-1.5">
                            <span className="text-[8px] font-mono font-bold text-brand-rust block">{step.period}</span>
                            <h4 className="text-[10px] font-display font-bold text-brand-navy">{step.title}</h4>
                            <p className="text-[8px] text-slate-500 leading-tight">{step.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-brand-navy text-white rounded-xl p-3.5 border border-slate-800 flex items-center justify-between gap-4 mt-4">
                      <div>
                        <span className="text-[8px] font-mono text-brand-rust uppercase tracking-widest block font-bold">Disponibilité immédiate</span>
                        <p className="text-[10px] font-display font-semibold text-slate-200 mt-0.5">
                          Alternance dès août 2026 en IDF (Rythme SKEMA) — bmoreau7@outlook.com
                        </p>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0">Paris / Île-de-France</span>
                    </div>
                  </div>
                )}

              </div>
            </div>

            {/* Slider footer controls */}
            <div className="bg-white border-t border-slate-200/60 p-4 px-6 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">
                Utilisez les boutons de navigation pour feuilleter le dossier
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2 border border-slate-200 text-slate-600 hover:text-brand-rust hover:bg-slate-50 rounded-lg transition-colors focus:outline-none"
                  aria-label="Précédent"
                >
                  <ArrowLeft size={16} />
                </button>
                <span className="text-xs font-mono text-slate-600 px-2">
                  Page {currentPage + 1} / {totalPages}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 border border-slate-200 text-slate-600 hover:text-brand-rust hover:bg-slate-50 rounded-lg transition-colors focus:outline-none"
                  aria-label="Suivant"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
