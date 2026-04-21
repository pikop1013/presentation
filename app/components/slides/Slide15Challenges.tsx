import { InfoCard } from '../slide-kit/InfoCard';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';

export function Slide15Challenges() {
  return (
    <SlideShell>
      <SlideTitle title="苦労した点と学び" subtitle="課題を通じて得た判断軸" />
      <SlideBody className="space-y-5">
        <div className="grid grid-cols-3 gap-4">
          <InfoCard heading="BYOD対応の不具合" text="iPadのみ・特定遷移のみで発生。再現条件の切り分けを徹底して原因を特定。" />
          <InfoCard heading="AI支援開発" text="実装効率は向上。ただし提案の妥当性を見極めるレビュー力が必須。" />
          <InfoCard heading="本体講座との整合" text="並行改修される本体側コードと揃えつつ、入準向け差分を維持。" />
        </div>
        <p className="rounded-2xl border border-blue-200 bg-blue-50 px-6 py-5 text-3xl font-semibold leading-relaxed text-blue-900">
          難しさを「品質を守るための判断経験」に変えられたことが大きな学び。
        </p>
      </SlideBody>
    </SlideShell>
  );
}
