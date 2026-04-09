import type { SlideContent } from '../types/slide';

type SlideViewProps = {
  slide: SlideContent;
};

export function SlideView({ slide }: SlideViewProps) {
  return (
    <section className={`slide accent-${slide.accent ?? 'default'}`} aria-live="polite">
      <div className="slide-head">
        <p className="minutes">想定時間: {slide.minutes}</p>
        <span className="chip">React + Next.js Deck</span>
      </div>

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

      {slide.drilldowns && slide.drilldowns.length > 0 && (
        <section className="drilldowns" aria-label="クリックして詳細を表示">
          <p className="drilldown-label">クリックで詳細を見る</p>
          {slide.drilldowns.map((drilldown) => (
            <details key={drilldown.label} className="drilldown-item">
              <summary>{drilldown.label}</summary>
              <p>{drilldown.detail}</p>
            </details>
          ))}
        </section>
      )}

      {slide.emphasis && <p className="emphasis">{slide.emphasis}</p>}
    </section>
  );
}
