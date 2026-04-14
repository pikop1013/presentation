import type { SlideContent } from '../types/slide';

export const slide07: SlideContent = {
  id: 'training',
  title: '研修（4月〜6月）',
  subtitle: '入社後、研修として目安箱システムを開発しました。',
  minutes: '2分',
  accent: 'training',
  bullets: [
    '研修課題として、目安箱システムの開発を実施',
    '実装〜レビュー〜改善まで一通り経験',
    '成果物は社内Wiki掲載の目安箱システムとして採用',
  ],
  drilldowns: [
    {
      label: '補足メモ（発表者向け）',
      detail: '現在はメンテナンス中のため一時的に利用停止中です。',
    },
  ],
};
