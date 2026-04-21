'use client';

import { useMemo, useState } from 'react';
import type { SlideContent } from '../../types/slide';

type TabKey = 'overview' | 'adjustments' | 'ownership' | 'challenges';
type ScreenKey = 'settings' | 'gacha' | 'game';
type ChallengeKey = 'byod' | 'ai' | 'sync';

const tabs: { key: TabKey; label: string }[] = [
  { key: 'overview', label: 'サービス概要' },
  { key: 'adjustments', label: '調整内容' },
  { key: 'ownership', label: '担当画面' },
  { key: 'challenges', label: '大変だったこと' },
];

const screens: { key: ScreenKey; title: string; summary: string }[] = [
  { key: 'settings', title: '設定画面', summary: '受講に必要な初期設定と制限導線を整理。保護者・利用環境に合わせて迷いを減らす。' },
  { key: 'gacha', title: 'ガチャ画面', summary: '楽しさは残しつつ、入準版で使わない機能を整理。年長向けUIに合わせて調整。' },
  { key: 'game', title: 'ゲーム画面', summary: '進研ゼミ小学講座の学習体験を活かしつつ、仕様変更とBYOD対応を反映。' },
];

const challenges: { key: ChallengeKey; title: string; detail: string }[] = [
  {
    key: 'byod',
    title: 'BYOD対応の原因調査',
    detail: 'iPadのみ・特定遷移のみで発生する不具合があり、再現条件の切り分けと原因特定に時間がかかった。',
  },
  {
    key: 'ai',
    title: 'AI提案の妥当性判断',
    detail: 'Cursorの提案は便利だったが、初利用ライブラリも多く、提案をそのまま採用せず実装意図を確認しながら進めた。',
  },
  {
    key: 'sync',
    title: '本体講座との差分管理',
    detail: '本体講座が継続改修される中で、コードをできるだけ揃えつつ入準側の修正を入れる運用が難しかった。',
  },
];

export function BenesseWorkSlide({ slide, onNavigate }: { slide: SlideContent; onNavigate?: (slideId: string, style?: 'default' | 'drilldown' | 'back') => void }) {
  void onNavigate;

  const [activeTab, setActiveTab] = useState<TabKey>('overview');
  const [activeScreen, setActiveScreen] = useState<ScreenKey>('settings');
  const [activeChallenge, setActiveChallenge] = useState<ChallengeKey>('byod');

  const activeScreenData = useMemo(() => screens.find((item) => item.key === activeScreen) ?? screens[0], [activeScreen]);
  const activeChallengeData = useMemo(
    () => challenges.find((item) => item.key === activeChallenge) ?? challenges[0],
    [activeChallenge],
  );

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
        {activeTab === 'overview' && (
          <div className="benesse-panel-grid">
            <article className="benesse-panel">
              <p className="detail-label">何の開発か</p>
              <h2>特別一年生準備コンテンツ</h2>
              <p>2026年5月1日サービス開始。進研ゼミ小学講座（チャレンジタッチ）をベースに、Y6（2020年生まれ）向けへ提供。</p>
            </article>

            <article className="benesse-flow" aria-label="サービス変換フロー">
              <div className="flow-node">
                <p className="flow-label">ベース</p>
                <strong>進研ゼミ小学講座</strong>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-stack">
                <p className="flow-label">入準向け調整</p>
                <ul>
                  <li>機能の制限</li>
                  <li>一部コンテンツの仕様変更</li>
                  <li>ルビ追加・漢字調整</li>
                  <li>BYOD対応</li>
                </ul>
              </div>
              <div className="flow-arrow">→</div>
              <div className="flow-node accent">
                <p className="flow-label">提供先</p>
                <strong>こどもちゃれんじじゃんぷ生（Y6）</strong>
              </div>
            </article>
          </div>
        )}

        {activeTab === 'adjustments' && (
          <div className="benesse-adjustments">
            <h2>本体講座をそのまま出すのではなく、入準向けに具体的に調整</h2>
            <div className="adjustment-chips">
              <span>機能の制限</span>
              <span>一部コンテンツの仕様変更</span>
              <span>ルビ付与・漢字を使わない表現調整</span>
              <span>BYOD前提の操作・表示対応</span>
            </div>
            <p className="muted-copy">「一般比較」ではなく、既存講座を年長向けに成立させるための実装調整を中心に開発。</p>
          </div>
        )}

        {activeTab === 'ownership' && (
          <div className="benesse-ownership">
            <article className="benesse-panel">
              <p className="detail-label">自分の担当</p>
              <h2>フロントエンド実装</h2>
              <p>Cursor / React / Next.js を使って、入準版に必要な画面・振る舞いを実装。</p>
            </article>

            <div className="screen-card-grid">
              {screens.map((screen) => (
                <button
                  key={screen.key}
                  type="button"
                  className={activeScreen === screen.key ? 'feature-chip active' : 'feature-chip'}
                  onClick={() => setActiveScreen(screen.key)}
                  data-interactive="true"
                >
                  {screen.title}
                </button>
              ))}
            </div>

            <article className="feature-detail">
              <p className="detail-label">選択中の担当画面</p>
              <h3>{activeScreenData.title}</h3>
              <p>{activeScreenData.summary}</p>
            </article>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="benesse-challenges">
            <div className="screen-card-grid">
              {challenges.map((item) => (
                <button
                  key={item.key}
                  type="button"
                  className={activeChallenge === item.key ? 'feature-chip active' : 'feature-chip'}
                  onClick={() => setActiveChallenge(item.key)}
                  data-interactive="true"
                >
                  {item.title}
                </button>
              ))}
            </div>
            <article className="feature-detail">
              <p className="detail-label">選択中の論点</p>
              <h3>{activeChallengeData.title}</h3>
              <p>{activeChallengeData.detail}</p>
            </article>
          </div>
        )}
      </section>

      <p className="emphasis">「既存の小学講座を、年長向けに安全に成立させる」ための調整開発と担当範囲が伝わる構成に再設計。</p>
    </>
  );
}
