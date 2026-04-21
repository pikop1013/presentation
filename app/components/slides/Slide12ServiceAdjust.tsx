import { BulletList } from '../slide-kit/BulletList';
import { ImageFrame } from '../slide-kit/ImageFrame';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';

export function Slide12ServiceAdjust() {
  return (
    <SlideShell>
      <SlideTitle title="サービス説明と調整内容" subtitle="完全新規ではなく、既存講座をベースに入準版へ最適化" />
      <SlideBody className="space-y-8">
        <BulletList
          items={[
            'チャレンジタッチで受講できる進研ゼミ小学講座がベース',
            'こどもちゃれんじ年長ユーザー（Y6）向けに仕様を調整',
            '機能の一部制限、コンテンツ仕様調整、ルビ追加・漢字調整、BYOD対応を実施',
          ]}
        />
        <div className="grid grid-cols-2 gap-7">
          <ImageFrame alt="ベネッセアプリ画面（ベース）" className="w-full" />
          <ImageFrame alt="ベネッセアプリ画面（入準向け調整後）" className="w-full" />
        </div>
      </SlideBody>
    </SlideShell>
  );
}
