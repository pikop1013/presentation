import type { SlideContent } from '../types/slide';

export const slide02: SlideContent = {
  id: 'agenda',
  title: 'アジェンダ（20分）',
  subtitle: '時系列で業務内容をわかりやすく整理',
  minutes: '1分',
  accent: 'agenda',
  timeline: [
    ['導入', '0:00-2:00 目的 / アジェンダ'],
    ['前半', '2:00-7:00 4月〜6月（研修 / 目安箱システム開発）'],
    ['中盤', '7:00-13:00 7月〜10月（ピカラ申込受付サービス開発）'],
    ['後半', '13:00-18:00 11月〜（ベネッセ入準開発）'],
    ['締め', '17:00-20:00 まとめ / 今後 / Q&A'],
  ],
};
