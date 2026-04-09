'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SlideView } from './components/SlideView';
import { slides } from './slides';

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

  useEffect(() => {
    mainRef.current?.focus();
  }, []);

  return (
    <main
      ref={mainRef}
      className="layout"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('button, summary, details, a, input, textarea, select')) {
          return;
        }
        move(1);
      }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') move(1);
        if (event.key === 'ArrowLeft' || event.key === 'PageUp') move(-1);
      }}
      tabIndex={0}
    >
      <header className="deck-meta">
        <div className="brand">
          <span className="dot" />
          <p>Internal Session Deck</p>
        </div>
        <p className="slide-index">
          {current + 1} / {slides.length}
        </p>
      </header>

      <div className="progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>

      <div className="stage">
        <SlideView slide={slides[current]} />
      </div>

      <footer className="controls">
        <button type="button" onClick={() => move(-1)} disabled={current === 0}>
          ◀ Prev
        </button>
        <button type="button" onClick={() => move(1)} disabled={current === slides.length - 1}>
          Next ▶
        </button>
      </footer>
    </main>
  );
}
