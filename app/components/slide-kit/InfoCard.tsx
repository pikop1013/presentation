import { cn } from './classNames';
import { surfaces } from './styles';

type InfoCardProps = {
  heading: string;
  text: string;
  className?: string;
};

export function InfoCard({ heading, text, className }: InfoCardProps) {
  return (
    <article className={cn('space-y-3 p-6', surfaces.panel, className)}>
      <h3 className="text-[1.45rem] font-semibold leading-tight tracking-[-0.01em] text-slate-900">{heading}</h3>
      <p className="text-[1.24rem] leading-[1.65] text-slate-700">{text}</p>
    </article>
  );
}
