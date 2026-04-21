import { BulletList } from '../slide-kit/BulletList';
import { ImageFrame } from '../slide-kit/ImageFrame';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';
import { TwoColumn } from '../slide-kit/TwoColumn';

export function Slide06HobbyB() {
  return (
    <SlideShell>
      <SlideTitle title="趣味・制作活動（後半）" subtitle="大学での制作・運営経験" />
      <SlideBody>
        <TwoColumn
          ratio="3:2"
          left={
            <BulletList
              items={[
                '大学では美術部部長として企画・制作を担当',
                'バックイントレ制作、勧誘ポスター制作、展示運営を経験',
                '作品展示やイベント出展を継続',
              ]}
            />
          }
          right={
            <div className="grid grid-rows-3 gap-4">
              <ImageFrame alt="大学 美術部宣伝ポスター" className="w-full" />
              <ImageFrame alt="大学美術部 バックイントレ" className="w-full" />
              <ImageFrame alt="自作作品ギャラリー" className="w-full" />
            </div>
          }
        />
      </SlideBody>
    </SlideShell>
  );
}
