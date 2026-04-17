import type { SlideContent } from '../../types/slide';

const history = [
  { era: '小学2年〜6年', note: '画塾に通い、デッサンや着彩の基礎を学ぶ' },
  { era: '中学', note: '美術部に所属し、日常的に制作を継続' },
  { era: '高校', note: '文化委員長として文化祭の立て看板などを担当' },
  { era: '大学', note: '美術部部長として活動し、イベント展示にも参加' },
];

export function HistorySlide({
  slide,
  onNavigate,
}: {
  slide: SlideContent;
  onNavigate?: (slideId: string, style?: 'default' | 'drilldown' | 'back') => void;
}) {
  return (
    <>
      <div className="detail-header-row">
        <button
          type="button"
          className="back-to-list"
          data-interactive="true"
          onClick={() => onNavigate?.('profile', 'back')}
        >
          一覧へ戻る
        </button>
      </div>

      <h1>{slide.title}</h1>
      <p className="subtitle">{slide.subtitle}</p>

      <div className="history-grid">
        {history.map((item) => (
          <article className="history-item" key={item.era}>
            <p className="era">{item.era}</p>
            <p>{item.note}</p>
          </article>
        ))}
      </div>

      <p className="emphasis">絵を描くことを、ずっと趣味として続けています。</p>
    </>
  );
}
