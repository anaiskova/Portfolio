/** Estrutura do conteúdo. As duas línguas (en.ts e pt.ts) têm de seguir este formato. */

export type Lang = "en" | "pt";

/** 3 = com experiência, 2 = intermédio, 1 = básico, 0 = em consolidação */
export type Level = 0 | 1 | 2 | 3;

export type CompetencyIcon = "stats" | "users" | "target" | "dashboard" | "filter" | "message";

export type CertFile = { label: string; href: string };

export type CV = {
  lang: Lang;
  htmlLang: string;
  ogLocale: string;
  /** Link e texto do botão que troca de língua */
  switcher: { href: string; label: string; ariaLabel: string };
  ui: {
    nav: { about: string; skills: string; experience: string; education: string; projects: string; contact: string };
    navAria: string;
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
