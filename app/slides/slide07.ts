import type { SlideContent } from '../types/slide';

export const slide07: SlideContent = {
  id: 'benesse-detail',
  title: '入準案件：実装した内容',
  subtitle: '体験版として成立させるためのプロダクト調整',
  minutes: '2分',
  accent: 'ux',
  timeline: [
    ['機能制限', '本体講座の一部機能を非表示・利用不可にして体験導線を設計'],
    ['UI調整', '子どもと保護者が迷わない画面遷移・文言へ修正'],
    ['挙動調整', '端末差異を考慮し、BYODでも破綻しない表示・操作性を確保'],
    ['品質確認', 'レビュー・検証を通して安定運用できる状態でリリース'],
  ],
};
