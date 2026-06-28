export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  tagline: string;
  details: string[];
  type: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  bullets: string[];
}

export interface PostureItem {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface PlanStep {
  period: string;
  title: string;
  description: string;
}

export const heroData = {
  firstName: "BRUNO",
  lastName: "MOREAU",
  title: "Supply Chain, Achats & Transformation Opérationnelle",
  quote: "Transformer la donnée brute en performance logistique hautement rentable et mesurable.",
  admission: "Admis au MS Manager de la Chaîne Logistique & Achats (SKEMA Rentrée 2026)",
  perimeters: [
    "Pilotage des Flux",
    "Performance Achats & SRM",
    "Amélioration Continue"
  ]
};

export const experiences: Experience[] = [
  {
    id: "aptar",
    company: "Aptar Beauty",
    role: "Apprentissage",
    period: "Oct. 2023 - 2026",
    tagline: "Industrie manufacturière premium (Packaging de Luxe) — Portefeuille global : 12.5 M€",
    details: [
      "Interface Transverse : Relation quotidienne Ventes, Supply Chain usine, ADV & Qualité.",
      "Régulation : Analyse fine des contraintes d'ordonnancement (MOQ, lead times & risques rupture).",
      "Systèmes : Fiabilisation et mise à jour structurée des bases de données sur SAP ERP et CRM C4C."
    ],
    type: "Apprentissage"
  },
  {
    id: "keanik",
    company: "Keanik",
    role: "Projets & Business Dev.",
    period: "Mars 2023 - Juillet 2023",
    tagline: "Cabinet conseil & plateforme digitale innovante",
    details: [
      "UX/UI : Conception fonctionnelle et architecture de l'information pour la plateforme digitale.",
      "Marché : Cartographie des marchés photovoltaïques/éoliens et qualification de leads (Afrique/Europe)."
    ],
    type: "Stage / Projet"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Supply Chain & Pilotage des Flux",
    iconName: "Truck",
    description: "Coordination et optimisation globale de la chaîne logistique",
    bullets: [
      "Suivi chirurgical des lead times d'approvisionnement",
      "Coordination des instances S&OP et planification",
      "Arbitrage stratégique des capacités de lignes industrielles",
      "Respect strict des accords contractuels (SLA)"
    ]
  },
  {
    title: "Sourcing & Achats Stratégiques",
    iconName: "TrendingUp",
    description: "Optimisation de la performance achats et relations fournisseurs (SRM)",
    bullets: [
      "Rationalisation rigoureuse des panels fournisseurs globaux",
      "Modélisation avancée du Coût Global d'Acquisition (TCO)",
      "Cartographie complète des risques d'approvisionnement"
    ]
  },
  {
    title: "Data Analytics & Systèmes",
    iconName: "BarChart3",
    description: "Analyse décisionnelle et maîtrise des outils d'information",
    bullets: [
      "Construction et déploiement de tableaux de bord décisionnels Power BI",
      "Maîtrise des requêtes complexes et traitement de volumes massifs",
      "Manipulation experte de données via MS Excel avancé"
    ]
  }
];

export const expertiseBadges = [
  "LEAN MANAGEMENT",
  "SAP ERP",
  "RISK MANAGEMENT",
  "EXCEL EXPERT",
  "POWER BI"
];

export const postureData = {
  quote: "Je maîtrise la méthode : structurer l'information fragmentée et exécuter proprement pour soulager mon équipe.",
  items: [
    {
      number: 1,
      title: "La Discipline de la Boxe",
      subtitle: "Pratiquant de Muay Thaï & Boxe Anglaise",
      description: "Application de la rigueur du ring au quotidien : résilience face aux imprévus, gestion optimale du stress en période critique et régularité totale dans l'effort.",
      iconName: "Activity"
    },
    {
      number: 2,
      title: "L'Agilité Multiculturelle Native",
      subtitle: "Double culture franco-brésilienne",
      description: "Maîtrise de 4 langues opérationnelles (Français, Portugais, Anglais, Espagnol). Un facilitateur clé pour le management du changement à l'international.",
      iconName: "Globe"
    }
  ]
};

export const planSteps: PlanStep[] = [
  {
    period: "JOURS 1 À 30",
    title: "S'IMPREGNER & COMPRENDRE",
    description: "Assimilation rapide de l'écosystème produits, modélisation technique des flux et diagnostic des irritants opérationnels sur le terrain."
  },
  {
    period: "JOURS 31 À 60",
    title: "CONTRIBUER & STRUCTURER",
    description: "Prise en main pleinement autonome des suivis de KPIs critiques et sécurisation/fiabilisation des flux de données dans SAP."
  },
  {
    period: "JOURS 61 À 90+",
    title: "SÉCURISER & VALORISER",
    description: "Gestion complète d'un sous-périmètre de flux logistique, pilotage actif des risques de rupture et force de proposition continue."
  }
];

export const contactData = {
  title: "DISPONIBILITÉ & CONTACT",
  availability: "Recherche d'alternance dès le mois d'août 2026 en Île-de-France (Rythme adapté SKEMA).",
  email: "bmoreau7@outlook.com",
  phone: "+33 7 61 96 93 38",
  location: "Basé à Paris / Île-de-France"
};
