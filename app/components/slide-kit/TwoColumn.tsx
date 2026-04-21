import type { ReactNode } from 'react';
import { cn } from './classNames';

type TwoColumnProps = {
  left: ReactNode;
  right: ReactNode;
  ratio?: '1:1' | '5:4' | '3:2' | '2:3';
  className?: string;
};

const ratioClass: Record<NonNullable<TwoColumnProps['ratio']>, string> = {
  '1:1': 'grid-cols-2',
  '5:4': 'grid-cols-[minmax(0,5fr)_minmax(0,4fr)]',
  '3:2': 'grid-cols-[minmax(0,3fr)_minmax(0,2fr)]',
  '2:3': 'grid-cols-[minmax(0,2fr)_minmax(0,3fr)]',
};

export function TwoColumn({ left, right, ratio = '1:1', className }: TwoColumnProps) {
  return (
    <div className={cn('grid h-full gap-10', ratioClass[ratio], className)}>
      <div className="min-w-0">{left}</div>
      <div className="min-w-0">{right}</div>
    </div>
  );
}
