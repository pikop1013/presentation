'use client';

import { useState } from 'react';
import type { SlideContent } from '../../types/slide';

const features = [
  { name: 'eKYC対応', detail: '本人確認フローに必要なAPI連携と受付制御を実装。' },
  { name: 'マイナンバー対応', detail: '入力・保管・照合の要件に沿った処理を追加。' },
  { name: 'OCR', detail: '画像からの文字取得結果を申し込み情報へ反映。' },
  { name: 'ICカード読み取り', detail: '読取結果の検証と例外時ハンドリングを整備。' },
  { name: '3Dセキュア対応', detail: '決済時の認証連携に合わせて受付フローを調整。' },
];

export function SecurityFeatureSlide({ slide, onNavigate }: { slide: SlideContent; onNavigate?: (slideId: string, style?: 'default' | 'drilldown' | 'back') => void }) {
  void onNavigate;

  const [selected, setSelected] = useState(features[0]);

  return (
    <>
      <h1>{slide.title}</h1>
      <p className="subtitle">{slide.subtitle}</p>

      <div className="security-layout" data-interactive="true">
        <div className="feature-list" role="tablist" aria-label="担当機能">
          {features.map((feature) => (
            <button
              key={feature.name}
              type="button"
              role="tab"
              aria-selected={feature.name === selected.name}
              className={`feature-chip ${feature.name === selected.name ? 'active' : ''}`}
              onClick={() => setSelected(feature)}
              data-interactive="true"
            >
              {feature.name}
            </button>
          ))}
        </div>

        <article className="feature-detail" data-interactive="true">
          <p className="detail-label">選択中の担当領域</p>
          <h2>{selected.name}</h2>
          <p>{selected.detail}</p>
          <p className="emphasis-inline">本人確認・セキュリティまわりの開発を中心に担当。</p>
        </article>
      </div>
    </>
  );
}
