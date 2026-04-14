'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { SlideView } from './components/SlideView';
import { slides } from './slides';

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
  const mainRef = useRef<HTMLElement | null>(null);

  const move = useCallback((step: number) => {
    setCurrent((prev) => {
      const next = prev + step;
      if (next < 0 || next >= slides.length) {
        return prev;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    mainRef.current?.focus();
  }, []);

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
        <SlideView slide={slides[current]} />
      </div>
    </main>
  );
}
