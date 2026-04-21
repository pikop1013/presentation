import type { SlideContent } from '../types/slide';

export const slide15: SlideContent = {
  id: 'challenges',
  title: '苦労した点と学び',
  subtitle: '課題を通じて得た判断軸',
  minutes: '2分',
  cards: [
    { heading: 'BYOD対応の不具合', text: 'iPadのみ・特定遷移のみで発生。再現条件の切り分けを徹底して原因を特定。' },
    { heading: 'AI支援開発', text: '実装効率は向上。ただし提案の妥当性を見極めるレビュー力が必須。' },
    { heading: '本体講座との整合', text: '並行改修される本体側コードと揃えつつ、入準向け差分を維持。' },
  ],
  emphasis: '難しさを「品質を守るための判断経験」に変えられたことが大きな学び。',
};
