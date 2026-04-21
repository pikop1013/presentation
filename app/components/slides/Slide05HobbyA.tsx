import tatekanban from '../../image/tatekanban.jpg';
import { ImageFrame } from '../slide-kit/ImageFrame';
import { InfoCard } from '../slide-kit/InfoCard';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';

export function Slide05HobbyA() {
  return (
    <SlideShell>
      <SlideTitle title="趣味・制作活動（前半）" subtitle="継続してきた制作活動の流れ" />
      <SlideBody className="space-y-8">
        <div className="grid grid-cols-2 gap-6">
          <InfoCard heading="小学生〜中学" text="画塾と美術部で、描くことを日常的に継続。" />
          <InfoCard heading="高校" text="文化祭運営委員会で立て看板制作・MV制作・飾りつけを担当。" />
        </div>
        <div className="grid grid-cols-2 gap-7">
          <ImageFrame src={tatekanban.src} alt="高校文化祭 立て看板" caption="高校文化祭 立て看板" className="w-full" />
          <ImageFrame alt="高校文化祭 テーマソングMV" caption="高校文化祭 テーマソングMV" className="w-full" />
        </div>
      </SlideBody>
    </SlideShell>
  );
}
