'use client';

import { useMemo, useState } from 'react';

type SlideContent = {
  title: string;
  subtitle: string;
  minutes: string;
  bullets?: string[];
  cards?: { heading: string; text: string }[];
  timeline?: [string, string][];
  emphasis?: string;
};

const slides: SlideContent[] = [
  {
    title: '社内発表：自己紹介 & 業務紹介',
    subtitle: 'React / Next.jsで作る、20分プレゼンのフォーマット',
    minutes: '1分',
    bullets: ['名前・所属・役割', '今日話す内容（自己紹介 / 業務紹介 / 今後）', '質疑応答の時間を最後に2分確保'],
  },
  {
    title: 'アジェンダ（20分）',
    subtitle: '時間配分が見える構成にする',
    minutes: '1分',
    timeline: [
      ['導入', '0:00-2:00 目的 / アジェンダ'],
      ['自己紹介', '2:00-7:00 キャリア / 得意領域 / 価値発揮'],
      ['業務紹介', '7:00-17:00 担当領域 / 成果 / 課題と改善'],
      ['締め', '17:00-20:00 まとめ / 今後 / Q&A'],
    ],
  },
  {
    title: '自己紹介：これまでの経験',
    subtitle: '短く、業務に関係する内容を中心に',
    minutes: '2分',
    cards: [
      { heading: '経歴サマリ', text: 'これまで担当したプロダクトや職種の要点を3つ。' },
      { heading: '得意領域', text: 'フロントエンド設計、UI改善、開発生産性向上など。' },
      { heading: '仕事のスタンス', text: '再現性とチーム連携を重視して進める。' },
    ],
  },
  {
    title: '自己紹介：現在のミッション',
    subtitle: '「何を期待されているか」を明確にする',
    minutes: '3分',
    bullets: [
      '所属チームでの担当範囲（例：画面開発 / 技術選定 / レビュー）',
      '今期の目標（品質・速度・ユーザー体験）',
      '社内で貢献したいテーマ（ナレッジ共有・標準化など）',
    ],
  },
  {
    title: '業務紹介：開発体制と担当範囲',
    subtitle: '全体像 → 自分の担当、の順で話す',
    minutes: '2分',
    bullets: [
      'プロダクトの概要（誰の何を解決しているか）',
      'チーム構成（PM / デザイナー / FE / BE）',
      '自分が責任を持つ機能と意思決定ポイント',
    ],
  },
  {
    title: '業務紹介：React / Next.js採用の理由',
    subtitle: '技術選定を、価値に結び付けて説明する',
    minutes: '2分',
    cards: [
      { heading: 'React', text: 'コンポーネント分割で再利用性と保守性を高める。' },
      { heading: 'Next.js', text: 'Routing・最適化・配信基盤で開発と運用を効率化。' },
      { heading: 'TypeScript', text: '型安全性で仕様変更時の品質劣化を抑える。' },
    ],
  },
  {
    title: '業務紹介：日々の開発フロー',
    subtitle: 'コードで資料を作るメリットもここで接続する',
    minutes: '2分',
    timeline: [
      ['設計', 'Issue化 / 影響範囲確認 / 実装方針レビュー'],
      ['実装', 'コンポーネント分割 / Story確認 / PR作成'],
      ['品質', 'Lint / 型チェック / 動作確認 / コードレビュー'],
      ['改善', '振り返りを次スプリントへ反映'],
    ],
  },
  {
    title: '業務紹介：成果と学び',
    subtitle: '定量 + 定性でインパクトを示す',
    minutes: '2分',
    bullets: [
      'リードタイム短縮、バグ削減、UX改善などの実績',
      '取り組みで得た学び（設計・レビュー・連携）',
      '今後さらに伸ばしたい技術テーマ',
    ],
  },
  {
    title: '今後のアクション',
    subtitle: '個人目標とチーム貢献をセットで示す',
    minutes: '3分',
    bullets: [
      '短期：担当機能の品質向上と開発速度の最適化',
      '中期：共通コンポーネント整備と実装ルール統一',
      '長期：ナレッジ共有を仕組み化し、組織に展開',
    ],
    emphasis: 'この資料自体をReact / Next.jsで運用し、継続改善していく。',
  },
  {
    title: 'まとめ & Q&A',
    subtitle: '自己紹介と業務紹介を、今後の協働につなげる',
    minutes: '2分',
    bullets: ['今日の要点3つを再確認', '連携して進めたいテーマを提示', '質問・フィードバックを募集'],
  },
];

function Slide({ slide }: { slide: SlideContent }) {
  return (
    <section className="slide" aria-live="polite">
      <p className="minutes">想定時間: {slide.minutes}</p>
      <h1>{slide.title}</h1>
      <p className="subtitle">{slide.subtitle}</p>

      {slide.bullets && (
        <ul>
          {slide.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      {slide.cards && (
        <div className="cards">
          {slide.cards.map((card) => (
            <article key={card.heading} className="card">
              <h2>{card.heading}</h2>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      )}

      {slide.timeline && (
        <div className="timeline">
          {slide.timeline.map(([phase, detail]) => (
            <div key={phase} className="timeline-item">
              <strong>{phase}</strong>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      )}

      {slide.emphasis && <p className="emphasis">{slide.emphasis}</p>}
    </section>
  );
}

export default function Home() {
  const [current, setCurrent] = useState<number>(0);

  const progress = useMemo(() => ((current + 1) / slides.length) * 100, [current]);

  const move = (step: number) => {
    setCurrent((prev) => {
      const next = prev + step;
      if (next < 0 || next >= slides.length) {
        return prev;
      }
      return next;
    });
  };

  return (
    <main
      className="layout"
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'PageDown') move(1);
        if (event.key === 'ArrowLeft' || event.key === 'PageUp') move(-1);
      }}
      tabIndex={0}
    >
      <div className="progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <Slide slide={slides[current]} />

      <footer className="controls">
        <button type="button" onClick={() => move(-1)} disabled={current === 0}>
          ◀ Prev
        </button>
        <p>
          {current + 1} / {slides.length}
        </p>
        <button type="button" onClick={() => move(1)} disabled={current === slides.length - 1}>
          Next ▶
        </button>
      </footer>
    </main>
  );
}
