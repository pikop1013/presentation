import type { SlideContent } from '../../types/slide';
import type { TransitionStyle } from '../../types/navigation';

type HobbyFlowSlideProps = {
  slide: SlideContent;
  transitionStyle: TransitionStyle;
  transitionToken: number;
  onNavigate?: (slideId: string, style?: TransitionStyle) => void;
};

export function HobbyFlowSlide({ slide, transitionStyle, transitionToken }: HobbyFlowSlideProps) {
  const bodyClass = [
    'hobby-flow-body',
    transitionStyle === 'back' ? 'back' : '',
  ]
    .filter(Boolean)
    .join(' ');
  const isIntroSlide = slide.id === 'hobby-1';
  const shellClass = isIntroSlide ? 'hobby-flow-shell hobby-flow-shell-intro' : 'hobby-flow-shell';
  const copyClass = isIntroSlide ? 'hobby-flow-copy hobby-flow-copy-intro' : 'hobby-flow-copy';
  const titleClass = isIntroSlide ? 'hobby-flow-title-nowrap' : undefined;
  const mediaClass = isIntroSlide
    ? `media-grid media-grid-${slide.placeholderLayout ?? 'gallery'} hobby-flow-media hobby-flow-media-intro`
    : `media-grid media-grid-${slide.placeholderLayout ?? 'gallery'} hobby-flow-media`;

  if (isIntroSlide) {
    return (
      <div key={`${slide.id}-${transitionToken}`} className={shellClass}>
        <div className="hobby-flow-copy-shell-intro">
          <header className="hobby-flow-header">
            <h1 className={titleClass}>{slide.title}</h1>
          </header>

          <div className={copyClass}>
            <p className="subtitle">{slide.subtitle}</p>

            {slide.cards && (
              <div className="cards hobby-flow-cards">
                {slide.cards.map((card) => (
                  <article key={card.heading} className="card">
                    <h2>{card.heading}</h2>
                    <p>{card.text}</p>
                  </article>
                ))}
              </div>
            )}

            {slide.bullets && (
              <ul className="hobby-flow-list">
                {slide.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {slide.placeholders && (
          <div className={mediaClass}>
            {slide.placeholders.map((item) => (
              <article key={item.label} className="media-placeholder hobby-flow-media-card-intro">
                <div className={item.imageSrc ? 'media-frame has-image' : 'media-frame'}>
                  {item.imageSrc ? <img src={item.imageSrc} alt={item.imageAlt ?? item.label} /> : null}
                  <h3>{item.label}</h3>
                </div>
                {item.note && <p className="muted-copy">{item.note}</p>}
              </article>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={shellClass}>
      <header className="hobby-flow-header">
        <h1 className={titleClass}>{slide.title}</h1>
      </header>

      <div key={`${slide.id}-${transitionToken}`} className={bodyClass}>
        <div className={copyClass}>
          <p className="subtitle">{slide.subtitle}</p>

          {slide.cards && (
            <div className="cards hobby-flow-cards">
              {slide.cards.map((card) => (
                <article key={card.heading} className="card">
                  <h2>{card.heading}</h2>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          )}

          {slide.bullets && (
            <ul className="hobby-flow-list">
              {slide.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>

        {slide.placeholders && (
          <div className={mediaClass}>
            {slide.placeholders.map((item) => (
                <article
                  key={item.label}
                  className={isIntroSlide ? 'media-placeholder hobby-flow-media-card-intro' : 'media-placeholder'}
                >
                  <div className={item.imageSrc ? 'media-frame has-image' : 'media-frame'}>
                    {item.imageSrc ? <img src={item.imageSrc} alt={item.imageAlt ?? item.label} /> : null}
                    {isIntroSlide ? <h3>{item.label}</h3> : null}
                  </div>
                  {!isIntroSlide ? <h3>{item.label}</h3> : null}
                  {item.note && <p className="muted-copy">{item.note}</p>}
                </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
