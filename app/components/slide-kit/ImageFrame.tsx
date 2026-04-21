import Image from 'next/image';
import { cn } from './classNames';
import { surfaces, typography } from './styles';

type ImageFrameProps = {
  src?: string;
  alt: string;
  caption?: string;
  className?: string;
};

export function ImageFrame({ src, alt, caption, className }: ImageFrameProps) {
  return (
    <figure className={cn('space-y-3', className)}>
      <div className={cn('relative w-full aspect-video overflow-hidden', surfaces.imageFrame)}>
        {src ? (
          <Image src={src} alt={alt} fill className="object-contain p-3" />
        ) : (
          <div className="flex h-full w-full items-center justify-center px-6 text-center">
            <p className={cn('font-medium', typography.caption)}>画像未設定（差し替え可）</p>
          </div>
        )}
      </div>
      {caption ? <figcaption className={typography.caption}>{caption}</figcaption> : null}
    </figure>
  );
}
