import { certFiles as f } from "./shared";
import type { CV } from "./types";

/** Conteúdo em português (versão em /pt). */
export const pt: CV = {
  lang: "pt",
  htmlLang: "pt-PT",
  ogLocale: "pt_PT",
  switcher: { href: "/", label: "EN", ariaLabel: "View the site in English" },

  ui: {
    nav: {
      about: "Sobre",
      skills: "Competências",
      experience: "Experiência",
      education: "Formação",
      projects: "Projetos",
      contact: "Contactar",
    },
    navAria: "Principal",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    skipToContent: "Saltar para o conteúdo",
    sendEmail: "Enviar email",
    viewLinkedIn: "Ver LinkedIn",
    downloadCv: "Descarregar CV",
    photoAlt: "Fotografia de",
    strengthsAria: "Qualidades",
    aboutTitle: "Sobre mim",
    skillsTitle: "Ferramentas e competências",
    skillsIntro: "O que uso no dia a dia para passar de dados em bruto a decisões fundamentadas.",
    toolsTitle: "Ferramentas",
    experienceTitle: "Experiência profissional",
    experienceIntro: "Da investigação académica ao empreendedorismo: sempre com os dados no centro das decisões.",
    tagsAria: "Ferramentas e áreas",
    projectsLabel: "Projetos:",
    educationTitle: "Formação e certificações",
    certificationsTitle: "Certificações",
    certificationsHint: "Clica num certificado para o abrir.",
    pdfCertificate: "(certificado em PDF, abre num novo separador)",
    pdfFile: "(PDF, abre num novo separador)",
    languagesTitle: "Idiomas",
    levelAria: "Nível",
    cefrNote: "Escala europeia CEFR, de A1 a C2.",
    publicationsTitle: "Publicações e atividade académica",
    projectsTitle: "Projetos de investigação",
    projectsIntro:
      "Projetos em que trabalhei durante o mestrado e a licenciatura, sempre com a recolha e a análise de dados no centro.",
    topicsAria: "Temas",
    masters: "Mestrado",
    bachelor: "Licenciatura",
    contactTitle: "Procuro a próxima equipa de dados",
    contactText:
      "Estou disponível para posições de Data Analyst em Portugal e na Europa. Se a tua equipa precisa de alguém que transforme dados em decisões, vamos conversar.",
  },

  role: "Data Analyst",
  tagline:
    "Mais de 7 anos a transformar dados em decisões: analiso dados de clientes e mercados, crio segmentações e construo dashboards de KPIs.",

  about: [
    "Sou doutora em Turismo, com mais de 7 anos de experiência em análise de dados quantitativos e qualitativos, com foco em comportamento do consumidor. Hoje direciono esse percurso para a área de análise de dados.",
    "Trabalho o ciclo completo dos dados: desenho da recolha, limpeza, validação, análise e, sobretudo, a comunicação dos resultados. Construo dashboards e relatórios de KPIs para audiências técnicas e não técnicas.",
    "Tenho experiência em SPSS, Excel, R, NVivo e Power BI, e estou a consolidar SQL e Python através de cursos e da realização de projetos. Tenho nacionalidade francesa e brasileira e autorização para trabalhar em Portugal e em toda a UE.",
  ],

  strengths: ["Perfil analítico", "Boa comunicação", "Rigor com os dados", "Pensamento crítico"],

  stats: [
    { value: "7+", label: "anos a analisar dados quantitativos e qualitativos" },
    { value: "4", label: "idiomas, três deles usados em relatórios e apresentações" },
    { value: "10+", label: "certificações em dados, produto e gestão ágil" },
    { value: "Ph.D.", label: "com foco em comportamento do consumidor" },
  ],

  toolGroups: [
    { label: "Com experiência", level: 3, items: ["R", "SPSS", "NVivo", "Excel", "Power BI"] },
    { label: "Em consolidação", level: 0, items: ["SQL", "Python"] },
  ],

  competencies: [
    {
      icon: "stats",
      title: "Análise estatística",
      text: "Análise quantitativa e qualitativa, testes de hipóteses e análise de impacto para validar conclusões antes de as partilhar.",
    },
    {
      icon: "users",
      title: "Comportamento do consumidor",
      text: "Segmentação, identificação de padrões e tendências de consumo que orientam decisões de negócio.",
    },
    {
      icon: "target",
      title: "KPIs e performance",
      text: "Definição de indicadores, monitorização contínua e leitura crítica do que os números estão a dizer.",
    },
    {
      icon: "dashboard",
      title: "Dashboards e visualização",
      text: "Dashboards e relatórios pensados para quem os vai usar, de equipas técnicas a direções.",
    },
    {
      icon: "filter",
      title: "Qualidade dos dados",
      text: "Recolha, limpeza e validação de dados de ponta a ponta, com processos documentados e reproduzíveis.",
    },
    {
      icon: "message",
      title: "Comunicação com stakeholders",
      text: "Resultados explicados de forma clara em português, inglês e francês, em contexto híbrido e remoto.",
    },
  ],

  experience: [
    {
      role: "Data Analyst e Investigadora Doutoral",
      note: "Bolseira FCT",
      org: "Universidade de Aveiro, GOVCOPP",
      place: "Portugal",
      period: "Out 2021 – Jul 2026",
      bullets: [
        "Analisei dados quantitativos e qualitativos sobre comportamento do consumidor, identificando padrões, segmentos e tendências que sustentaram recomendações estratégicas.",
        "Construí dashboards e relatórios de KPIs adaptados a audiências técnicas e não técnicas, em português, inglês e francês.",
        "Geri o ciclo de dados de ponta a ponta: desenho de questionários, recolha, limpeza, validação e análise em R, SPSS e NVivo.",
        "Apliquei testes de hipóteses e análise de impacto para validar resultados antes de os comunicar.",
        "Colaborei com equipas multidisciplinares em Portugal e na Europa, em regime híbrido e remoto.",
      ],
      tags: ["R", "SPSS", "NVivo", "Excel", "Dashboards"],
      projects: [],
    },
    {
      role: "Fundadora e Analista de Mercado",
      note: "Bon Vivant",
      org: "Programa StartUP Voucher, IAPMEI",
      place: "Portugal",
      period: "Jun 2020 – Jun 2021",
      bullets: [
        "Analisei dados de mercado e de comportamento do consumidor para validar o modelo de negócio e orientar decisões de produto.",
        "Concebi uma aplicação digital para o setor do turismo, da definição de requisitos à aprovação pelo IAPMEI.",
      ],
      tags: ["Análise de mercado", "Produto digital"],
      projects: [],
    },
    {
      role: "Investigadora de Mestrado",
      org: "Mestrado em Turismo",
      place: "",
      period: "2016 – 2018",
      bullets: [
        "Analisei dados quantitativos e qualitativos sobre comportamento do consumidor, desempenho turístico e comportamento dos turistas.",
        "Produzi relatórios e dashboards para stakeholders académicos e empresariais.",
      ],
      tags: [],
      projects: ["marktur", "terroirtur"],
    },
    {
      role: "Projetos de investigação na licenciatura",
      org: "Universidade Estadual de Ponta Grossa",
      place: "Brasil",
      period: "2013 – 2016",
      bullets: [
        "Recolhi e analisei dados sobre taxas de ocupação hoteleira e perfil dos turistas.",
        "Traduzi resultados em relatórios, dashboards e apresentações para stakeholders académicos.",
      ],
      tags: [],
      projects: ["competitividade", "qualificacao-internacional"],
    },
  ],

  earlierExperience: {
    title: "Experiência anterior em hotelaria e turismo",
    items: [
      {
        org: "Hotel Planalto, Brasil",
        text: "Análise de dados de satisfação de clientes, criação de POPs e metodologia 5S.",
        period: "2015",
      },
      { org: "Hotel MS Maestranza, Málaga", text: "Receção e gestão de reservas internacionais.", period: "2015" },
      {
        org: "TAM Viagens, Brasil",
        text: "Monitorização de KPIs de vendas e satisfação no sistema Amadeus.",
        period: "2012 – 2013",
      },
      { org: "Vinícola em Curitiba, Paraná", text: "Guia de visitas de enoturismo.", period: "" },
    ],
  },

  projects: [
    {
      id: "marktur",
      name: "MarkTur",
      subtitle: "Universidade Estadual de Ponta Grossa",
      context: "masters",
      text: "Análise de dados quantitativos e qualitativos sobre comportamento do consumidor e desempenho turístico em vários projetos de investigação, com relatórios e dashboards para stakeholders académicos e empresariais. Membro de comissões científicas e organizadoras de congressos internacionais de turismo. Investigação premiada no Fórum Internacional de Turismo (2015 e 2016).",
      tags: ["Comportamento do consumidor", "Dashboards", "Investigação premiada"],
    },
    {
      id: "terroirtur",
      name: "TerroirTUR",
      subtitle: "Turismo, enoturismo, gastronomia e património do vinho",
      context: "masters",
      text: "Investigação sobre a relação entre turismo, gastronomia e património cultural. Análise qualitativa e quantitativa do comportamento dos turistas e dos padrões de desenvolvimento turístico regional em vários destinos.",
      tags: ["Análise qualitativa", "Análise quantitativa", "Desenvolvimento regional"],
    },
    {
      id: "competitividade",
      name: "Pesquisa e Competitividade",
      subtitle: "Ordenação territorial do turismo",
      context: "bachelor",
      text: "Investigação sobre competitividade e ordenamento territorial do turismo em Ponta Grossa, Brasil. Recolha e análise de dados sobre taxas de ocupação hoteleira e perfil dos turistas, com relatórios e dashboards para stakeholders académicos.",
      tags: ["Recolha de dados", "Ocupação hoteleira", "Perfil do turista"],
    },
    {
      id: "qualificacao-internacional",
      name: "Qualificação Internacional em Turismo e Hospitalidade",
      subtitle: "Universidad de Málaga, Espanha",
      context: "bachelor",
      text: "Bolsa de mobilidade internacional financiada pelo Ministério do Turismo do Brasil (Ciências sem Fronteiras). Formação avançada em gestão de empresas turísticas, com desenvolvimento de competências interculturais e conhecimento dos mercados turísticos europeus.",
      tags: ["Mobilidade internacional", "Mercados europeus"],
    },
  ],

  education: [
    {
      degree: "Doutoramento em Turismo",
      detail: "Especialização em análise de dados e comportamento do consumidor",
      org: "Universidade de Aveiro, Portugal. Bolseira FCT",
      period: "2021 – 2026",
    },
    {
      degree: "Formação Avançada em Turismo",
      detail: "1680 horas",
      org: "Universidade de Aveiro, Portugal",
      period: "2018 – 2019",
    },
    { degree: "Mestrado em Turismo", detail: "Grau reconhecido em Portugal", period: "2016 – 2018" },
    {
      degree: "Licenciatura em Turismo",
      detail: "Grau reconhecido em Portugal",
      org: "Universidade Estadual de Ponta Grossa, Brasil",
      period: "2012 – 2016",
    },
    {
      degree: "Dirección Innovadora de Empresas Turísticas",
      detail: "262 horas",
      org: "Universidad de Málaga. Bolseira Ciências sem Fronteiras",
      period: "2014 – 2015",
    },
  ],

  certifications: [
    { name: "SQL", files: [f.sqlFgv, f.sqlUdemy] },
    { name: "Excel", files: [f.excelBasics, f.excelEssentials] },
    { name: "Power BI", files: [f.powerBiFundamentals, f.powerBiBeginners] },
    { name: "R", files: [f.rStats, f.rAdvanced] },
    { name: "Introdução à Análise de Dados", files: [f.introDataAnalytics] },
    { name: "Análise de Dados com SPSS", files: [f.spss] },
    { name: "Análise Qualitativa com NVivo", files: [f.nvivo] },
    { name: "Scrum", files: [f.scrum] },
    { name: "Product Owner", files: [f.productOwner] },
    { name: "Digital Product Management", files: [f.digitalProduct] },
    { name: "Atendimento ao Cliente", files: [f.customerService] },
    { name: "Customer Success", files: [f.customerSuccess] },
  ],

  languages: [
    { name: "Português", level: "Nativo", score: 6 },
    { name: "Francês", level: "C1", score: 5 },
    { name: "Inglês", level: "C1", score: 5 },
    { name: "Espanhol", level: "B2", score: 4 },
  ],

  publications: [
    { text: "Artigos em revistas científicas internacionais indexadas" },
    { text: "Capítulo de livro e livro publicado" },
    { text: "Apresentações orais em conferências internacionais" },
    { text: "Organização de eventos científicos" },
    { text: "Júri de trabalhos académicos" },
    { text: "Avaliadora no Congresso Brasileiro de Engenharia de Produção" },
  ],
};
