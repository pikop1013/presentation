import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';
import { TimelineList } from '../slide-kit/TimelineList';

export function Slide16Summary() {
  return (
    <SlideShell>
      <SlideTitle title="まとめ" subtitle="段階的に経験を積んできた1年間" />
      <SlideBody className="flex items-center">
        <TimelineList
          items={[
            ['研修', '社内向けシステム開発の基礎を経験'],
            ['バックエンド開発', 'STNet案件でセキュアな申込受付機能を担当'],
            ['フロントエンド開発', 'ベネッセ案件でBYOD対応を含む調整開発を担当'],
            ['総括', '既存大規模アプリを安全に調整する実務経験を獲得'],
          ]}
        />
      </SlideBody>
    </SlideShell>
  );
}
