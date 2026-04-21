import { BulletList } from '../slide-kit/BulletList';
import { ImageFrame } from '../slide-kit/ImageFrame';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';
import { TwoColumn } from '../slide-kit/TwoColumn';

export function Slide09Training() {
  return (
    <SlideShell>
      <SlideTitle title="研修：目安箱システム" subtitle="社内Wiki掲載版として採用、現在はメンテナンス中" />
      <SlideBody>
        <TwoColumn
          ratio="3:2"
          left={
            <BulletList
              items={[
                '社内Wikiに掲載されていた題材を採用して開発',
                '要件確認から実装・改善まで一連の流れを経験',
                '現在は運用を想定したメンテナンス対応を継続',
              ]}
            />
          }
          right={<ImageFrame alt="目安箱システム スクリーンショット" className="w-full" />}
        />
      </SlideBody>
    </SlideShell>
  );
}
