import { useState, useMemo } from "react";
import { Truck, TrendingUp, BarChart3, HelpCircle, ShieldAlert, CheckCircle, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import { skillCategories, expertiseBadges } from "../data";

export default function Competences() {
  // Interactive Simulation State
  const [leadTime, setLeadTime] = useState<number>(15); // Days
  const [moq, setMoq] = useState<number>(500); // Units
  const [volatility, setVolatility] = useState<"low" | "medium" | "high">("medium");
  const [annualDemand] = useState<number>(12000); // Fixed annual demand

  // Calculate dynamic metrics
  const simulationResults = useMemo(() => {
    // 1. Safety Stock estimation
    let volatilityFactor = 1.65; // Z-score for 95% service level
    let dailyStdDev = 5;
    if (volatility === "low") dailyStdDev = 2;
    if (volatility === "high") dailyStdDev = 12;

    // Safety Stock = Z * stdDev * sqrt(LeadTime)
    const safetyStock = Math.round(volatilityFactor * dailyStdDev * Math.sqrt(leadTime));

    // 2. Average Cycle Stock = MOQ / 2
    const cycleStock = moq / 2;

    // 3. Average Inventory = Cycle Stock + Safety Stock
    const avgInventory = cycleStock + safetyStock;

    // 4. Holding Cost (simulated at €5 per unit per year)
    const holdingCost = avgInventory * 5;

    // 5. Order Frequency (Annual Demand / MOQ)
    const orderFreq = Math.round((annualDemand / moq) * 10) / 10;

    // 6. Stockout Risk (Higher if Safety Stock is too low relative to volatility and lead time)
    let stockoutRiskScore = (dailyStdDev * leadTime) / (safetyStock || 1);
    let riskLevel: "Faible" | "Modéré" | "Critique" = "Faible";
    let riskColor = "text-emerald-600 bg-emerald-50 border-emerald-200";
    
    if (stockoutRiskScore > 1.8) {
      riskLevel = "Critique";
      riskColor = "text-rose-600 bg-rose-50 border-rose-200";
    } else if (stockoutRiskScore > 0.9) {
      riskLevel = "Modéré";
      riskColor = "text-amber-600 bg-amber-50 border-amber-200";
    }

    // 7. S&OP Balance Score (Targeting optimal order frequency and safe inventory levels)
    // Overstocking if avg inventory is > 20% of annual demand. Understocking if risk is Critique.
    let balanceScore = 100;
    if (riskLevel === "Critique") balanceScore -= 35;
    if (riskLevel === "Modéré") balanceScore -= 15;
    
    // Inventory holding penalty
    if (holdingCost > 4500) balanceScore -= 20;
    else if (holdingCost > 3000) balanceScore -= 10;

    // Order frequency penalty (too high order frequency wears down supply chain, too low indicates bad inventory turns)
    if (orderFreq > 30) balanceScore -= 15;
    if (orderFreq < 3) balanceScore -= 10;

    balanceScore = Math.max(20, Math.min(100, balanceScore));

    return {
      safetyStock,
      avgInventory,
      holdingCost,
      orderFreq,
      riskLevel,
      riskColor,
      balanceScore,
    };
  }, [leadTime, moq, volatility, annualDemand]);

  // Reset function to optimal baseline
  const handleResetSimulation = () => {
    setLeadTime(15);
    setMoq(500);
    setVolatility("medium");
  };

  return (
    <section id="competences" className="py-24 bg-white relative">
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
              Matrice de Valeur
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-brand-navy">
            Compétences Métier & Alignement
          </h2>
          <p className="text-slate-500 text-sm font-mono mt-1 uppercase tracking-widest">
            — Modélisation, négociation et optimisation des flux
          </p>
        </motion.div>

        {/* Competences list / Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Professional Competences list & Badges */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              {skillCategories.map((cat, idx) => {
                const getIcon = (name: string) => {
                  switch (name) {
                    case "Truck": return <Truck className="text-brand-rust" size={24} />;
                    case "TrendingUp": return <TrendingUp className="text-brand-rust" size={24} />;
                    case "BarChart3": return <BarChart3 className="text-brand-rust" size={24} />;
                    default: return <Truck className="text-brand-rust" size={24} />;
                  }
                };

                return (
                  <motion.div
                    key={cat.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 0.99, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.015,
                      borderColor: "rgba(186, 95, 61, 0.45)",
                      boxShadow: "0 12px 24px -10px rgba(0, 0, 0, 0.08)"
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      opacity: { duration: 0.5, delay: idx * 0.1 },
                      y: { type: "spring", stiffness: 260, damping: 20 }
                    }}
                    className="p-6 bg-brand-beige/25 border border-slate-200/50 rounded-2xl flex gap-4 items-start cursor-pointer"
                  >
                    <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm shrink-0">
                      {getIcon(cat.iconName)}
                    </div>
                    
                    <div className="space-y-3 w-full">
                      <div>
                        <h3 className="font-display font-bold text-lg text-brand-navy leading-tight">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-500 font-mono mt-1 uppercase tracking-wide">
                          {cat.description}
                        </p>
                      </div>

                      <ul className="space-y-2 border-t border-slate-200/40 pt-2.5">
                        {cat.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-rust mt-1.5 shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Badges d'expertises directes */}
            <div className="bg-brand-clay border border-slate-200/60 rounded-2xl p-6 space-y-3.5">
              <h4 className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                Expertises Opérationnelles Directes
              </h4>
              <div className="flex flex-wrap gap-2">
                {expertiseBadges.map((badge) => (
                  <span
                    key={badge}
                    className="bg-brand-navy text-white hover:bg-brand-rust transition-colors text-xs font-mono font-bold px-3 py-1.5 rounded-lg shadow-sm"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Live Interactive Supply Chain Simulator */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 relative overflow-hidden"
            >
              {/* Background styling elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-rust/5 rounded-full -mr-24 -mt-24 pointer-events-none" />
              
              {/* Title of Simulator */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-brand-rust uppercase font-bold">
                    Outil décisionnel S&OP
                  </span>
                  <h3 className="text-xl font-display font-bold text-white mt-1">
                    Simulateur de Flux & Risques
                  </h3>
                </div>
                
                <button
                  onClick={handleResetSimulation}
                  title="Réinitialiser"
                  className="p-2 bg-slate-800 hover:bg-brand-rust hover:text-white text-slate-400 rounded-lg transition-colors focus:outline-none"
                >
                  <RefreshCw size={14} />
                </button>
              </div>

              {/* Slider Slates */}
              <div className="space-y-6 mb-8">
                
                {/* 1. Lead time Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>DÉLAI D&apos;APPROVISIONNEMENT (LEAD TIME)</span>
                    <span className="text-brand-rust font-bold">{leadTime} jours</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="45"
                    step="1"
                    value={leadTime}
                    onChange={(e) => setLeadTime(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-rust focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>5j (Ultra-court)</span>
                    <span>45j (Asiatique/Maritime)</span>
                  </div>
                </div>

                {/* 2. MOQ Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>QUANTITÉ MINIMALE DE COMMANDE (MOQ)</span>
                    <span className="text-brand-rust font-bold">{moq} unités</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="50"
                    value={moq}
                    onChange={(e) => setMoq(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-brand-rust focus:outline-none"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>100u (Flux tendu)</span>
                    <span>2000u (Haute cadence)</span>
                  </div>
                </div>

                {/* 3. Volatility Buttons */}
                <div className="space-y-2.5">
                  <span className="text-xs font-mono text-slate-400 block">
                    VOLATILITÉ & VARIABILITÉ DE LA DEMANDE client
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    {(["low", "medium", "high"] as const).map((level) => {
                      const labels = { low: "Faible (Stable)", medium: "Moyenne", high: "Forte (Saisonnière)" };
                      const active = volatility === level;
                      return (
                        <button
                          key={level}
                          type="button"
                          onClick={() => setVolatility(level)}
                          className={`py-2 px-3 rounded-lg text-xs font-medium font-mono border transition-all focus:outline-none ${
                            active
                              ? "bg-brand-rust text-white border-brand-rust shadow-sm"
                              : "bg-slate-800/55 hover:bg-slate-800 text-slate-300 border-slate-700/60"
                          }`}
                        >
                          {labels[level]}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>

              {/* Dynamic Outputs (Calculated results) */}
              <div className="bg-slate-950/65 rounded-2xl p-5 border border-slate-800/80 space-y-5">
                
                {/* Score bar */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-xs font-mono text-slate-400">SCORE D&apos;OPTIMISATION DU FLUX (S&OP)</span>
                    <span className={`text-sm font-display font-bold ${
                      simulationResults.balanceScore >= 80 ? "text-emerald-400" :
                      simulationResults.balanceScore >= 60 ? "text-amber-400" : "text-rose-400"
                    }`}>
                      {simulationResults.balanceScore}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        simulationResults.balanceScore >= 80 ? "bg-emerald-500" :
                        simulationResults.balanceScore >= 60 ? "bg-amber-500" : "bg-rose-500"
                      }`}
                      style={{ width: `${simulationResults.balanceScore}%` }}
                    />
                  </div>
                </div>

                {/* Metrics row */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Stock de Sécurité Requis</span>
                    <span className="text-xl font-display font-bold text-white mt-0.5 block">
                      {simulationResults.safetyStock} <span className="text-xs text-slate-500 font-sans font-medium">unités</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Coût de Stockage Estimé</span>
                    <span className="text-xl font-display font-bold text-brand-rust mt-0.5 block">
                      {simulationResults.holdingCost.toLocaleString()} € <span className="text-xs text-slate-500 font-sans font-medium">/ an</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Fréquence de Commande</span>
                    <span className="text-xl font-display font-bold text-white mt-0.5 block">
                      {simulationResults.orderFreq} <span className="text-xs text-slate-500 font-sans font-medium">fois/an</span>
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">Statut Risque de Rupture</span>
                    <span className={`inline-block text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md border mt-1.5 ${
                      simulationResults.riskLevel === "Faible" ? "bg-emerald-950/40 text-emerald-400 border-emerald-900/60" :
                      simulationResults.riskLevel === "Modéré" ? "bg-amber-950/40 text-amber-400 border-amber-900/60" :
                      "bg-rose-950/40 text-rose-400 border-rose-900/60"
                    }`}>
                      {simulationResults.riskLevel}
                    </span>
                  </div>
                </div>

                {/* Recommendation explanation based on S&OP Balance */}
                <div className="text-xs text-slate-400 border-t border-slate-800/80 pt-3.5 flex gap-2.5 items-start">
                  {simulationResults.balanceScore >= 80 ? (
                    <CheckCircle size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <ShieldAlert size={14} className="text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <p className="leading-relaxed font-sans">
                    {simulationResults.balanceScore >= 80 && (
                      <span><strong>Flux optimal :</strong> Les délais et volumes de commandes sont parfaitement calibrés. Le stock de sécurité absorbe les ruptures sans surcharger l&apos;entrepôt.</span>
                    )}
                    {simulationResults.balanceScore >= 60 && simulationResults.balanceScore < 80 && (
                      <span><strong>Alerte équilibre :</strong> Votre coût de stockage augmente de façon excessive ou votre risque de rupture nécessite une attention particulière. Envisagez de renégocier les MOQ.</span>
                    )}
                    {simulationResults.balanceScore < 60 && (
                      <span><strong>Risque de rupture ou surstock critique :</strong> Vos paramètres actuels créent un goulot d&apos;étranglement logistique. Réduisez le Lead Time ou augmentez la couverture.</span>
                    )}
                  </p>
                </div>

              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
