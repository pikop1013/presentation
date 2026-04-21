import { cn } from './classNames';
import { typography } from './styles';

type SlideTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function SlideTitle({ title, subtitle, className }: SlideTitleProps) {
  return (
    <header className={cn('space-y-3', className)}>
      <h1 className={typography.title}>{title}</h1>
      {subtitle ? <p className={typography.subtitle}>{subtitle}</p> : null}
    </header>
  );
}
