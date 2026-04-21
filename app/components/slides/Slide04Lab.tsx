import { ImageFrame } from '../slide-kit/ImageFrame';
import { InfoCard } from '../slide-kit/InfoCard';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';
import { TwoColumn } from '../slide-kit/TwoColumn';

export function Slide04Lab() {
  return (
    <SlideShell>
      <SlideTitle title="研究室：色彩画像処理研究室" subtitle="イラスト制作支援ツールを開発" />
      <SlideBody>
        <TwoColumn
          ratio="3:2"
          left={
            <div className="space-y-4">
              <InfoCard heading="研究テーマ" text="彩色済みイラストを入力し、任意の色彩理論に基づいて再彩色する仕組みを検討。" />
              <InfoCard heading="開発の流れ" text="初期はJavaで実装、途中からPythonへ移行して検証と改善を進めた。" />
            </div>
          }
          right={<ImageFrame alt="研究成果画面" caption="後で成果物スクリーンショットへ差し替え" className="h-full" />}
        />
      </SlideBody>
    </SlideShell>
  );
}
