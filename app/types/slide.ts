export type SlideContent = {
  id: string;
  title: string;
  subtitle: string;
  minutes: string;
  accent?: string;
  bullets?: string[];
  cards?: { heading: string; text: string }[];
  timeline?: [string, string][];
  drilldowns?: { label: string; detail: string }[];
  emphasis?: string;
  placeholders?: {
    label: string;
    note?: string;
  }[];
  placeholderLayout?: 'single' | 'double' | 'gallery';
};
