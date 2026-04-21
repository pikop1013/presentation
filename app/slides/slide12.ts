import type { SlideContent } from '../types/slide';

export const slide12: SlideContent = {
  id: 'service-adjust',
  title: 'サービス説明と調整内容',
  subtitle: '完全新規ではなく、既存講座をベースに入準版へ最適化',
  minutes: '2分',
  bullets: [
    'チャレンジタッチで受講できる進研ゼミ小学講座がベース',
    'こどもちゃれんじ年長ユーザー（Y6）向けに仕様を調整',
    '機能の一部制限、コンテンツ仕様調整、ルビ追加・漢字調整、BYOD対応を実施',
  ],
  placeholders: [
    { label: 'ベネッセアプリ画面（ベース）' },
    { label: 'ベネッセアプリ画面（入準向け調整後）' },
  ],
  placeholderLayout: 'double',
};
