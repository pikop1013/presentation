import type { SlideContent } from '../types/slide';

export const slide06: SlideContent = {
  id: 'hobby-2',
  layoutGroup: 'hobby-flow',
  title: '趣味・制作活動（後半）',
  subtitle: '大学での制作・運営経験',
  minutes: '2分',
  bullets: [
    '大学では美術部部長として企画・制作を担当',
    'バックイントレ制作、勧誘ポスター制作、展示運営を経験',
    '作品展示やイベント出展を継続',
  ],
  placeholders: [
    { label: '大学 美術部宣伝ポスター', imageSrc: '/images/poster.jpg', imageAlt: '大学 美術部宣伝ポスター' },
    { label: '大学美術部 バックイントレ', imageSrc: '/images/backintre.jpg', imageAlt: '大学美術部 バックイントレ' },
    { label: '自作作品ギャラリー', imageSrc: '/images/made.jpg', imageAlt: '自作作品ギャラリー' },
  ],
  placeholderLayout: 'gallery',
};
