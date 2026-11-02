import type { CaseStudy } from "../types";

/** Étude de cas en français (/fr/case-study). Espace insécable ( ) avant les deux-points. */
export const caseFr: CaseStudy = {
  lang: "fr",
  locale: "fr-FR",
  navLabel: "Étude de cas",

  eyebrow: "Étude de cas · Analyse d'enquête · Comportement du consommateur",
  title: "Comment le public des festivals de musique a-t-il changé après la COVID-19 ?",
  subtitle: "De plus de 1 000 réponses à des enseignements concrets pour les organisateurs",
  intro:
    "J'ai conçu une enquête internationale en trois langues, nettoyé et validé les données, construit un modèle statistique sous SPSS et traduit les résultats en recommandations concrètes pour les organisateurs de festivals, sur les prix, la communication et la segmentation du public.",
  source: "À partir de ma recherche doctorale, Université d'Aveiro (2025)",
  backToSite: "Retour au site",
  downloadPdf: "Télécharger le PDF",
  pdfNote: "en anglais",

  stats: [
    { value: "1 000+", label: "réponses recueillies, validées en un échantillon final de 402" },
    { value: "8+", label: "pays de résidence (BR, NL, PT, FR, LU, ES…)" },
    { value: "3", label: "langues de l'enquête : portugais, anglais et français" },
    { value: "40", label: "variables dans le modèle explicatif" },
  ],

  teaser: {
    eyebrow: "Étude de cas à la une",
    text: "De plus de 1 000 réponses à des recommandations concrètes : conception de l'enquête, nettoyage des données, analyse factorielle, tests d'hypothèses et régression sous SPSS.",
    cta: "Lire l'étude de cas",
  },

  question: {
    title: "La question posée",
    text: "Les festivals ont rouvert après la pandémie, mais le public est-il revenu le même ? Les organisateurs avaient besoin de savoir ce qui avait changé dans la façon dont les gens choisissent, préparent et dépensent lors d'un festival, et quels profils avaient le plus évolué, afin d'ajuster les prix, la communication et les formats.",
  },

  data: {
    title: "Les données",
    text: "Questionnaire en ligne créé sur la plateforme de l'Université d'Aveiro et diffusé via des communautés de festivals, les réseaux sociaux et des organisateurs (septembre et octobre 2025). Les répondants ont comparé leur comportement avant et après la pandémie sur trois phases : la participation, la préparation avant l'événement et le comportement pendant l'événement. Échantillon : 61 % de femmes, majoritairement 18-34 ans, 73 % en emploi.",
  },

  method: {
    title: "Ma démarche",
    toolsAria: "Outils et méthodes",
    tools: [
      "SPSS",
      "Conception d'enquête",
      "Nettoyage des données",
      "Analyse factorielle",
      "Tests d'hypothèses",
      "Régression",
      "Segmentation",
    ],
    steps: [
      {
        title: "Cadrage",
        text: "Deux revues systématiques de la littérature (147 et 54 études) pour définir les variables et les échelles de mesure.",
      },
      {
        title: "Conception de l'enquête",
        text: "Questionnaire en 3 langues, pré-testé et relu avant le lancement, avec consentement et validation en matière de protection des données.",
      },
      {
        title: "Qualité des données",
        text: "Contrôle de plus de 1 000 réponses (éligibilité, complétude, erreurs de saisie, valeurs aberrantes), en conservant 402 cas valides pour l'analyse.",
      },
      {
        title: "Réduction des dimensions",
        text: "Analyse factorielle (ACP) pour regrouper 12 items de préparation en 3 facteurs clairs, expliquant 83 % de la variance; fiabilité α = 0,92 à 0,96.",
      },
      {
        title: "Tests",
        text: "Comparaisons avant/après (test t apparié, Wilcoxon) et différences entre groupes (test t, Kruskal-Wallis, Spearman).",
      },
      {
        title: "Modélisation",
        text: "Régression linéaire multiple et régression logistique binaire pour déterminer les facteurs qui expliquent chaque changement.",
      },
    ],
  },

  attendanceChart: {
    title: "La fréquentation des festivals est devenue plus fréquente après la pandémie",
    subtitle: "Part des répondants selon le nombre de festivals par an (n = 402)",
    before: "Avant la pandémie",
    after: "Après la pandémie",
    axisLabel: "Part des répondants",
    rows: [
      { category: "1 à 2 festivals par an", before: 85.1, after: 32.8 },
      { category: "3 à 5 festivals par an", before: 14.2, after: 63.7 },
      { category: "Plus de 5 par an", before: 0.7, after: 3.5 },
    ],
    note: "Test de Wilcoxon pour échantillons appariés : Z = −14,15, p < 0,001. La part de ceux qui vont à 3 à 5 festivals par an est passée de 14 % à 64 %.",
  },

  results: {
    title: "Ce que montrent les données",
    items: [
      {
        value: "+50 pts",
        title: "La demande est revenue plus forte",
        text: "Hausse de la part des personnes allant à 3 à 5 festivals par an, avec une nette préférence pour les événements en plein air.",
      },
      {
        title: "Sensibles au prix, mais toujours dépensiers",
        text: "La sensibilité au prix et aux coûts est le premier facteur de préparation (33 % de la variance), sans baisse nette des dépenses une fois sur place.",
      },
      {
        title: "Les canaux officiels l'emportent",
        text: "Le public s'appuie désormais bien plus sur les sites officiels et les réseaux sociaux des festivals, et bien moins sur les proches, pour décider d'y aller.",
      },
    ],
  },

  behaviourChart: {
    title: "Où le comportement a le plus changé",
    subtitle:
      "Accord moyen avec chaque affirmation après la pandémie, sur une échelle de 1 à 7. La ligne centrale signifie aucun changement; les barres vers la droite indiquent un accord plus fort.",
    centreLabel: "4 · aucun changement",
    moreLabel: "Accord plus fort",
    lessLabel: "Accord plus faible",
    items: [
      { label: "Chercher plus d'informations sur les canaux officiels", value: 5.78 },
      { label: "Suivre davantage les consignes des autorités sanitaires", value: 5.61 },
      { label: "Valoriser davantage la convivialité en festival", value: 5.27 },
      { label: "Préférer les festivals en plein air", value: 4.7 },
      { label: "Être plus sensible au prix des billets et aux coûts", value: 4.57 },
      { label: "Comportement prosocial et de protection", value: 3.74 },
      { label: "Réduire les dépenses supplémentaires sur place", value: 3.63 },
      { label: "Comportement préventif avant l'événement", value: 3.0 },
      { label: "S'appuyer davantage sur les proches pour s'informer", value: 2.76 },
      { label: "Porter un masque pendant le festival", value: 2.31 },
    ],
    note: "n = 402. Tous les écarts au point central sont statistiquement significatifs (tests t sur un échantillon, p < 0,01). Les valeurs inférieures à 4 signifient que les répondants n'étaient pas d'accord pour dire que le comportement avait augmenté. Certaines lignes sont des moyennes d'échelles validées à plusieurs items.",
  },

  explains: {
    title: "Ce qui explique ces changements",
    text: "Les modèles de régression montrent que les changements n'ont pas été les mêmes pour tout le monde. Les facteurs explicatifs les plus forts sont le pays de résidence, le risque perçu et les motivations, le style de vie et la personnalité pesant sur des comportements précis. Autrement dit, le public se divise en segments qui réagissent différemment, et un message ou une stratégie tarifaire unique ne conviendra pas à tous.",
  },

  recommendations: {
    title: "Recommandations pour les organisateurs",
    items: [
      {
        title: "Gagner la décision d'achat sur le prix.",
        text: "Afficher le coût total dès le départ et proposer des billets par paliers; les dépenses sur place se maintiennent, le frein se situe donc au moment de l'achat.",
      },
      {
        title: "Investir dans les canaux officiels.",
        text: "Une information claire et à jour sur le site et les réseaux sociaux est aujourd'hui ce qui déclenche la décision de venir.",
      },
      {
        title: "Segmenter le public.",
        text: "Le regrouper par pays, perception du risque et motivation, afin d'adapter les formats et les messages.",
      },
      {
        title: "Privilégier les formats en plein air.",
        text: "Traiter les événements en ligne comme un complément, et non comme un substitut.",
      },
    ],
  },

  methodsFooter:
    "Méthodes : conception de l'enquête · nettoyage des données · analyse factorielle · tests d'hypothèses · régression · SPSS",
};
