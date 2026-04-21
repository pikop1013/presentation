import type { PropsWithChildren } from 'react';
import { cn } from './classNames';
import { spacing, surfaces } from './styles';

type SlideShellProps = PropsWithChildren<{
  className?: string;
}>;

export function SlideShell({ className, children }: SlideShellProps) {
  return (
    <section className={cn('h-full w-full', surfaces.slide, spacing.shellPadding, className)}>
      <div className={cn('flex h-full w-full flex-col', spacing.contentGap)}>{children}</div>
    </section>
  );
}
