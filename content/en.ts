import { certFiles as f } from "./shared";
import type { CV } from "./types";

/** English content (main version, at /). British spelling, for the European job market. */
export const en: CV = {
  lang: "en",
  htmlLang: "en-GB",
  ogLocale: "en_GB",
  switcher: { href: "/pt", label: "PT", ariaLabel: "Ver o site em português" },

  ui: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education",
      projects: "Projects",
      contact: "Contact",
    },
    navAria: "Main",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    skipToContent: "Skip to content",
    sendEmail: "Send email",
    viewLinkedIn: "View LinkedIn",
    downloadCv: "Download CV",
    photoAlt: "Photo of",
    strengthsAria: "Strengths",
    aboutTitle: "About me",
    skillsTitle: "Tools and skills",
    skillsIntro: "What I use day to day to go from raw data to well-founded decisions.",
    toolsTitle: "Tools",
    experienceTitle: "Professional experience",
    experienceIntro: "From academic research to entrepreneurship: always with data at the heart of decisions.",
    tagsAria: "Tools and areas",
    projectsLabel: "Projects:",
    educationTitle: "Education and certifications",
    certificationsTitle: "Certifications",
    certificationsHint: "Click a certificate to open it.",
    pdfCertificate: "(PDF certificate, opens in a new tab)",
    pdfFile: "(PDF, opens in a new tab)",
    languagesTitle: "Languages",
    levelAria: "Level",
    cefrNote: "European CEFR scale, from A1 to C2.",
    publicationsTitle: "Publications and academic activity",
    projectsTitle: "Research projects",
    projectsIntro:
      "Projects I worked on during my master's and bachelor's degrees, always with data collection and analysis at the core.",
    topicsAria: "Topics",
    masters: "Master's",
    bachelor: "Bachelor's",
    contactTitle: "Looking for my next data team",
    contactText:
      "I am available for Data Analyst roles in Portugal and across Europe. If your team needs someone who turns data into decisions, let's talk.",
  },

  role: "Data Analyst",
  tagline:
    "7+ years turning data into decisions: I analyse customer and market data, build segmentations and create KPI dashboards.",

  about: [
    "I hold a Ph.D. in Tourism and have more than 7 years of experience analysing quantitative and qualitative data, with a focus on consumer behaviour. I am now taking this background into the field of data analysis.",
    "I work across the full data cycle: designing data collection, cleaning, validation, analysis and, above all, communicating results. I build dashboards and KPI reports for technical and non-technical audiences.",
    "I have experience with SPSS, Excel, R, NVivo and Power BI, and I am strengthening my SQL and Python skills through courses and hands-on projects. I hold French and Brazilian citizenship and am authorised to work in Portugal and across the EU.",
  ],

  strengths: ["Analytical mindset", "Strong communicator", "Rigour with data", "Critical thinking"],

  stats: [
    { value: "7+", label: "years analysing quantitative and qualitative data" },
    { value: "4", label: "languages, three of them used in reports and presentations" },
    { value: "10+", label: "certifications in data, product and agile management" },
    { value: "Ph.D.", label: "focused on consumer behaviour" },
  ],

  toolGroups: [
    { label: "Experienced", level: 3, items: ["R", "SPSS", "NVivo", "Excel", "Power BI"] },
    { label: "Currently strengthening", level: 0, items: ["SQL", "Python"] },
  ],

  competencies: [
    {
      icon: "stats",
      title: "Statistical analysis",
      text: "Quantitative and qualitative analysis, hypothesis testing and impact analysis to validate findings before sharing them.",
    },
    {
      icon: "users",
      title: "Consumer behaviour",
      text: "Segmentation and identification of consumption patterns and trends that guide business decisions.",
    },
    {
      icon: "target",
      title: "KPIs and performance",
      text: "Defining indicators, monitoring them continuously and reading critically what the numbers are saying.",
    },
    {
      icon: "dashboard",
      title: "Dashboards and visualisation",
      text: "Dashboards and reports designed for the people who use them, from technical teams to leadership.",
    },
    {
      icon: "filter",
      title: "Data quality",
      text: "End-to-end data collection, cleaning and validation, with documented and reproducible processes.",
    },
    {
      icon: "message",
      title: "Stakeholder communication",
      text: "Results explained clearly in Portuguese, English and French, in hybrid and remote settings.",
    },
  ],

  experience: [
    {
      role: "Data Analyst and Doctoral Researcher",
      note: "FCT Research Fellow",
      org: "University of Aveiro, GOVCOPP",
      place: "Portugal",
      period: "Oct 2021 – Jul 2026",
      bullets: [
        "Analysed quantitative and qualitative data on consumer behaviour, identifying patterns, segments and trends that supported strategic recommendations.",
        "Built dashboards and KPI reports tailored to technical and non-technical audiences, in Portuguese, English and French.",
        "Managed the end-to-end data cycle: questionnaire design, collection, cleaning, validation and analysis in R, SPSS and NVivo.",
        "Applied hypothesis testing and impact analysis to validate results before communicating them.",
        "Collaborated with multidisciplinary teams in Portugal and across Europe, in hybrid and remote settings.",
      ],
      tags: ["R", "SPSS", "NVivo", "Excel", "Dashboards"],
      projects: [],
    },
    {
      role: "Founder and Market Analyst",
      note: "Bon Vivant",
      org: "StartUP Voucher programme, IAPMEI",
      place: "Portugal",
      period: "Jun 2020 – Jun 2021",
      bullets: [
        "Analysed market and consumer behaviour data to validate the business model and guide product decisions.",
        "Designed a digital app for the tourism sector, from defining requirements to approval by IAPMEI.",
      ],
      tags: ["Market analysis", "Digital product"],
      projects: [],
    },
    {
      role: "Master's Researcher",
      org: "Master's in Tourism",
      place: "",
      period: "2016 – 2018",
      bullets: [
        "Analysed quantitative and qualitative data on consumer behaviour, tourism performance and tourist behaviour.",
        "Produced reports and dashboards for academic and business stakeholders.",
      ],
      tags: [],
      projects: ["marktur", "terroirtur"],
    },
    {
      role: "Undergraduate research projects",
      org: "State University of Ponta Grossa",
      place: "Brazil",
      period: "2013 – 2016",
      bullets: [
        "Collected and analysed data on hotel occupancy rates and tourist profiles.",
        "Turned results into reports, dashboards and presentations for academic stakeholders.",
      ],
      tags: [],
      projects: ["competitividade", "qualificacao-internacional"],
    },
  ],

  earlierExperience: {
    title: "Earlier experience in hospitality and tourism",
    items: [
      {
        org: "Hotel Planalto, Brazil",
        text: "Customer satisfaction data analysis, standard operating procedures and 5S methodology.",
        period: "2015",
      },
      { org: "Hotel MS Maestranza, Málaga", text: "Front desk and international booking management.", period: "2015" },
      {
        org: "TAM Viagens, Brazil",
        text: "Monitoring of sales and satisfaction KPIs in the Amadeus system.",
        period: "2012 – 2013",
      },
      { org: "Winery in Curitiba, Paraná", text: "Wine tourism tour guide.", period: "" },
    ],
  },

  projects: [
    {
      id: "marktur",
      name: "MarkTur",
      subtitle: "State University of Ponta Grossa",
      context: "masters",
      text: "Quantitative and qualitative data analysis on consumer behaviour and tourism performance across multiple research projects, with reports and dashboards for academic and business stakeholders. Member of scientific and organising committees at international tourism congresses. Award-winning research at the International Tourism Forum (2015 and 2016).",
      tags: ["Consumer behaviour", "Dashboards", "Award-winning research"],
    },
    {
      id: "terroirtur",
      name: "TerroirTUR",
      subtitle: "Tourism, wine tourism, gastronomy and wine heritage",
      context: "masters",
      text: "Research on the relationship between tourism, gastronomy and cultural heritage. Qualitative and quantitative analysis of tourist behaviour and regional tourism development patterns across multiple destinations.",
      tags: ["Qualitative analysis", "Quantitative analysis", "Regional development"],
    },
    {
      id: "competitividade",
      name: "Research and Competitiveness",
      subtitle: "Territorial planning of tourism",
      context: "bachelor",
      text: "Research on tourism competitiveness and territorial planning in Ponta Grossa, Brazil. Collection and analysis of data on hotel occupancy rates and tourist profiles, with reports and dashboards for academic stakeholders.",
      tags: ["Data collection", "Hotel occupancy", "Tourist profiling"],
    },
    {
      id: "qualificacao-internacional",
      name: "International Qualification in Tourism and Hospitality",
      subtitle: "University of Málaga, Spain",
      context: "bachelor",
      text: "International mobility grant funded by the Brazilian Ministry of Tourism (Science without Borders). Advanced training in tourism business management, developing cross-cultural skills and knowledge of European tourism markets.",
      tags: ["International mobility", "European markets"],
    },
  ],

  education: [
    {
      degree: "Ph.D. in Tourism",
      detail: "Specialisation in data analysis and consumer behaviour",
      org: "University of Aveiro, Portugal. FCT Research Fellow",
      period: "2021 – 2026",
    },
    {
      degree: "Advanced Training in Tourism",
      detail: "1,680 hours",
      org: "University of Aveiro, Portugal",
      period: "2018 – 2019",
    },
    { degree: "Master's in Tourism", detail: "Degree recognised in Portugal", period: "2016 – 2018" },
    {
      degree: "Bachelor's in Tourism",
      detail: "Degree recognised in Portugal",
      org: "State University of Ponta Grossa, Brazil",
      period: "2012 – 2016",
    },
    {
      degree: "Dirección Innovadora de Empresas Turísticas",
      detail: "262 hours",
      org: "University of Málaga. Science without Borders scholarship",
      period: "2014 – 2015",
    },
  ],

  certifications: [
    { name: "SQL", files: [f.sqlFgv, f.sqlUdemy] },
    { name: "Excel", files: [f.excelBasics, f.excelEssentials] },
    { name: "Power BI", files: [f.powerBiFundamentals, f.powerBiBeginners] },
    { name: "R", files: [f.rStats, f.rAdvanced] },
    { name: "Introduction to Data Analytics", files: [f.introDataAnalytics] },
    { name: "Data Analysis with SPSS", files: [f.spss] },
    { name: "Qualitative Analysis with NVivo", files: [f.nvivo] },
    { name: "Scrum", files: [f.scrum] },
    { name: "Product Owner", files: [f.productOwner] },
    { name: "Digital Product Management", files: [f.digitalProduct] },
    { name: "Customer Service", files: [f.customerService] },
    { name: "Customer Success", files: [f.customerSuccess] },
  ],

  languages: [
    { name: "Portuguese", level: "Native", score: 6 },
    { name: "French", level: "C1", score: 5 },
    { name: "English", level: "C1", score: 5 },
    { name: "Spanish", level: "B2", score: 4 },
  ],

  publications: [
    { text: "Articles in indexed international scientific journals" },
    { text: "Book chapter and published book" },
    { text: "Oral presentations at international conferences" },
    { text: "Organisation of scientific events" },
    { text: "Examination panels for academic work" },
    { text: "Reviewer at the Brazilian Congress of Production Engineering" },
  ],
};
