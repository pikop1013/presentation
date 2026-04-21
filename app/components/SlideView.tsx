import type { ComponentType } from 'react';
import { TitleSlide } from './slides/TitleSlide';
import type { SlideContent } from '../types/slide';
import type { TransitionStyle } from '../types/navigation';

type SlideViewProps = {
  slide: SlideContent;
  transitionStyle: TransitionStyle;
  onNavigate: (slideId: string, style?: TransitionStyle) => void;
};

type CustomSlideProps = {
  slide: SlideContent;
  onNavigate: (slideId: string, style?: TransitionStyle) => void;
};

const customSlides: Record<string, ComponentType<CustomSlideProps>> = {
  title: TitleSlide,
};

export function SlideView({ slide, transitionStyle, onNavigate }: SlideViewProps) {
  const CustomSlide = customSlides[slide.id];

  return (
    <section className={`slide accent-${slide.accent ?? 'default'} transition-${transitionStyle}`} aria-live="polite">
      {CustomSlide ? (
        <CustomSlide slide={slide} onNavigate={onNavigate} />
      ) : (
        <>
          <h1>{slide.title}</h1>
          <p className="subtitle">{slide.subtitle}</p>

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

          {slide.bullets && (
            <ul>
              {slide.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}

          {slide.placeholders && (
            <div className={`media-grid media-grid-${slide.placeholderLayout ?? 'gallery'}`}>
              {slide.placeholders.map((item) => (
                <article key={item.label} className="media-placeholder">
                  <div className="media-frame" />
                  <h3>{item.label}</h3>
                  {item.note && <p className="muted-copy">{item.note}</p>}
                </article>
              ))}
            </div>
          )}

          {slide.emphasis && <p className="emphasis">{slide.emphasis}</p>}
        </>
      )}
    </section>
  );
}
