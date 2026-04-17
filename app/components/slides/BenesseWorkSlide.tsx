'use client';

import { useMemo, useState } from 'react';
import type { SlideContent } from '../../types/slide';

type Mode = 'main' | 'junbi';

const rows = [
  { key: '学習コンテンツ', main: '全機能を提供', junbi: '体験向けに厳選して提供' },
  { key: '学習導線', main: '複数コースへ遷移', junbi: '迷わない1ルートに整理' },
  { key: '保護者向け設定', main: '詳細設定あり', junbi: '必要項目のみに簡略化' },
  { key: '通知・誘導', main: '通常キャンペーン導線', junbi: '入学準備向けメッセージに変更' },
];

export function BenesseWorkSlide({ slide, onNavigate }: { slide: SlideContent; onNavigate?: (slideId: string, style?: 'default' | 'drilldown' | 'back') => void }) {
  void onNavigate;

  const [mode, setMode] = useState<Mode>('junbi');

  const summary = useMemo(
    () =>
      mode === 'main'
        ? '本体講座: フル機能を前提とした構成'
        : '入準版: 体験しやすさを優先した構成',
    [mode],
  );

  return (
    <>
      <h1>{slide.title}</h1>
      <p className="subtitle">{slide.subtitle}</p>

      <div className="tab-row" data-interactive="true">
        <button
          type="button"
          className={mode === 'main' ? 'tab active' : 'tab'}
          onClick={() => setMode('main')}
          data-interactive="true"
        >
          本体講座
        </button>
        <button
          type="button"
          className={mode === 'junbi' ? 'tab active' : 'tab'}
          onClick={() => setMode('junbi')}
          data-interactive="true"
        >
          入準版
        </button>
      </div>

      <div className="app-mock" data-interactive="true">
        <div className="mock-header">
          <span className="app-dot" />
          <p>{summary}</p>
        </div>

        <div className="compare-grid">
          {rows.map((row) => (
            <div key={row.key} className="compare-row">
              <p className="compare-key">{row.key}</p>
              <p className={mode === 'main' ? 'compare-value active' : 'compare-value'}>{row.main}</p>
              <p className={mode === 'junbi' ? 'compare-value active' : 'compare-value'}>{row.junbi}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="emphasis">本体講座をベースに、入準向けへ「制限」と「調整」を加えて対応しました。</p>
    </>
  );
}
