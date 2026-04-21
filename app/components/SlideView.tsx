import type { ComponentType, CSSProperties } from 'react';
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
    <section
      className={`slide-shell h-full w-full overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--surface)] shadow-[var(--shadow)] accent-${
        slide.accent ?? 'default'
      } transition-${transitionStyle}`}
      aria-live="polite"
    >
      <div className="slide-shell__content">
        {CustomSlide ? (
          <div className="slide-body slide-body--custom">
            <CustomSlide slide={slide} onNavigate={onNavigate} />
          </div>
        ) : (
          <div className="slide-body slide-body--default">
            <h1>{slide.title}</h1>
            <p className="mb-6 mt-4 font-semibold leading-[1.5] text-[#375899]">{slide.subtitle}</p>

            {slide.timeline && (
              <div className="grid gap-3">
                {slide.timeline.map(([phase, detail]) => (
                  <div
                    key={phase}
                    className="flex items-center gap-4 rounded-[10px] border-l-4 border-l-[var(--primary)] bg-[var(--primary-soft)] px-4 py-3"
                  >
                    <strong className="min-w-[5.4rem]">{phase}</strong>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            )}

            {slide.cards && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {slide.cards.map((card) => (
                  <article key={card.heading} className="rounded-2xl border border-[var(--line)] bg-[#fbfcff] p-4">
                    <h2 className="mb-2">{card.heading}</h2>
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
                    <div
                      className="media-frame"
                      style={
                        {
                          width: item.imageWidth ?? '100%',
                          height: item.imageHeight,
                          aspectRatio: item.imageHeight ? undefined : '16 / 9',
                          marginInline: 'auto',
                        } satisfies CSSProperties
                      }
                    >
                      {item.imageSrc && (
                        <img
                          src={item.imageSrc}
                          alt={item.label}
                          className={`h-full w-full rounded-[10px] ${
                            item.imageFit === 'contain' ? 'object-contain' : 'object-cover'
                          }`}
                        />
                      )}
                    </div>
                    <h3>{item.label}</h3>
                    {item.note && <p className="text-[clamp(0.9rem,1.35vw,1.05rem)] text-[var(--muted)]">{item.note}</p>}
                  </article>
                ))}
              </div>
            )}

            {slide.emphasis && <p className="mt-6 font-bold text-[#244188]">{slide.emphasis}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
