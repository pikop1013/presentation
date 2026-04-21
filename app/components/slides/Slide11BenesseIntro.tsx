import { ImageFrame } from '../slide-kit/ImageFrame';
import { InfoCard } from '../slide-kit/InfoCard';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';
import { TwoColumn } from '../slide-kit/TwoColumn';

export function Slide11BenesseIntro() {
  return (
    <SlideShell>
      <SlideTitle title="ベネッセ案件：導入" subtitle="現在担当中：特別一年生準備コンテンツ（2026年5月1日サービス開始予定）" />
      <SlideBody>
        <TwoColumn
          ratio="5:4"
          left={<InfoCard heading="案件の立ち位置" text="現時点で最も長く担当している案件。既存サービスをベースに、年長向けに最適化する開発。" />}
          right={<ImageFrame alt="ベネッセ挿絵 / キービジュアル" className="w-full" />}
        />
      </SlideBody>
    </SlideShell>
  );
}
