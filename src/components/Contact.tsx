import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Calendar, Copy, Check, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { contactData } from "../data";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<"email" | "phone" | null>(null);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopy = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", company: "", email: "", message: "" });
      setTimeout(() => setIsSuccess(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-brand-navy text-white relative overflow-hidden">
      {/* Visual Accents */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-rust/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-slate-800/20 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
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
              Prendre Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            Disponibilité & Contact
          </h2>
          <p className="text-slate-400 text-sm font-mono mt-1 uppercase tracking-widest">
            — Discutons de votre opportunité d&apos;alternance
          </p>
        </motion.div>

        {/* Content Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch"
        >
          
          {/* Left Column: Dark Profile & Availability info */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-slate-950/40 border border-slate-800/80 rounded-3xl p-8 shadow-xl">
            <div className="space-y-8">
              
              {/* Availability Alert Banner */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-brand-rust-light/10 text-brand-rust border border-brand-rust/20 px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase tracking-wider">
                  <Calendar size={12} />
                  <span>Statut Actuel</span>
                </div>
                <p className="text-base sm:text-lg font-display font-medium text-slate-100 leading-relaxed">
                  Recherche d&apos;alternance dès le mois de{" "}
                  <strong className="text-brand-rust font-bold underline decoration-brand-rust/40 decoration-2 underline-offset-4">
                    août 2026
                  </strong>{" "}
                  en Île-de-France (Rythme adapté SKEMA).
                </p>
              </div>

              {/* Direct Info list with copies */}
              <div className="space-y-4 border-t border-slate-800/80 pt-6">
                
                {/* Email item */}
                <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800/40 rounded-2xl group hover:border-brand-rust/20 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-rust-light/10 text-brand-rust flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">E-mail</span>
                      <a href={`mailto:${contactData.email}`} className="block font-mono text-sm text-slate-200 hover:text-brand-rust hover:underline transition-colors mt-0.5">
                        {contactData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(contactData.email, "email")}
                    className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
                    title="Copier l'adresse email"
                  >
                    {copiedType === "email" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone item */}
                <div className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800/40 rounded-2xl group hover:border-brand-rust/20 transition-all">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-rust-light/10 text-brand-rust flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">Téléphone</span>
                      <a href={`tel:${contactData.phone}`} className="block font-mono text-sm text-slate-200 hover:text-brand-rust hover:underline transition-colors mt-0.5">
                        {contactData.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(contactData.phone, "phone")}
                    className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none"
                    title="Copier le numéro"
                  >
                    {copiedType === "phone" ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location item */}
                <div className="flex items-center gap-3.5 p-4 bg-slate-900/50 border border-slate-800/40 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-brand-rust-light/10 text-brand-rust flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono text-slate-500 uppercase tracking-widest">Localisation</span>
                    <span className="block font-display font-semibold text-sm text-slate-200 mt-0.5">
                      {contactData.location}
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick response note */}
            <div className="mt-8 text-xs text-slate-500 font-mono leading-relaxed border-t border-slate-800/80 pt-6">
              * Réponse garantie sous 24 heures pour toute demande d&apos;entretien ou de dossier complémentaire.
            </div>
          </div>

          {/* Right Column: Secure Interactive Mailbox Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-8 shadow-xl border border-slate-200 flex flex-col justify-between h-full">
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="text-xl font-display font-bold text-brand-navy">
                        Formulaire d&apos;Entretien
                      </h3>
                      <p className="text-xs text-slate-500 font-mono mt-0.5 uppercase tracking-wide">
                        — Planifier une rencontre ou demander des détails
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Nom & Prénom *</label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Alexandre Martin"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-brand-rust rounded-xl px-4 py-3.5 text-sm transition-all outline-none"
                        />
                      </div>
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Entreprise / Cabinet</label>
                        <input
                          type="text"
                          placeholder="Ex: LVMH, Hermès, Capgemini..."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-brand-rust rounded-xl px-4 py-3.5 text-sm transition-all outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Adresse E-mail *</label>
                      <input
                        type="email"
                        required
                        placeholder="Ex: rrh@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-brand-rust rounded-xl px-4 py-3.5 text-sm transition-all outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-500 uppercase">Votre Message *</label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Bonjour Bruno, votre profil nous intéresse pour notre service Supply Chain / Achats..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-brand-rust rounded-xl px-4 py-3.5 text-sm transition-all outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group flex items-center justify-center gap-2 font-mono font-bold text-sm text-white bg-brand-navy hover:bg-brand-rust disabled:bg-slate-400 transition-all py-4 rounded-xl shadow-md cursor-pointer focus:outline-none"
                    >
                      <span>{isSubmitting ? "Envoi en cours..." : "Envoyer mon message"}</span>
                      <Send size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                      <CheckCircle2 size={32} className="animate-bounce" />
                    </div>
                    
                    <div className="space-y-2 max-w-md">
                      <h3 className="text-2xl font-display font-bold text-brand-navy">
                        Message Envoyé avec Succès !
                      </h3>
                      <p className="text-slate-600 text-sm font-sans leading-relaxed">
                        Merci pour votre message ! Une notification simulée a été enregistrée. Bruno vous recontactera dans les plus brefs délais pour planifier un entretien.
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsSuccess(false)}
                      className="text-xs font-mono font-bold text-brand-rust hover:underline pt-4"
                    >
                      Envoyer un autre message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
