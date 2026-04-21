import { cn } from './classNames';
import { typography } from './styles';

type BulletListProps = {
  items: string[];
  className?: string;
};

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn('list-disc space-y-3 pl-8', typography.body, className)}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
