import { BulletList } from '../slide-kit/BulletList';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';

export function Slide17Future() {
  return (
    <SlideShell>
      <SlideTitle title="今後" subtitle="次年度に向けて伸ばしたい領域" />
      <SlideBody className="flex items-center">
        <BulletList
          items={[
            'フロントエンド / バックエンド両方の理解をさらに深める',
            '実装だけでなく、設計レベルでも判断できるようになる',
          ]}
        />
      </SlideBody>
    </SlideShell>
  );
}
