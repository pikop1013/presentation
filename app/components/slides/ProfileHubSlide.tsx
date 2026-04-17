import { useState } from 'react';
import type { SlideContent } from '../../types/slide';

type DetailLink = {
  id: 'student-research' | 'hobby-history';
  title: string;
  summary: string;
  cue: string;
};

const detailLinks: DetailLink[] = [
  {
    id: 'student-research',
    title: '研究室',
    summary: '色彩画像処理研究室',
    cue: '研究内容を見る',
  },
  {
    id: 'hobby-history',
    title: '趣味',
    summary: '絵を描くこと',
    cue: '活動の歴史を見る',
  },
];

export function ProfileHubSlide({
  slide,
  onNavigate,
}: {
  slide: SlideContent;
  onNavigate?: (slideId: string, style?: 'default' | 'drilldown' | 'back') => void;
}) {
  const [selected, setSelected] = useState<DetailLink['id'] | null>(null);

  const handleOpenDetail = (link: DetailLink) => {
    setSelected(link.id);
    window.setTimeout(() => {
      onNavigate?.(link.id, 'drilldown');
      setSelected(null);
    }, 170);
  };

  return (
    <>
      <h1>{slide.title}</h1>
      <p className="subtitle">{slide.subtitle}</p>

      <div className="profile-hub-layout">
        <section className="profile-basic" aria-label="基本プロフィール">
          <h2>プロフィール</h2>
          <dl>
            <div>
              <dt>名前</dt>
              <dd>伊森 孝太朗</dd>
            </div>
            <div>
              <dt>出身・居住</dt>
              <dd>山口に生まれ、岡山に来て20年目くらい</dd>
            </div>
            <div>
              <dt>大学</dt>
              <dd>岡山理科大学 工学部 情報工学科</dd>
            </div>
          </dl>
        </section>

        <section className="profile-detail-links" aria-label="詳細へ進む項目">
          <p className="detail-links-label">気になる項目をクリックして詳細へ</p>
          {detailLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={`detail-link-button ${selected === link.id ? 'selected' : ''}`}
              data-interactive="true"
              onClick={() => handleOpenDetail(link)}
            >
              <span className="detail-link-title">{link.title}</span>
              <strong>{link.summary}</strong>
              <span className="detail-link-cue">{link.cue} →</span>
            </button>
          ))}
        </section>
      </div>
    </>
  );
}
