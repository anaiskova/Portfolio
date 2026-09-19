/**
 * Todo o conteúdo do site vive aqui.
 * Para atualizar o CV, basta editar este ficheiro: os componentes não têm texto fixo.
 */

export const profile = {
  name: "Anaïs Kovaleski",
  suffix: "Ph.D.",
  initials: "AK",
  role: "Data Analyst",
  tagline:
    "Transformo dados sobre consumidores em dashboards, KPIs e recomendações que equipas técnicas e de negócio conseguem usar.",
  location: "Porto, Portugal",
  workAuth: "Autorização de trabalho em toda a UE",
  email: "anais95k@hotmail.com",
  linkedin: "https://www.linkedin.com/in/ana%C3%AFs-kovaleski-ph-d",
  linkedinLabel: "linkedin.com/in/anaïs-kovaleski-ph-d",
  /** Para usar uma foto: coloca-a em /public (ex.: foto.jpg) e escreve aqui "/foto.jpg". */
  photo: undefined as string | undefined,
  /** Para oferecer o CV em PDF: coloca-o em /public (ex.: cv.pdf) e escreve aqui "/cv.pdf". */
  cvPdf: undefined as string | undefined,
};

export const about = [
  "Sou doutora em Turismo, com mais de 7 anos de experiência em análise de dados quantitativos e qualitativos, com foco em comportamento do consumidor. Hoje direciono esse percurso para a área de análise de dados.",
  "Trabalho o ciclo completo dos dados: desenho da recolha, limpeza, validação, análise e, sobretudo, a comunicação dos resultados. Construo dashboards e relatórios de KPIs para audiências técnicas e não técnicas.",
  "Tenho experiência em SPSS, Excel, R, NVivo e Power BI, e estou a consolidar SQL e Python através de cursos e da realização de projetos. Tenho nacionalidade francesa e brasileira e autorização para trabalhar em Portugal e em toda a UE.",
];

/** Qualidades em destaque à volta do retrato, no topo (máximo 4). */
export const strengths = ["Perfil analítico", "Boa comunicação", "Rigor com os dados", "Pensamento crítico"];

export const stats = [
  { value: "7+", label: "anos a analisar dados quantitativos e qualitativos" },
  { value: "4", label: "idiomas, três deles usados em relatórios e apresentações" },
  { value: "10+", label: "certificações em dados, produto e gestão ágil" },
  { value: "Ph.D.", label: "com foco em comportamento do consumidor" },
];

/** 3 = com experiência, 2 = intermédio, 1 = básico, 0 = em consolidação */
export type Level = 0 | 1 | 2 | 3;

export const toolGroups: { label: string; level: Level; items: string[] }[] = [
  { label: "Com experiência", level: 3, items: ["R", "SPSS", "NVivo", "Excel", "Power BI"] },
  { label: "Em consolidação", level: 0, items: ["SQL", "Python"] },
];

export type CompetencyIcon = "stats" | "users" | "target" | "dashboard" | "filter" | "message";

export const competencies: { icon: CompetencyIcon; title: string; text: string }[] = [
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
];

export const experience = [
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
    projects: [] as string[],
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
    projects: [] as string[],
  },
  {
    role: "Investigadora de Mestrado",
    note: undefined,
    org: "Mestrado em Turismo",
    place: "",
    period: "2016 – 2018",
    bullets: [
      "Analisei dados quantitativos e qualitativos sobre comportamento do consumidor, desempenho turístico e comportamento dos turistas.",
      "Produzi relatórios e dashboards para stakeholders académicos e empresariais.",
    ],
    tags: [] as string[],
    projects: ["marktur", "terroirtur"],
  },
  {
    role: "Projetos de investigação na licenciatura",
    note: undefined,
    org: "Universidade Estadual de Ponta Grossa",
    place: "Brasil",
    period: "2013 – 2016",
    bullets: [
      "Recolhi e analisei dados sobre taxas de ocupação hoteleira e perfil dos turistas.",
      "Traduzi resultados em relatórios, dashboards e apresentações para stakeholders académicos.",
    ],
    tags: [] as string[],
    projects: ["competitividade", "qualificacao-internacional"],
  },
];

export const earlierExperience = {
  title: "Experiência anterior em hotelaria e turismo",
  items: [
    {
      org: "Hotel Planalto, Brasil",
      text: "Análise de dados de satisfação de clientes, criação de POPs e metodologia 5S.",
      period: "2015",
    },
    {
      org: "Hotel MS Maestranza, Málaga",
      text: "Receção e gestão de reservas internacionais.",
      period: "2015",
    },
    {
      org: "TAM Viagens, Brasil",
      text: "Monitorização de KPIs de vendas e satisfação no sistema Amadeus.",
      period: "2012 – 2013",
    },
    {
      org: "Vinícola em Curitiba, Paraná",
      text: "Guia de visitas de enoturismo.",
      period: "",
    },
  ],
};

/** Projetos de investigação: aparecem no fim do site e são citados na experiência pelo id. */
export const projects = [
  {
    id: "marktur",
    name: "MarkTur",
    subtitle: "Universidade Estadual de Ponta Grossa",
    context: "Mestrado",
    text: "Análise de dados quantitativos e qualitativos sobre comportamento do consumidor e desempenho turístico em vários projetos de investigação, com relatórios e dashboards para stakeholders académicos e empresariais. Membro de comissões científicas e organizadoras de congressos internacionais de turismo. Investigação premiada no Fórum Internacional de Turismo (2015 e 2016).",
    tags: ["Comportamento do consumidor", "Dashboards", "Investigação premiada"],
  },
  {
    id: "terroirtur",
    name: "TerroirTUR",
    subtitle: "Turismo, enoturismo, gastronomia e património do vinho",
    context: "Mestrado",
    text: "Investigação sobre a relação entre turismo, gastronomia e património cultural. Análise qualitativa e quantitativa do comportamento dos turistas e dos padrões de desenvolvimento turístico regional em vários destinos.",
    tags: ["Análise qualitativa", "Análise quantitativa", "Desenvolvimento regional"],
  },
  {
    id: "competitividade",
    name: "Pesquisa e Competitividade",
    subtitle: "Ordenação territorial do turismo",
    context: "Licenciatura",
    text: "Investigação sobre competitividade e ordenamento territorial do turismo em Ponta Grossa, Brasil. Recolha e análise de dados sobre taxas de ocupação hoteleira e perfil dos turistas, com relatórios e dashboards para stakeholders académicos.",
    tags: ["Recolha de dados", "Ocupação hoteleira", "Perfil do turista"],
  },
  {
    id: "qualificacao-internacional",
    name: "Qualificação Internacional em Turismo e Hospitalidade",
    subtitle: "Universidad de Málaga, Espanha",
    context: "Licenciatura",
    text: "Bolsa de mobilidade internacional financiada pelo Ministério do Turismo do Brasil (Ciências sem Fronteiras). Formação avançada em gestão de empresas turísticas, com desenvolvimento de competências interculturais e conhecimento dos mercados turísticos europeus.",
    tags: ["Mobilidade internacional", "Mercados europeus"],
  },
];

export const education = [
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
  {
    degree: "Mestrado em Turismo",
    detail: "Grau reconhecido em Portugal",
    org: undefined,
    period: "2016 – 2018",
  },
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
];

/**
 * Certificados: os PDFs estão em /public/certificados.
 * Um nome por ferramenta; quando há mais de um certificado, a quantidade aparece no nome
 * e ao clicar abre-se a lista com todos.
 */
export type CertFile = { label: string; href: string };

export const certifications: { name: string; files: CertFile[] }[] = [
  {
    name: "SQL",
    files: [
      { label: "SQL - Structured Query Language (FGV)", href: "/certificados/sql-fgv.pdf" },
      { label: "SQL para Análise de Dados (Udemy)", href: "/certificados/sql-udemy.pdf" },
    ],
  },
  {
    name: "Excel",
    files: [
      { label: "Excel Basics for Data Analysis (IBM)", href: "/certificados/excel-basics-ibm.pdf" },
      { label: "Excel Essentials for Data Analytics (IBM)", href: "/certificados/excel-essentials-ibm.pdf" },
    ],
  },
  {
    name: "Power BI",
    files: [
      { label: "Power BI Fundamentals (CFI)", href: "/certificados/power-bi-fundamentals.pdf" },
      { label: "Power BI for Beginners (Coursera)", href: "/certificados/power-bi-beginners.pdf" },
    ],
  },
  {
    name: "Introdução à Análise de Dados",
    files: [{ label: "Introduction to Data Analytics (IBM)", href: "/certificados/introducao-analise-dados-ibm.pdf" }],
  },
  {
    name: "Análise de Dados com SPSS",
    files: [{ label: "Análise de Dados com SPSS", href: "/certificados/spss.pdf" }],
  },
  {
    name: "Análise Qualitativa com NVivo",
    files: [{ label: "Análise Qualitativa com NVivo", href: "/certificados/nvivo.pdf" }],
  },
  // Sem PDF por agora: quando o tiveres, coloca-o em /public/certificados e acrescenta aqui o ficheiro.
  { name: "Análise de Dados com R", files: [] },
  { name: "Scrum", files: [{ label: "Ágil Scrum", href: "/certificados/scrum.pdf" }] },
  { name: "Product Owner", files: [{ label: "Product Owner", href: "/certificados/product-owner.pdf" }] },
  {
    name: "Digital Product Management",
    files: [{ label: "Digital Product Management", href: "/certificados/digital-product-management.pdf" }],
  },
  {
    name: "Atendimento ao Cliente",
    files: [{ label: "Atendimento ao Cliente", href: "/certificados/atendimento-cliente.pdf" }],
  },
  { name: "Customer Success", files: [{ label: "Customer Success", href: "/certificados/customer-success.pdf" }] },
];

/** score: posição na escala CEFR (A1 = 1 … C2 = 6). Nativo = 6. */
export const languages = [
  { name: "Português", level: "Nativo", score: 6 },
  { name: "Francês", level: "C1", score: 5 },
  { name: "Inglês", level: "C1", score: 5 },
  { name: "Espanhol", level: "B2", score: 4 },
];

export const publications: { text: string; href?: string }[] = [
  { text: "Artigos em revistas científicas internacionais indexadas" },
  { text: "Capítulo de livro e livro publicado" },
  { text: "Apresentações orais em conferências internacionais" },
  { text: "Organização de eventos científicos" },
  { text: "Júri de trabalhos académicos" },
  { text: "Avaliadora no Congresso Brasileiro de Engenharia de Produção" },
];
