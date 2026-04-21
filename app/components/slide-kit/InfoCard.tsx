import { cn } from './classNames';
import { surfaces } from './styles';

type InfoCardProps = {
  heading: string;
  text: string;
};

export function InfoCard({ heading, text }: InfoCardProps) {
  return (
    <article className={cn('space-y-3 p-5', surfaces.panel)}>
      <h3 className="text-2xl font-semibold text-slate-900">{heading}</h3>
      <p className="text-2xl leading-relaxed text-slate-700">{text}</p>
    </article>
  );
}
