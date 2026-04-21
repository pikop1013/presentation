'use client';

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { SlideView } from './components/SlideView';
import { slides } from './slides';
import type { TransitionStyle } from './types/navigation';

const SLIDE_WIDTH = 1800;
const SLIDE_HEIGHT = 1100;

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
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewport, setViewport] = useState({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT });

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

  useLayoutEffect(() => {
    const element = viewportRef.current;

    if (!element) {
      return;
    }

    const updateViewport = () => {
      const { width, height } = element.getBoundingClientRect();
      setViewport({
        width: Math.max(width, 0),
        height: Math.max(height, 0),
      });
    };

    updateViewport();

    const observer = new ResizeObserver(() => {
      updateViewport();
    });

    observer.observe(element);
    window.addEventListener('resize', updateViewport);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateViewport);
    };
  }, []);

  const activeSlide = useMemo(() => slides[current], [current]);
  const scale = Math.min(viewport.width / SLIDE_WIDTH, viewport.height / SLIDE_HEIGHT) || 1;
  const scaledWidth = SLIDE_WIDTH * scale;
  const scaledHeight = SLIDE_HEIGHT * scale;

  return (
    <main
      ref={mainRef}
      className="h-screen w-screen overflow-hidden outline-none"
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
      <div ref={viewportRef} className="slide-stage">
        <div
          className="slide-stage__frame"
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
          }}
        >
          <div
            className="slide-stage__scaled"
            style={{
              width: `${SLIDE_WIDTH}px`,
              height: `${SLIDE_HEIGHT}px`,
              transform: `scale(${scale})`,
            }}
          >
            <SlideView
              key={`${activeSlide.id}-${transitionToken}`}
              slide={activeSlide}
              transitionStyle={transitionStyle}
              onNavigate={navigateToSlide}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
