import type { SlideContent } from '../types/slide';

export const slide05: SlideContent = {
  id: 'stnet-detail',
  title: 'ピカラ案件：技術要素と難所',
  subtitle: '金融・本人確認系の要件を実装に落とし込む',
  minutes: '2分',
  accent: 'security',
  bullets: [
    '本人確認フローは分岐が多く、状態遷移を明確化して実装',
    '外部サービス障害時のリトライ・フォールバック方針を整理',
    '監査・運用を意識したログ設計と、問い合わせしやすい構造化を実施',
  ],
};
