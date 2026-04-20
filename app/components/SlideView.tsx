import { BenesseWorkSlide } from './slides/BenesseWorkSlide';
import { HistorySlide } from './slides/HistorySlide';
import { ProfileHubSlide } from './slides/ProfileHubSlide';
import { ResearchSlide } from './slides/ResearchSlide';
import { SecurityFeatureSlide } from './slides/SecurityFeatureSlide';
import { TitleSlide } from './slides/TitleSlide';
import { WorkHistorySlide } from './slides/WorkHistorySlide';
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

const customSlides: Record<string, React.ComponentType<CustomSlideProps>> = {
  profile: ProfileHubSlide,
  'student-research': ResearchSlide,
  'hobby-history': HistorySlide,
  'work-history': WorkHistorySlide,
  'stnet-details': SecurityFeatureSlide,
  'benesse-details': BenesseWorkSlide,
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
                <details key={drilldown.label} className="drilldown-item" data-interactive="true">
                  <summary>{drilldown.label}</summary>
                  <p>{drilldown.detail}</p>
                </details>
              ))}
            </section>
          )}

          {slide.emphasis && <p className="emphasis">{slide.emphasis}</p>}
        </>
      )}
    </section>
  );
}
