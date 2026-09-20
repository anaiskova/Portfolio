import type { CertFile } from "./types";

/**
 * Endereço público do site, sem barra no fim.
 * Se comprares um domínio próprio, basta mudar aqui (ex.: "https://anaiskovaleski.com").
 */
export const siteUrl = "https://portfolio-anaiskova.vercel.app";

/** Dados que não mudam com a língua. */
export const profile = {
  name: "Anaïs Kovaleski",
  suffix: "Ph.D.",
  initials: "AK",
  email: "anais95k@hotmail.com",
  linkedin: "https://www.linkedin.com/in/ana%C3%AFs-kovaleski-ph-d",
  /** Para usar uma foto: coloca-a em /public (ex.: foto.jpg) e escreve aqui "/foto.jpg". */
  photo: undefined as string | undefined,
  /** Para oferecer o CV em PDF: coloca-o em /public (ex.: cv.pdf) e escreve aqui "/cv.pdf". */
  cvPdf: undefined as string | undefined,
};

/**
 * Ficheiros dos certificados (em /public/certificados).
 * O nome de cada curso fica como no certificado original, por isso é igual nas duas línguas.
 */
export const certFiles = {
  sqlFgv: { label: "SQL - Structured Query Language (FGV)", href: "/certificados/sql-fgv.pdf" },
  sqlUdemy: { label: "SQL para Análise de Dados (Udemy)", href: "/certificados/sql-udemy.pdf" },
  excelBasics: { label: "Excel Basics for Data Analysis (IBM)", href: "/certificados/excel-basics-ibm.pdf" },
  excelEssentials: { label: "Excel Essentials for Data Analytics (IBM)", href: "/certificados/excel-essentials-ibm.pdf" },
  powerBiFundamentals: { label: "Power BI Fundamentals (CFI)", href: "/certificados/power-bi-fundamentals.pdf" },
  powerBiBeginners: { label: "Power BI for Beginners (Coursera)", href: "/certificados/power-bi-beginners.pdf" },
  rStats: { label: "Estatística e Análise de Dados com R (GADES)", href: "/certificados/r-estatistica.pdf" },
  rAdvanced: {
    label: "Estatística e Análise de Dados com R, Nível Avançado (GADES)",
    href: "/certificados/r-avancado.pdf",
  },
  introDataAnalytics: { label: "Introduction to Data Analytics (IBM)", href: "/certificados/introducao-analise-dados-ibm.pdf" },
  spss: { label: "Análise de Dados com SPSS em Projetos de Investigação", href: "/certificados/spss.pdf" },
  nvivo: { label: "Análise Qualitativa de Dados com NVivo", href: "/certificados/nvivo.pdf" },
  scrum: { label: "Ágil Scrum", href: "/certificados/scrum.pdf" },
  productOwner: { label: "Como ser um Product Owner", href: "/certificados/product-owner.pdf" },
  digitalProduct: { label: "Fundamentos de Digital Product Management", href: "/certificados/digital-product-management.pdf" },
  customerService: { label: "Atendimento ao Cliente (SEBRAE)", href: "/certificados/atendimento-cliente.pdf" },
  customerSuccess: { label: "Customer Success (SEBRAE)", href: "/certificados/customer-success.pdf" },
} satisfies Record<string, CertFile>;
