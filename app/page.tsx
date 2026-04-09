'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

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
    subtitle: '配属後の担当案件と、技術的な取り組みを共有',
    minutes: '1分',
    bullets: ['名前・所属・現在の役割', '今日話す内容（時系列の業務紹介 / 成果 / 学び）', '最後にQ&A（2分）'],
  },
  {
    title: 'アジェンダ（20分）',
    subtitle: '時系列で業務内容をわかりやすく整理',
    minutes: '1分',
    timeline: [
      ['導入', '0:00-2:00 目的 / アジェンダ'],
      ['前半', '2:00-7:00 4月〜6月（研修 / 目安箱システム開発）'],
      ['中盤', '7:00-13:00 7月〜10月（ピカラ申込受付サービス開発）'],
      ['後半', '13:00-18:00 11月〜（ベネッセ入準開発）'],
      ['締め', '17:00-20:00 まとめ / 今後 / Q&A'],
    ],
  },
  {
    title: '4月〜6月：研修と初期開発',
    subtitle: '基礎固めから実務への立ち上がり期間',
    minutes: '2分',
    cards: [
      { heading: '研修', text: '開発プロセス、レビュー観点、業務ドメイン知識を習得。' },
      { heading: '目安箱システム開発', text: '実装〜テスト〜レビューを経験し、チーム開発の基本を定着。' },
      { heading: '立ち上がりの成果', text: '仕様理解と実装スピードの底上げ、報連相の型化を実施。' },
    ],
  },
  {
    title: '7月〜10月：STNet様 ピカラ開発（バックエンド）',
    subtitle: '申込受付サービスを中心に、本人確認・決済連携へ対応',
    minutes: '4分',
    bullets: [
      '担当：Java / Spring Boot による申込受付API・業務ロジック開発',
      '要件：eKYC連携、公的個人認証（マイナンバーカード）対応、ICカード読取、3Dセキュア関連対応',
      '外部連携：ORCなど周辺システムとのI/F調整、エラー時ハンドリング設計',
      '意識した点：セキュリティ要件を満たしながら、保守しやすい構成を維持',
    ],
  },
  {
    title: 'ピカラ案件：技術要素と難所',
    subtitle: '金融・本人確認系の要件を実装に落とし込む',
    minutes: '2分',
    bullets: [
      '本人確認フローは分岐が多く、状態遷移を明確化して実装',
      '外部サービス障害時のリトライ・フォールバック方針を整理',
      '監査・運用を意識したログ設計と、問い合わせしやすい構造化を実施',
    ],
  },
  {
    title: '11月〜：ベネッセ様 入準開発（フロントエンド）',
    subtitle: 'BYOD対応Webアプリを React / Next.js で開発',
    minutes: '2分',
    cards: [
      { heading: '対象サービス', text: 'こどもちゃれんじ利用者向け「進研ゼミ小学講座 入学準備講座」体験アプリ。' },
      { heading: '開発スタック', text: 'React + Next.js を中心に、画面実装・状態管理・品質担保を担当。' },
      { heading: '開発方針', text: '本体講座機能をベースに、入準向けに機能制限・文言調整・導線最適化を実施。' },
    ],
  },
  {
    title: '入準案件：実装した内容',
    subtitle: '体験版として成立させるためのプロダクト調整',
    minutes: '2分',
    timeline: [
      ['機能制限', '本体講座の一部機能を非表示・利用不可にして体験導線を設計'],
      ['UI調整', '子どもと保護者が迷わない画面遷移・文言へ修正'],
      ['挙動調整', '端末差異を考慮し、BYODでも破綻しない表示・操作性を確保'],
      ['品質確認', 'レビュー・検証を通して安定運用できる状態でリリース'],
    ],
  },
  {
    title: '成果と学び（案件横断）',
    subtitle: '定量 + 定性でインパクトを示す',
    minutes: '2分',
    bullets: [
      'バックエンド〜フロントエンドまで、開発フェーズを跨いで対応できる幅を獲得',
      'セキュリティ・本人確認・教育サービスそれぞれで必要な品質観点を理解',
      '要件が曖昧な段階でも、確認事項を整理して実装に落とし込む力を強化',
    ],
  },
  {
    title: '今後のアクション',
    subtitle: '技術力向上とチーム貢献を両立',
    minutes: '3分',
    bullets: [
      '短期：担当領域の仕様理解をさらに深め、品質・速度を継続改善',
      '中期：セキュリティ要件の知見を標準化し、チーム展開',
      '長期：案件を跨いだ知見共有を仕組み化し、開発全体の再現性を向上',
    ],
    emphasis: '補足：マイナンバー関連の方式名（メモの「へ方式 / ほ方式」）は正式名称の確認後に最終版へ反映。',
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
  const mainRef = useRef<HTMLElement | null>(null);

  const progress = useMemo(() => ((current + 1) / slides.length) * 100, [current]);

  const move = useCallback((step: number) => {
    setCurrent((prev) => {
      const next = prev + step;
      if (next < 0 || next >= slides.length) {
        return prev;
      }
      return next;
    });
  }, []);

  const jumpTo = useCallback((index: number) => {
    setCurrent(Math.max(0, Math.min(slides.length - 1, index)));
  }, []);

  useEffect(() => {
    mainRef.current?.focus();
  }, []);

  return (
    <main
      ref={mainRef}
      className="layout"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button')) {
          return;
        }
        move(1);
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') move(1);
        if (event.key === 'ArrowLeft' || event.key === 'PageUp') move(-1);
        if (event.key === 'Home') jumpTo(0);
        if (event.key === 'End') jumpTo(slides.length - 1);
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
