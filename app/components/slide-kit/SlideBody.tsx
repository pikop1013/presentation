import type { PropsWithChildren } from 'react';
import { cn } from './classNames';

type SlideBodyProps = PropsWithChildren<{
  className?: string;
}>;

export function SlideBody({ className, children }: SlideBodyProps) {
  return <div className={cn('flex-1', className)}>{children}</div>;
}
