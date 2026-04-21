import { BulletList } from '../slide-kit/BulletList';
import { SlideBody } from '../slide-kit/SlideBody';
import { SlideShell } from '../slide-kit/SlideShell';
import { SlideTitle } from '../slide-kit/SlideTitle';

export function Slide03Profile() {
  return (
    <SlideShell>
      <SlideTitle title="自己紹介" subtitle="山口県生まれ、現在はエンジニア" />
      <SlideBody className="flex items-center">
        <BulletList
          items={[
            '山口県生まれ。岡山に来て現在に至る',
            '岡山理科大学 情報工学科を卒業',
            '学生時代は表現寄りの関心が強め',
            '現在はエンジニアとして業務開発を担当',
          ]}
        />
      </SlideBody>
    </SlideShell>
  );
}
