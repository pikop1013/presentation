import type { SlideContent } from '../types/slide';

export const slide14: SlideContent = {
  id: 'ownership',
  title: '担当領域',
  subtitle: '自分が実装を担当した画面と技術スタック',
  minutes: '1分',
  cards: [
    { heading: '担当画面', text: '設定画面 / ガチャ画面 / ゲーム画面' },
    { heading: '技術', text: 'React / Next.js' },
    { heading: '開発スタイル', text: 'Cursorを活用したAI支援開発で実装効率を向上' },
  ],
  placeholders: [
    { label: '設定画面キャプチャ' },
    { label: 'ガチャ画面キャプチャ' },
    { label: 'ゲーム画面キャプチャ' },
  ],
  placeholderLayout: 'gallery',
};
