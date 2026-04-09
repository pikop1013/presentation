export type SlideContent = {
  id: string;
  title: string;
  subtitle: string;
  minutes: string;
  accent?: string;
  bullets?: string[];
  cards?: { heading: string; text: string }[];
  timeline?: [string, string][];
  emphasis?: string;
};
