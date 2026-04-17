'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SlideView } from './components/SlideView';
import { slides } from './slides';
import type { TransitionStyle } from './types/navigation';

const isInteractiveTarget = (target: EventTarget | null) => {
  const element = target as HTMLElement | null;
  return Boolean(
    element?.closest(
      'button, summary, details, a, input, textarea, select, [role="button"], [role="tab"], [data-interactive="true"]',
    ),
  );
};

export default function Home() {
  const [current, setCurrent] = useState<number>(0);
  const [transitionStyle, setTransitionStyle] = useState<TransitionStyle>('default');
  const [transitionToken, setTransitionToken] = useState(0);
  const mainRef = useRef<HTMLElement | null>(null);

  const move = useCallback((step: number) => {
    setCurrent((prev) => {
      const next = prev + step;
      if (next < 0 || next >= slides.length) {
        return prev;
      }
      setTransitionStyle('default');
      setTransitionToken((token) => token + 1);
      return next;
    });
  }, []);

  const navigateToSlide = useCallback((slideId: string, style: TransitionStyle = 'default') => {
    const next = slides.findIndex((slide) => slide.id === slideId);
    if (next === -1) {
      return;
    }

    setCurrent((prev) => {
      if (prev === next) {
        return prev;
      }
      setTransitionStyle(style);
      setTransitionToken((token) => token + 1);
      return next;
    });
  }, []);

  useEffect(() => {
    mainRef.current?.focus();
  }, []);

  const activeSlide = useMemo(() => slides[current], [current]);

  return (
    <main
      ref={mainRef}
      className="layout"
      onClick={(event) => {
        if (isInteractiveTarget(event.target)) {
          return;
        }
        move(1);
      }}
      onKeyDown={(event) => {
        if (isInteractiveTarget(event.target)) {
          return;
        }
        if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
          event.preventDefault();
          move(1);
        }
        if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
          event.preventDefault();
          move(-1);
        }
      }}
      tabIndex={0}
    >
      <div className="stage">
        <SlideView
          key={`${activeSlide.id}-${transitionToken}`}
          slide={activeSlide}
          transitionStyle={transitionStyle}
          onNavigate={navigateToSlide}
        />
      </div>
    </main>
  );
}
