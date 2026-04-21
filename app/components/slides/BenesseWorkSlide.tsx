'use client';

import { useState } from 'react';
import type { SlideContent } from '../../types/slide';

type TabKey = 'entry' | 'flow' | 'screens';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'entry', label: '比較観点' },
  { key: 'flow', label: '導線比較' },
  { key: 'screens', label: '画面モック' },
];

export function BenesseWorkSlide({ slide }: { slide: SlideContent; onNavigate?: (slideId: string, style?: 'default' | 'drilldown' | 'back') => void }) {
  const [activeTab, setActiveTab] = useState<TabKey>('entry');

  return (
    <>
      <h1>{slide.title}</h1>
      <p className="subtitle">{slide.subtitle}</p>

      <div className="tab-row" data-interactive="true">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            className={activeTab === tab.key ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(tab.key)}
            data-interactive="true"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section className="benesse-dashboard" data-interactive="true">
        {activeTab === 'entry' && (
          <div className="compare-grid">
            <div className="compare-row">
              <p className="compare-key">観点</p>
              <p className="compare-value">本体講座</p>
              <p className="compare-value active">入準版</p>
            </div>
            <div className="compare-row">
              <p className="compare-key">導線</p>
              <p className="compare-value">通常の学習導線</p>
              <p className="compare-value active">年長向けに短く単純化</p>
            </div>
            <div className="compare-row">
              <p className="compare-key">機能</p>
              <p className="compare-value">フル機能</p>
              <p className="compare-value active">必要機能に絞って提供</p>
            </div>
            <div className="compare-row">
              <p className="compare-key">表記</p>
              <p className="compare-value">小学生向け標準</p>
              <p className="compare-value active">ルビ追加・漢字調整</p>
            </div>
          </div>
        )}

        {activeTab === 'flow' && (
          <article className="benesse-flow">
            <div className="flow-node">
              <p className="flow-label">起点</p>
              <strong>本体講座の既存UI</strong>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-stack">
              <p className="flow-label">入準版での調整</p>
              <ul>
                <li>不要導線の削減</li>
                <li>文言・操作の簡略化</li>
                <li>BYODでの挙動調整</li>
              </ul>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-node accent">
              <p className="flow-label">着地</p>
              <strong>迷わず進める入準導線</strong>
            </div>
          </article>
        )}

        {activeTab === 'screens' && (
          <div className="screen-card-grid">
            <article className="media-placeholder">
              <div className="media-frame" />
              <h3>本体講座 画面</h3>
            </article>
            <article className="media-placeholder">
              <div className="media-frame" />
              <h3>入準版 画面</h3>
            </article>
            <article className="media-placeholder">
              <div className="media-frame" />
              <h3>差分ハイライト</h3>
            </article>
          </div>
        )}
      </section>

      <p className="emphasis">タブ切替だけで比較ポイントを順番に示せる、実演しやすいUIにしています。</p>
    </>
  );
}
