'use client';

import { useMemo, useState } from 'react';

type SlideContent = {
  title: string;
  subtitle: string;
  bullets?: string[];
  cards?: { heading: string; text: string }[];
  timeline?: [string, string][];
  emphasis?: string;
};

const slides: SlideContent[] = [
  {
    title: 'React × Next.jsで作る発表資料',
    subtitle: '動く・育てる・公開できる、プロダクト指向のプレゼン',
    bullets: [
      'UIはReactコンポーネントで部品化',
      'Next.jsで配信最適化（SSR / SSG / Routing）',
      '資料を「使い捨て」で終わらせない運用へ',
    ],
  },
  {
    title: 'この技術選定の狙い',
    subtitle: '資料作成の体験を、開発体験に寄せる',
    bullets: [
      'デザイン差し替えや再利用が容易',
      'データやAPIと接続し、ライブデモに拡張可能',
      'チーム開発（レビュー / CI）にそのまま乗る',
    ],
  },
  {
    title: 'Reactの強みを活かす構成',
    subtitle: '「1枚のスライド = 1コンポーネント」設計',
    cards: [
      {
        heading: '再利用性',
        text: 'タイトル、図解、比較表などを共通コンポーネント化。',
      },
      {
        heading: '状態管理',
        text: '現在ページ、表示モード、注釈表示を状態として制御。',
      },
      {
        heading: '拡張性',
        text: 'グラフやフォーム、動画埋め込みを後から追加しやすい。',
      },
    ],
  },
  {
    title: 'Next.jsの強みを活かす構成',
    subtitle: '公開・運用まで考えたプレゼン基盤',
    cards: [
      {
        heading: '高速表示',
        text: 'Server Components と最適化で初期表示を高速化。',
      },
      {
        heading: '配信しやすい',
        text: 'URL共有でどこからでも閲覧、更新は即時デプロイ。',
      },
      {
        heading: 'SEO / 共有最適化',
        text: 'metadata設定で検索・SNS共有時の見え方を整備。',
      },
    ],
  },
  {
    title: '今回の発表資料で入れるべき要素',
    subtitle: '「技術の強み」が伝わる見せ方にする',
    timeline: [
      ['導入', '課題 → なぜWeb化するのか'],
      ['中盤', 'Reactの部品化で生産性向上を実演'],
      ['後半', 'Next.jsで公開・運用が楽になる点を提示'],
      ['締め', '将来拡張（ダッシュボード化 / CMS連携）'],
    ],
  },
  {
    title: '次のアクション',
    subtitle: 'まずは最小構成で公開し、改善を回す',
    bullets: [
      'このテンプレートをベースに内容を差し替える',
      'VercelなどでデプロイしてURL共有する',
      'レビューを受け、スライドを継続改善する',
    ],
    emphasis: '結論：React/Next.jsなら「発表資料」も継続的に成長させられる。',
  },
];

function Slide({ slide }: { slide: SlideContent }) {
  return (
    <section className="slide" aria-live="polite">
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
