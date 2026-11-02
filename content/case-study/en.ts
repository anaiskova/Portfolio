import type { CaseStudy } from "../types";

/** Case study in English (/case-study). */
export const caseEn: CaseStudy = {
  lang: "en",
  locale: "en-GB",
  navLabel: "Case study",

  eyebrow: "Case study · Survey analytics · Consumer behaviour",
  title: "How did music festival-goers change after COVID-19?",
  subtitle: "From 1,000+ survey responses to clear business insights",
  intro:
    "I designed an international, three-language survey, cleaned and validated the data, built a statistical model in SPSS and translated the results into practical recommendations for festival organisers on pricing, communication and audience segmentation.",
  source: "Based on my PhD research, University of Aveiro (2025)",
  backToSite: "Back to the site",
  downloadPdf: "Download the PDF",
  pdfNote: "",

  stats: [
    { value: "1,000+", label: "responses collected, validated into a final sample of 402" },
    { value: "8+", label: "countries of residence (BR, NL, PT, FR, LU, ES…)" },
    { value: "3", label: "survey languages: Portuguese, English, French" },
    { value: "40", label: "variables in the explanatory model" },
  ],

  teaser: {
    eyebrow: "Featured case study",
    text: "From 1,000+ survey responses to business recommendations: survey design, data cleaning, factor analysis, hypothesis testing and regression in SPSS.",
    cta: "Read the case study",
  },

  question: {
    title: "The business question",
    text: "Festivals reopened after the pandemic, but did their audiences come back the same? Organisers needed to know what changed in how people choose, plan and spend at festivals, and which audience profiles changed the most, in order to adjust pricing, communication and event formats.",
  },

  data: {
    title: "The data",
    text: "Online questionnaire built on the University of Aveiro platform and distributed through festival communities, social media and festival organisers (Sept–Oct 2025). Respondents compared their behaviour before and after the pandemic across three phases: participation, pre-event planning and behaviour during the event. Sample: 61% women, mostly 18–34, 73% employed.",
  },

  method: {
    title: "How I worked",
    toolsAria: "Tools and methods",
    tools: [
      "SPSS",
      "Survey design",
      "Data cleaning",
      "Factor analysis",
      "Hypothesis testing",
      "Regression",
      "Segmentation",
    ],
    steps: [
      {
        title: "Scoping",
        text: "Two systematic literature reviews (147 and 54 studies) to define the variables and measurement scales.",
      },
      {
        title: "Survey design",
        text: "Questionnaire in 3 languages, pre-tested and reviewed before launch, with consent and data-protection approval.",
      },
      {
        title: "Data quality",
        text: "Screened 1,000+ responses for eligibility, completeness, input errors and outliers, keeping 402 valid cases for analysis.",
      },
      {
        title: "Dimension reduction",
        text: "Factor analysis (PCA) to group 12 planning items into 3 clear drivers, explaining 83% of the variance; reliability α = 0.92–0.96.",
      },
      {
        title: "Testing",
        text: "Before/after comparisons (paired t-test, Wilcoxon) and group differences (t-test, Kruskal–Wallis, Spearman).",
      },
      {
        title: "Modelling",
        text: "Multiple linear and binary logistic regression to find which factors explain each change.",
      },
    ],
  },

  attendanceChart: {
    title: "Festival attendance became more frequent after the pandemic",
    subtitle: "Share of respondents by number of festivals attended per year (n = 402)",
    before: "Before the pandemic",
    after: "After the pandemic",
    axisLabel: "Share of respondents",
    rows: [
      { category: "1–2 festivals a year", before: 85.1, after: 32.8 },
      { category: "3–5 festivals a year", before: 14.2, after: 63.7 },
      { category: "More than 5 a year", before: 0.7, after: 3.5 },
    ],
    note: "Wilcoxon signed-rank test: Z = −14.15, p < 0.001. The share attending 3–5 festivals a year rose from 14% to 64%.",
  },

  results: {
    title: "What the data showed",
    items: [
      {
        value: "+50 pts",
        title: "Demand came back stronger",
        text: "Increase in the share of people attending 3–5 festivals a year, with a clear preference for outdoor events.",
      },
      {
        title: "Price-sensitive, but still spending",
        text: "Price and cost sensitivity was the strongest planning driver (33% of the variance), yet there was no clear cutback in spending once people were at the festival.",
      },
      {
        title: "Official channels win",
        text: "People now rely much more on official festival websites and social media, and much less on friends and family, to decide whether to go.",
      },
    ],
  },

  behaviourChart: {
    title: "Where behaviour changed the most",
    subtitle:
      "Average agreement with each statement after the pandemic, on a 1–7 scale. The centre line means no change; bars to the right mean more agreement.",
    centreLabel: "4 · no change",
    moreLabel: "More agreement",
    lessLabel: "Less agreement",
    items: [
      { label: "Look for more info on official channels", value: 5.78 },
      { label: "Follow health-authority guidance more", value: 5.61 },
      { label: "Value socialising at festivals more", value: 5.27 },
      { label: "Prefer outdoor festivals", value: 4.7 },
      { label: "More sensitive to ticket prices and costs", value: 4.57 },
      { label: "Pro-social and protective behaviour", value: 3.74 },
      { label: "Cut back on extra spending at the event", value: 3.63 },
      { label: "Preventive behaviour before the event", value: 3.0 },
      { label: "Rely more on friends and family for info", value: 2.76 },
      { label: "Wear a mask during the festival", value: 2.31 },
    ],
    note: "n = 402. All differences from the midpoint are statistically significant (one-sample t-tests, p < 0.01). Values below 4 mean respondents disagreed that the behaviour increased. Some rows are averages of validated multi-item scales.",
  },

  explains: {
    title: "What explains the changes",
    text: "The regression models showed that the changes were not the same for everyone. The strongest explanatory factors were country of residence, perceived risk and motivations, with lifestyle and personality mattering for specific behaviours. In other words, the audience splits into segments that respond differently, and one message or price strategy will not fit all of them.",
  },

  recommendations: {
    title: "Recommendations for organisers",
    items: [
      {
        title: "Win the ticket decision on price.",
        text: "Show the full cost up front and offer tiered ticket options; on-site spending has held up, so the barrier is getting people to buy.",
      },
      {
        title: "Invest in official channels.",
        text: "Clear, up-to-date information on the website and social media now drives the decision to attend.",
      },
      {
        title: "Segment the audience.",
        text: "Group it by country, risk perception and motivation to tailor formats and messages.",
      },
      {
        title: "Prioritise outdoor formats.",
        text: "Treat online events as a complement, not a substitute.",
      },
    ],
  },

  methodsFooter: "Methods: survey design · data cleaning · factor analysis · hypothesis testing · regression · SPSS",
};
