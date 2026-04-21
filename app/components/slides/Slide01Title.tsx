import { ImageFrame } from '../slide-kit/ImageFrame';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';
import { TwoColumn } from '../slide-kit/TwoColumn';

export function Slide01Title() {
  return (
    <SlideShell>
      <SlideTitle title="自己紹介と業務紹介" subtitle="伊森 孝太朗" />
      <SlideBody>
        <TwoColumn
          ratio="5:4"
          left={<p className="text-3xl leading-relaxed text-slate-700">2年目の自己紹介と業務紹介です。</p>}
          right={<ImageFrame alt="導入ビジュアル" caption="導入画像を後で差し替え" />}
        />
      </SlideBody>
    </SlideShell>
  );
}
