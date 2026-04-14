import type { SlideContent } from '../types/slide';

export const slide07: SlideContent = {
  id: 'training',
  title: '研修（4月〜6月）',
  subtitle: '入社後、研修として目安箱システムを開発しました',
  minutes: '2分',
  accent: 'training',
  bullets: [
    '社内向けの目安箱システムを実装',
    '製造した成果物が社内Wiki掲載版として採用',
    '要件確認〜実装〜改善までを経験',
  ],
  drilldowns: [
    {
      label: '補足',
      detail: '現在はメンテナンス中のため、一時的に利用停止です。',
    },
  ],
};
