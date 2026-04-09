import type { SlideContent } from '../types/slide';

export const slide04: SlideContent = {
  id: 'stnet-backend',
  title: '7月〜10月：STNet様 ピカラ開発（バックエンド）',
  subtitle: '申込受付サービスを中心に、本人確認・決済連携へ対応',
  minutes: '4分',
  accent: 'backend',
  bullets: [
    '担当：Java / Spring Boot による申込受付API・業務ロジック開発',
    '要件：eKYC連携、公的個人認証（マイナンバーカード）対応、ICカード読取、3Dセキュア関連対応',
    '外部連携：ORCなど周辺システムとのI/F調整、エラー時ハンドリング設計',
    '意識した点：セキュリティ要件を満たしながら、保守しやすい構成を維持',
  ],
};
