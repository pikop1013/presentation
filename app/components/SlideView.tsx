import type { SlideDefinition } from '../slides';

type SlideViewProps = {
  slide: SlideDefinition;
};

export function SlideView({ slide }: SlideViewProps) {
  const Component = slide.component;

  return (
    <section className="h-full w-full" aria-live="polite">
      <Component />
    </section>
  );
}
