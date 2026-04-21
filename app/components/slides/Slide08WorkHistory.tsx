import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';
import { TimelineList } from '../slide-kit/TimelineList';

export function Slide08WorkHistory() {
  return (
    <SlideShell>
      <SlideTitle title="業務経歴" subtitle="1年目〜2年目にかけての担当変遷" />
      <SlideBody className="flex items-center">
        <TimelineList
          items={[
            ['4月〜6月', '研修：目安箱システム開発'],
            ['7月〜10月', 'STNet案件：ピカラ申込受付サービス（バックエンド）'],
            ['11月〜現在', 'ベネッセ案件：特別一年生準備コンテンツ（フロントエンド）'],
          ]}
        />
      </SlideBody>
    </SlideShell>
  );
}
