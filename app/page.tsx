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

      <nav className="thumbs" aria-label="スライド一覧">
        {slides.map((slide, index) => (
          <button
            type="button"
            key={slide.id}
            className={index === current ? 'thumb active' : 'thumb'}
            onClick={() => jumpTo(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <small>{slide.title}</small>
          </button>
        ))}
      </nav>

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
