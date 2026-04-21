import { cn } from './classNames';
import { typography } from './styles';

type BulletListProps = {
  items: string[];
  className?: string;
};

export function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={cn('list-disc space-y-5 pl-10 marker:text-blue-700', typography.body, className)}>
      {items.map((item) => (
        <li key={item} className="pr-2">
          {item}
        </li>
      ))}
    </ul>
  );
}
