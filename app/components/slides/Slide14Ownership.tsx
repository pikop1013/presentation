import { ImageFrame } from '../slide-kit/ImageFrame';
import { InfoCard } from '../slide-kit/InfoCard';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';

export function Slide14Ownership() {
  return (
    <SlideShell>
      <SlideTitle title="担当領域" subtitle="自分が実装を担当した画面と技術スタック" />
      <SlideBody className="space-y-8">
        <div className="grid grid-cols-3 gap-5">
          <InfoCard heading="担当画面" text="設定画面 / ガチャ画面 / ゲーム画面" />
          <InfoCard heading="技術" text="React / Next.js" />
          <InfoCard heading="開発スタイル" text="Cursorを活用したAI支援開発で実装効率を向上" />
        </div>
        <div className="grid grid-cols-3 gap-5">
          <ImageFrame alt="設定画面キャプチャ" className="w-full" />
          <ImageFrame alt="ガチャ画面キャプチャ" className="w-full" />
          <ImageFrame alt="ゲーム画面キャプチャ" className="w-full" />
        </div>
      </SlideBody>
    </SlideShell>
  );
}
