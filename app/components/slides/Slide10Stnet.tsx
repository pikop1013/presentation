import { ImageFrame } from '../slide-kit/ImageFrame';
import { InfoCard } from '../slide-kit/InfoCard';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';

export function Slide10Stnet() {
  return (
    <SlideShell>
      <SlideTitle title="STNet案件" subtitle="ピカラ開発で申込受付サービスのバックエンドを担当" />
      <SlideBody className="space-y-5">
        <div className="grid grid-cols-3 gap-4">
          <InfoCard heading="担当領域" text="Java / Spring Bootで申込受付サービスを開発。" />
          <InfoCard heading="機能" text="eKYC・マイナンバー対応・OCR・ICカード読み取り・3Dセキュア。" />
          <InfoCard heading="開発姿勢" text="安全性と例外ケースを意識して実装・検証を実施。" />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <ImageFrame alt="STNet挿絵" className="w-full" />
          <ImageFrame alt="STNetサイト画像" className="w-full" />
        </div>
      </SlideBody>
    </SlideShell>
  );
}
