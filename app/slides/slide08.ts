import type { SlideContent } from '../types/slide';

export const slide08: SlideContent = {
  id: 'result',
  title: '成果と学び（案件横断）',
  subtitle: '定量 + 定性でインパクトを示す',
  minutes: '2分',
  accent: 'impact',
  bullets: [
    'バックエンド〜フロントエンドまで、開発フェーズを跨いで対応できる幅を獲得',
    'セキュリティ・本人確認・教育サービスそれぞれで必要な品質観点を理解',
    '要件が曖昧な段階でも、確認事項を整理して実装に落とし込む力を強化',
  ],
  drilldowns: [
    {
      label: '成果の具体例',
      detail: '仕様の曖昧さを早期に検知し、確認論点を先に整理してレビュー差し戻しを減らせるようになりました。',
    },
    {
      label: '次に伸ばす領域',
      detail: '実装だけでなく、設計段階でのリスク抽出と関係者調整をより前倒しで実施することを目標にしています。',
    },
  ],
};
