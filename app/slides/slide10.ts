import type { SlideContent } from '../types/slide';

export const slide10: SlideContent = {
  id: 'stnet',
  title: 'STNet案件',
  subtitle: 'ピカラ開発で申込受付サービスのバックエンドを担当',
  minutes: '2分',
  cards: [
    { heading: '担当領域', text: 'Java / Spring Bootで申込受付サービスを開発。' },
    { heading: '機能', text: 'eKYC・マイナンバー対応・OCR・ICカード読み取り・3Dセキュア。' },
    { heading: '開発姿勢', text: '安全性と例外ケースを意識して実装・検証を実施。' },
  ],
  placeholders: [
    { label: 'STNet挿絵' },
    { label: 'STNetサイト画像' },
  ],
  placeholderLayout: 'double',
};
