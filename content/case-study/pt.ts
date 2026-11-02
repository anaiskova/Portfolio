import type { CaseStudy } from "../types";

/** Estudo de caso em português (/pt/case-study). */
export const casePt: CaseStudy = {
  lang: "pt",
  locale: "pt-PT",
  navLabel: "Estudo de caso",

  eyebrow: "Estudo de caso · Análise de inquéritos · Comportamento do consumidor",
  title: "Como mudou o público dos festivais de música depois da COVID-19?",
  subtitle: "De mais de 1000 respostas a conclusões úteis para o negócio",
  intro:
    "Concebi um inquérito internacional em três línguas, limpei e validei os dados, construí um modelo estatístico em SPSS e traduzi os resultados em recomendações práticas para organizadores de festivais, sobre preços, comunicação e segmentação de público.",
  source: "Com base na minha investigação de doutoramento, Universidade de Aveiro (2025)",
  backToSite: "Voltar ao site",
  downloadPdf: "Descarregar o PDF",
  pdfNote: "em inglês",

  stats: [
    { value: "1000+", label: "respostas recolhidas, validadas numa amostra final de 402" },
    { value: "8+", label: "países de residência (BR, NL, PT, FR, LU, ES…)" },
    { value: "3", label: "línguas do inquérito: português, inglês e francês" },
    { value: "40", label: "variáveis no modelo explicativo" },
  ],

  teaser: {
    eyebrow: "Estudo de caso em destaque",
    text: "De mais de 1000 respostas a recomendações de negócio: conceção do inquérito, limpeza de dados, análise fatorial, testes de hipóteses e regressão em SPSS.",
    cta: "Ler o estudo de caso",
  },

  question: {
    title: "A pergunta de negócio",
    text: "Os festivais reabriram depois da pandemia, mas o público voltou na mesma? Os organizadores precisavam de saber o que mudou na forma como as pessoas escolhem, planeiam e gastam nos festivais, e que perfis de público mudaram mais, para ajustarem preços, comunicação e formatos de evento.",
  },

  data: {
    title: "Os dados",
    text: "Questionário online construído na plataforma da Universidade de Aveiro e distribuído através de comunidades de festivais, redes sociais e organizadores (setembro e outubro de 2025). Os inquiridos compararam o seu comportamento antes e depois da pandemia em três fases: participação, planeamento antes do evento e comportamento durante o evento. Amostra: 61% mulheres, sobretudo entre os 18 e os 34 anos, 73% empregados.",
  },

  method: {
    title: "Como trabalhei",
    toolsAria: "Ferramentas e métodos",
    tools: [
      "SPSS",
      "Conceção de inquéritos",
      "Limpeza de dados",
      "Análise fatorial",
      "Testes de hipóteses",
      "Regressão",
      "Segmentação",
    ],
    steps: [
      {
        title: "Enquadramento",
        text: "Duas revisões sistemáticas da literatura (147 e 54 estudos) para definir as variáveis e as escalas de medida.",
      },
      {
        title: "Conceção do inquérito",
        text: "Questionário em 3 línguas, pré-testado e revisto antes do lançamento, com consentimento e aprovação em matéria de proteção de dados.",
      },
      {
        title: "Qualidade dos dados",
        text: "Triagem de mais de 1000 respostas quanto a elegibilidade, preenchimento, erros de introdução e valores atípicos, mantendo 402 casos válidos para análise.",
      },
      {
        title: "Redução de dimensões",
        text: "Análise fatorial (PCA) para agrupar 12 itens de planeamento em 3 fatores claros, explicando 83% da variância; fiabilidade α = 0,92 a 0,96.",
      },
      {
        title: "Testes",
        text: "Comparações antes e depois (teste t emparelhado, Wilcoxon) e diferenças entre grupos (teste t, Kruskal-Wallis, Spearman).",
      },
      {
        title: "Modelação",
        text: "Regressão linear múltipla e regressão logística binária para identificar que fatores explicam cada mudança.",
      },
    ],
  },

  attendanceChart: {
    title: "A ida a festivais tornou-se mais frequente depois da pandemia",
    subtitle: "Percentagem de inquiridos por número de festivais por ano (n = 402)",
    before: "Antes da pandemia",
    after: "Depois da pandemia",
    axisLabel: "Percentagem de inquiridos",
    rows: [
      { category: "1 a 2 festivais por ano", before: 85.1, after: 32.8 },
      { category: "3 a 5 festivais por ano", before: 14.2, after: 63.7 },
      { category: "Mais de 5 por ano", before: 0.7, after: 3.5 },
    ],
    note: "Teste de Wilcoxon para amostras emparelhadas: Z = −14,15, p < 0,001. A percentagem de quem vai a 3 a 5 festivais por ano subiu de 14% para 64%.",
  },

  results: {
    title: "O que os dados mostraram",
    items: [
      {
        value: "+50 pts",
        title: "A procura voltou mais forte",
        text: "Aumento na percentagem de pessoas que vão a 3 a 5 festivais por ano, com uma preferência clara por eventos ao ar livre.",
      },
      {
        title: "Sensíveis ao preço, mas continuam a gastar",
        text: "A sensibilidade ao preço e aos custos foi o fator de planeamento mais forte (33% da variância), mas não houve um corte claro nos gastos depois de as pessoas já estarem no festival.",
      },
      {
        title: "Os canais oficiais ganham",
        text: "As pessoas apoiam-se hoje muito mais nos sites oficiais e nas redes sociais dos festivais, e muito menos em amigos e família, para decidirem se vão.",
      },
    ],
  },

  behaviourChart: {
    title: "Onde o comportamento mudou mais",
    subtitle:
      "Concordância média com cada afirmação depois da pandemia, numa escala de 1 a 7. A linha central significa que não houve mudança; as barras para a direita significam maior concordância.",
    centreLabel: "4 · sem mudança",
    moreLabel: "Maior concordância",
    lessLabel: "Menor concordância",
    items: [
      { label: "Procurar mais informação em canais oficiais", value: 5.78 },
      { label: "Seguir mais as orientações das autoridades de saúde", value: 5.61 },
      { label: "Valorizar mais o convívio nos festivais", value: 5.27 },
      { label: "Preferir festivais ao ar livre", value: 4.7 },
      { label: "Ser mais sensível ao preço dos bilhetes e aos custos", value: 4.57 },
      { label: "Comportamento pró-social e de proteção", value: 3.74 },
      { label: "Cortar nos gastos extra durante o evento", value: 3.63 },
      { label: "Comportamento preventivo antes do evento", value: 3.0 },
      { label: "Apoiar-se mais em amigos e família para se informar", value: 2.76 },
      { label: "Usar máscara durante o festival", value: 2.31 },
    ],
    note: "n = 402. Todas as diferenças face ao ponto central são estatisticamente significativas (testes t para uma amostra, p < 0,01). Valores abaixo de 4 significam que os inquiridos discordaram que o comportamento tivesse aumentado. Algumas linhas são médias de escalas validadas com vários itens.",
  },

  explains: {
    title: "O que explica as mudanças",
    text: "Os modelos de regressão mostraram que as mudanças não foram iguais para toda a gente. Os fatores explicativos mais fortes foram o país de residência, o risco percebido e as motivações, com o estilo de vida e a personalidade a pesarem em comportamentos específicos. Por outras palavras, o público divide-se em segmentos que respondem de forma diferente, e uma só mensagem ou estratégia de preços não serve para todos.",
  },

  recommendations: {
    title: "Recomendações para os organizadores",
    items: [
      {
        title: "Ganhar a decisão do bilhete no preço.",
        text: "Mostrar o custo total à partida e oferecer bilhetes por escalões; os gastos no recinto mantiveram-se, por isso a barreira está em levar as pessoas a comprar.",
      },
      {
        title: "Investir nos canais oficiais.",
        text: "Informação clara e atualizada no site e nas redes sociais é hoje o que leva as pessoas a decidir ir.",
      },
      {
        title: "Segmentar o público.",
        text: "Agrupá-lo por país, perceção de risco e motivação, para adaptar formatos e mensagens.",
      },
      {
        title: "Dar prioridade a formatos ao ar livre.",
        text: "Tratar os eventos online como complemento, e não como substituto.",
      },
    ],
  },

  methodsFooter:
    "Métodos: conceção do inquérito · limpeza de dados · análise fatorial · testes de hipóteses · regressão · SPSS",
};
