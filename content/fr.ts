import { certFiles as f } from "./shared";
import type { CV } from "./types";

/**
 * Contenu en français (version /fr).
 * Typographie française : espace insécable (\u00a0) avant les deux-points.
 */
export const fr: CV = {
  lang: "fr",
  htmlLang: "fr-FR",
  ogLocale: "fr_FR",

  ui: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      experience: "Expérience",
      education: "Formation",
      projects: "Projets",
      contact: "Contact",
    },
    navAria: "Principal",
    languageAria: "Langue",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    skipToContent: "Aller au contenu",
    sendEmail: "Envoyer un e-mail",
    viewLinkedIn: "Voir LinkedIn",
    downloadCv: "Télécharger le CV",
    photoAlt: "Photo de",
    strengthsAria: "Qualités",
    aboutTitle: "À propos de moi",
    skillsTitle: "Outils et compétences",
    skillsIntro: "Ce que j'utilise au quotidien pour passer de données brutes à des décisions fondées.",
    toolsTitle: "Outils",
    experienceTitle: "Expérience professionnelle",
    experienceIntro:
      "De la recherche universitaire à l'entrepreneuriat\u00a0: toujours avec les données au cœur des décisions.",
    tagsAria: "Outils et domaines",
    projectsLabel: "Projets\u00a0:",
    educationTitle: "Formation et certifications",
    certificationsTitle: "Certifications",
    certificationsHint: "Cliquez sur un certificat pour l'ouvrir.",
    pdfCertificate: "(certificat PDF, s'ouvre dans un nouvel onglet)",
    pdfFile: "(PDF, s'ouvre dans un nouvel onglet)",
    languagesTitle: "Langues",
    levelAria: "Niveau",
    cefrNote: "Échelle européenne CECRL, de A1 à C2.",
    publicationsTitle: "Publications et activité universitaire",
    projectsTitle: "Projets de recherche",
    projectsIntro:
      "Projets auxquels j'ai participé pendant mon master et ma licence, avec toujours la collecte et l'analyse de données au centre.",
    topicsAria: "Thèmes",
    masters: "Master",
    bachelor: "Licence",
    contactTitle: "À la recherche de ma prochaine équipe data",
    contactText:
      "Je suis disponible pour des postes de Data Analyst au Portugal et en Europe. Si votre équipe a besoin de quelqu'un qui transforme les données en décisions, parlons-en.",
  },

  role: "Data Analyst",
  tagline:
    "Plus de 7 ans à transformer les données en décisions\u00a0: analyse de données clients et marché, segmentations et tableaux de bord de KPI.",

  about: [
    "Docteure en tourisme, j'ai plus de 7 ans d'expérience en analyse de données quantitatives et qualitatives, avec un accent sur le comportement du consommateur. J'oriente aujourd'hui ce parcours vers l'analyse de données.",
    "Je travaille sur l'ensemble du cycle des données\u00a0: conception de la collecte, nettoyage, validation, analyse et, surtout, communication des résultats. Je construis des tableaux de bord et des rapports de KPI pour des publics techniques et non techniques.",
    "J'ai de l'expérience avec SPSS, Excel, R, NVivo et Power BI, et je consolide mes compétences en SQL et Python grâce à des formations et à des projets pratiques. De nationalité française et brésilienne, je suis autorisée à travailler au Portugal et dans toute l'UE.",
  ],

  strengths: ["Esprit analytique", "Bonne communication", "Rigueur avec les données", "Esprit critique"],

  stats: [
    { value: "7+", label: "ans d'analyse de données quantitatives et qualitatives" },
    { value: "4", label: "langues, dont trois utilisées dans des rapports et des présentations" },
    { value: "10+", label: "certifications en données, produit et gestion agile" },
    { value: "Ph.D.", label: "axé sur le comportement du consommateur" },
  ],

  toolGroups: [
    { label: "Expérience pratique", level: 3, items: ["R", "SPSS", "NVivo", "Excel", "Power BI"] },
    { label: "En cours de consolidation", level: 0, items: ["SQL", "Python"] },
  ],

  competencies: [
    {
      icon: "stats",
      title: "Analyse statistique",
      text: "Analyse quantitative et qualitative, tests d'hypothèses et analyse d'impact pour valider les conclusions avant de les partager.",
    },
    {
      icon: "users",
      title: "Comportement du consommateur",
      text: "Segmentation et identification de tendances de consommation qui orientent les décisions de l'entreprise.",
    },
    {
      icon: "target",
      title: "KPI et performance",
      text: "Définition d'indicateurs, suivi continu et lecture critique de ce que disent les chiffres.",
    },
    {
      icon: "dashboard",
      title: "Tableaux de bord et visualisation",
      text: "Tableaux de bord et rapports pensés pour ceux qui les utilisent, des équipes techniques à la direction.",
    },
    {
      icon: "filter",
      title: "Qualité des données",
      text: "Collecte, nettoyage et validation des données de bout en bout, avec des processus documentés et reproductibles.",
    },
    {
      icon: "message",
      title: "Communication avec les parties prenantes",
      text: "Résultats expliqués clairement en portugais, en anglais et en français, en mode hybride et à distance.",
    },
  ],

  experience: [
    {
      role: "Data Analyst et doctorante-chercheuse",
      note: "Boursière FCT",
      org: "Université d'Aveiro, GOVCOPP",
      place: "Portugal",
      period: "oct. 2021 – juil. 2026",
      bullets: [
        "J'ai analysé des données quantitatives et qualitatives sur le comportement du consommateur, en identifiant des schémas, des segments et des tendances qui ont soutenu des recommandations stratégiques.",
        "J'ai construit des tableaux de bord et des rapports de KPI adaptés à des publics techniques et non techniques, en portugais, en anglais et en français.",
        "J'ai géré le cycle des données de bout en bout\u00a0: conception de questionnaires, collecte, nettoyage, validation et analyse sous R, SPSS et NVivo.",
        "J'ai appliqué des tests d'hypothèses et des analyses d'impact pour valider les résultats avant de les communiquer.",
        "J'ai collaboré avec des équipes pluridisciplinaires au Portugal et en Europe, en mode hybride et à distance.",
      ],
      tags: ["R", "SPSS", "NVivo", "Excel", "Tableaux de bord"],
      projects: [],
    },
    {
      role: "Fondatrice et analyste de marché",
      note: "Bon Vivant",
      org: "Programme StartUP Voucher, IAPMEI",
      place: "Portugal",
      period: "juin 2020 – juin 2021",
      bullets: [
        "J'ai analysé des données de marché et de comportement du consommateur pour valider le modèle économique et orienter les décisions produit.",
        "J'ai conçu une application numérique pour le secteur du tourisme, de la définition des besoins à l'approbation par l'IAPMEI.",
      ],
      tags: ["Analyse de marché", "Produit numérique"],
      projects: [],
    },
    {
      role: "Chercheuse en master",
      org: "Master en tourisme",
      place: "",
      period: "2016 – 2018",
      bullets: [
        "J'ai analysé des données quantitatives et qualitatives sur le comportement du consommateur, la performance touristique et le comportement des touristes.",
        "J'ai produit des rapports et des tableaux de bord pour des parties prenantes universitaires et professionnelles.",
      ],
      tags: [],
      projects: ["marktur", "terroirtur"],
    },
    {
      role: "Projets de recherche en licence",
      org: "Université d'État de Ponta Grossa",
      place: "Brésil",
      period: "2013 – 2016",
      bullets: [
        "J'ai collecté et analysé des données sur les taux d'occupation hôtelière et le profil des touristes.",
        "J'ai traduit les résultats en rapports, tableaux de bord et présentations pour des parties prenantes universitaires.",
      ],
      tags: [],
      projects: ["competitividade", "qualificacao-internacional"],
    },
  ],

  earlierExperience: {
    title: "Expérience antérieure dans l'hôtellerie et le tourisme",
    items: [
      {
        org: "Hotel Planalto, Brésil",
        text: "Analyse des données de satisfaction client, procédures opérationnelles standard et méthode 5S.",
        period: "2015",
      },
      { org: "Hotel MS Maestranza, Malaga", text: "Réception et gestion des réservations internationales.", period: "2015" },
      {
        org: "TAM Viagens, Brésil",
        text: "Suivi des KPI de ventes et de satisfaction dans le système Amadeus.",
        period: "2012 – 2013",
      },
      { org: "Domaine viticole à Curitiba, Paraná", text: "Guide de visites œnotouristiques.", period: "" },
    ],
  },

  projects: [
    {
      id: "marktur",
      name: "MarkTur",
      subtitle: "Université d'État de Ponta Grossa",
      context: "masters",
      text: "Analyse de données quantitatives et qualitatives sur le comportement du consommateur et la performance touristique dans plusieurs projets de recherche, avec des rapports et des tableaux de bord pour des parties prenantes universitaires et professionnelles. Membre de comités scientifiques et d'organisation de congrès internationaux de tourisme. Recherche primée au Forum international du tourisme (2015 et 2016).",
      tags: ["Comportement du consommateur", "Tableaux de bord", "Recherche primée"],
    },
    {
      id: "terroirtur",
      name: "TerroirTUR",
      subtitle: "Tourisme, œnotourisme, gastronomie et patrimoine viticole",
      context: "masters",
      text: "Recherche sur les liens entre tourisme, gastronomie et patrimoine culturel. Analyse qualitative et quantitative du comportement des touristes et des dynamiques de développement touristique régional dans plusieurs destinations.",
      tags: ["Analyse qualitative", "Analyse quantitative", "Développement régional"],
    },
    {
      id: "competitividade",
      name: "Recherche et compétitivité",
      subtitle: "Aménagement territorial du tourisme",
      context: "bachelor",
      text: "Recherche sur la compétitivité et l'aménagement territorial du tourisme à Ponta Grossa, au Brésil. Collecte et analyse de données sur les taux d'occupation hôtelière et le profil des touristes, avec des rapports et des tableaux de bord pour des parties prenantes universitaires.",
      tags: ["Collecte de données", "Occupation hôtelière", "Profil des touristes"],
    },
    {
      id: "qualificacao-internacional",
      name: "Qualification internationale en tourisme et hôtellerie",
      subtitle: "Université de Malaga, Espagne",
      context: "bachelor",
      text: "Bourse de mobilité internationale financée par le ministère du Tourisme du Brésil (Sciences sans frontières). Formation avancée en gestion d'entreprises touristiques, avec le développement de compétences interculturelles et une connaissance des marchés touristiques européens.",
      tags: ["Mobilité internationale", "Marchés européens"],
    },
  ],

  education: [
    {
      degree: "Doctorat en tourisme",
      detail: "Spécialisation en analyse de données et comportement du consommateur",
      org: "Université d'Aveiro, Portugal. Boursière FCT",
      period: "2021 – 2026",
    },
    {
      degree: "Formation avancée en tourisme",
      detail: "1\u00a0680 heures",
      org: "Université d'Aveiro, Portugal",
      period: "2018 – 2019",
    },
    { degree: "Master en tourisme", detail: "Diplôme reconnu au Portugal", period: "2016 – 2018" },
    {
      degree: "Licence en tourisme",
      detail: "Diplôme reconnu au Portugal",
      org: "Université d'État de Ponta Grossa, Brésil",
      period: "2012 – 2016",
    },
    {
      degree: "Dirección Innovadora de Empresas Turísticas",
      detail: "262 heures",
      org: "Université de Malaga. Boursière Sciences sans frontières",
      period: "2014 – 2015",
    },
  ],

  certifications: [
    { name: "SQL", files: [f.sqlFgv, f.sqlUdemy] },
    { name: "Excel", files: [f.excelBasics, f.excelEssentials] },
    { name: "Power BI", files: [f.powerBiFundamentals, f.powerBiBeginners] },
    { name: "R", files: [f.rStats, f.rAdvanced] },
    { name: "Introduction à l'analyse de données", files: [f.introDataAnalytics] },
    { name: "Analyse de données avec SPSS", files: [f.spss] },
    { name: "Analyse qualitative avec NVivo", files: [f.nvivo] },
    { name: "Scrum", files: [f.scrum] },
    { name: "Product Owner", files: [f.productOwner] },
    { name: "Digital Product Management", files: [f.digitalProduct] },
    { name: "Service client", files: [f.customerService] },
    { name: "Customer Success", files: [f.customerSuccess] },
  ],

  languages: [
    { name: "Portugais", level: "Natif", score: 6 },
    { name: "Français", level: "C1", score: 5 },
    { name: "Anglais", level: "C1", score: 5 },
    { name: "Espagnol", level: "B2", score: 4 },
  ],

  publications: [
    { text: "Articles dans des revues scientifiques internationales indexées" },
    { text: "Chapitre d'ouvrage et livre publié" },
    { text: "Communications orales lors de conférences internationales" },
    { text: "Organisation d'événements scientifiques" },
    { text: "Membre de jurys de travaux universitaires" },
    { text: "Évaluatrice au Congrès brésilien de génie de la production" },
  ],
};
