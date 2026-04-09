import type { SlideContent } from '../types/slide';

export const slide06: SlideContent = {
  id: 'benesse-frontend',
  title: '11月〜：ベネッセ様 入準開発（フロントエンド）',
  subtitle: 'BYOD対応Webアプリを React / Next.js で開発',
  minutes: '2分',
  accent: 'frontend',
  cards: [
    { heading: '対象サービス', text: 'こどもちゃれんじ利用者向け「進研ゼミ小学講座 入学準備講座」体験アプリ。' },
    { heading: '開発スタック', text: 'React + Next.js を中心に、画面実装・状態管理・品質担保を担当。' },
    { heading: '開発方針', text: '本体講座機能をベースに、入準向けに機能制限・文言調整・導線最適化を実施。' },
  ],
  drilldowns: [
    {
      label: 'クリックで見る：状態管理の設計',
      detail: '体験版と本体版で分岐が増えすぎないよう、表示可否ルールをコンポーネント外へ寄せてテストしやすくしました。',
    },
    {
      label: 'クリックで見る：BYOD考慮',
      detail: '画面幅や入力方式の違いに合わせ、操作ボタンのサイズ・余白・フォーカス導線を端末別に調整しました。',
    },
  ],
};
