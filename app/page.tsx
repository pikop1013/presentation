'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SlideView } from './components/SlideView';
import { slides } from './slides';

const isInteractiveTarget = (target: EventTarget | null) => {
  const element = target as HTMLElement | null;
  return Boolean(
    element?.closest('button, summary, details, a, input, textarea, select, [role="button"], [role="tab"]'),
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

  const activeSlide = useMemo(() => slides[current], [current]);

  return (
    <main
      ref={mainRef}
      className="flex h-screen w-screen items-center justify-center bg-slate-100 p-4 outline-none"
      onClick={(event) => {
        if (isInteractiveTarget(event.target)) return;
        move(1);
      }}
      onKeyDown={(event) => {
        if (isInteractiveTarget(event.target)) return;
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
      <div className="relative aspect-video w-[min(96vw,170.6vh)]">
        <SlideView slide={activeSlide} />
        <p className="absolute bottom-4 right-5 rounded-full border border-slate-300 bg-white/85 px-3 py-1 text-sm font-semibold text-slate-600">
          {current + 1} / {slides.length}
        </p>
      </div>
    </main>
  );
}
