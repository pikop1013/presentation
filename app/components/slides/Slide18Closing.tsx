import { ImageFrame } from '../slide-kit/ImageFrame';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';

export function Slide18Closing() {
  return (
    <SlideShell className="items-center justify-center">
      <SlideTitle title="ありがとうございました" />
      <SlideBody className="flex items-center justify-center">
        <ImageFrame alt="エンディング用ビジュアル" caption="社内向けに落ち着いた画像へ差し替え可能" className="w-[58%]" />
      </SlideBody>
    </SlideShell>
  );
}
