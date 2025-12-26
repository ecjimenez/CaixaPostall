export interface Metric {
  title: string;
  value: string | number;
  subValue: string;
  color: string;
  bgColor: string;
  iconName: 'Send' | 'MailOpen' | 'MousePointerClick' | 'Percent' | 'UserMinus' | 'Youtube';
}

export const metricsData: Metric[] = [
  {
    title: "Total Enviados",
    value: "0",
    subValue: "Inscritos que receberam",
    color: "#155dfc",
    bgColor: "#dbeafe",
    iconName: "Send"
  },
  {
    title: "Aberturas",
    value: "0",
    subValue: "Taxa: 0.00%",
    color: "#00a63e",
    bgColor: "#dcfce7",
    iconName: "MailOpen"
  },
  {
    title: "Cliques",
    value: "0",
    subValue: "Taxa: 0.00%",
    color: "#9810fa",
    bgColor: "#f3e8ff",
    iconName: "MousePointerClick"
  },
  {
    title: "Taxa de Cliques",
    value: "0.00%",
    subValue: "Cliques por abertura",
    color: "#f54900",
    bgColor: "#ffedd4",
    iconName: "Percent"
  },
  {
    title: "Taxa de Abertura",
    value: "0.00%",
    subValue: "Aberturas por envio",
    color: "#0092b8",
    bgColor: "#cefafe",
    iconName: "Percent"
  },
  {
    title: "Unsubscribes",
    value: "0",
    subValue: "Cancelamentos",
    color: "#e7000b",
    bgColor: "#ffe2e2",
    iconName: "UserMinus"
  }
];

export const evolutionData = [
  { date: '30 de nov.', sent: 0, opens: 0, clicks: 0 },
  { date: '07 de dez.', sent: 0, opens: 0, clicks: 0 },
  { date: '14 de dez.', sent: 0, opens: 0, clicks: 0 },
];

export const conversionData = [
  { date: '30 de nov.', openRate: 0, clickRate: 0 },
  { date: '07 de dez.', openRate: 0, clickRate: 0 },
  { date: '14 de dez.', openRate: 0, clickRate: 0 },
];

export const unsubscribeData = [
  { date: '30 de nov.', unsubs: 0 },
  { date: '07 de dez.', unsubs: 0 },
  { date: '14 de dez.', unsubs: 0 },
];

export const linkPerformanceData = [
  { url: "https://kit.com/features", clicks: 0, percentage: 0 },
  { url: "https://kit.com/pricing", clicks: 0, percentage: 0 },
  { url: "https://iguatemi.com.br/jk-iguatemi/eventos", clicks: 0, percentage: 0 },
  { url: "https://blog.kit.com/new-features", clicks: 0, percentage: 0 },
  { url: "https://iguatemi.com.br/campanhas/natal-2025", clicks: 0, percentage: 0 },
  { url: "https://twitter.com/kit", clicks: 0, percentage: 0 },
  { url: "https://kit.com/login", clicks: 0, percentage: 0 },
];

export const editions = [
  "Fim de caso, a onda dos adesivos e… socorro! Eu estou rico! - 14 de dezembro de 2025",
  "A revolução dos newsletters - 07 de dezembro de 2025",
  "O futuro do email marketing - 30 de novembro de 2025"
];