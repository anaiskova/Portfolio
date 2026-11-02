/** Estrutura do conteúdo. As duas línguas (en.ts e pt.ts) têm de seguir este formato. */

export type Lang = "en" | "pt" | "fr";

/** 3 = com experiência, 2 = intermédio, 1 = básico, 0 = em consolidação */
export type Level = 0 | 1 | 2 | 3;

export type CompetencyIcon = "stats" | "users" | "target" | "dashboard" | "filter" | "message";

export type CertFile = { label: string; href: string };

export type CV = {
  lang: Lang;
  htmlLang: string;
  ogLocale: string;
  ui: {
    nav: { about: string; skills: string; experience: string; education: string; projects: string; contact: string };
    navAria: string;
    languageAria: string;
    openMenu: string;
    closeMenu: string;
    skipToContent: string;
    sendEmail: string;
    viewLinkedIn: string;
    downloadCv: string;
    photoAlt: string;
    strengthsAria: string;
    aboutTitle: string;
    skillsTitle: string;
    skillsIntro: string;
    toolsTitle: string;
    experienceTitle: string;
    experienceIntro: string;
    tagsAria: string;
    projectsLabel: string;
    educationTitle: string;
    certificationsTitle: string;
    certificationsHint: string;
    pdfCertificate: string;
    pdfFile: string;
    languagesTitle: string;
    levelAria: string;
    cefrNote: string;
    publicationsTitle: string;
    projectsTitle: string;
    projectsIntro: string;
    topicsAria: string;
    masters: string;
    bachelor: string;
    contactTitle: string;
    contactText: string;
  };
  role: string;
  tagline: string;
  about: string[];
  strengths: string[];
  stats: { value: string; label: string }[];
  toolGroups: { label: string; level: Level; items: string[] }[];
  competencies: { icon: CompetencyIcon; title: string; text: string }[];
  experience: {
    role: string;
    note?: string;
    org: string;
    place: string;
    period: string;
    bullets: string[];
    tags: string[];
    projects: string[];
  }[];
  earlierExperience: { title: string; items: { org: string; text: string; period: string }[] };
  projects: {
    id: string;
    name: string;
    subtitle: string;
    context: "masters" | "bachelor";
    text: string;
    tags: string[];
  }[];
  education: { degree: string; detail: string; org?: string; period: string }[];
  certifications: { name: string; files: CertFile[] }[];
  languages: { name: string; level: string; score: number }[];
  publications: { text: string; href?: string }[];
};

/** Estudo de caso: uma página própria por língua, em /case-study. */
export type CaseStudy = {
  lang: Lang;
  /** Para formatar números: "pt-PT" usa vírgula decimal, "en-GB" usa ponto. */
  locale: string;
  /** Rótulo no menu e no bloco de destaque da página principal. */
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  source: string;
  backToSite: string;
  downloadPdf: string;
  /** Nota sobre a língua do PDF (vazia na versão inglesa). */
  pdfNote: string;
  stats: { value: string; label: string }[];
  /** Bloco de destaque na página principal. */
  teaser: { eyebrow: string; text: string; cta: string };
  question: { title: string; text: string };
  data: { title: string; text: string };
  method: { title: string; toolsAria: string; tools: string[]; steps: { title: string; text: string }[] };
  attendanceChart: {
    title: string;
    subtitle: string;
    before: string;
    after: string;
    axisLabel: string;
    rows: { category: string; before: number; after: number }[];
    note: string;
  };
  results: { title: string; items: { value?: string; title: string; text: string }[] };
  behaviourChart: {
    title: string;
    subtitle: string;
    centreLabel: string;
    moreLabel: string;
    lessLabel: string;
    items: { label: string; value: number }[];
    note: string;
  };
  explains: { title: string; text: string };
  recommendations: { title: string; items: { title: string; text: string }[] };
  methodsFooter: string;
};
