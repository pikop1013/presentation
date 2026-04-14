import type { SlideContent } from '../../types/slide';

const history = [
  { era: '小学2年〜6年', note: '画塾で基礎を学ぶ' },
  { era: '中学', note: '美術部に所属' },
  { era: '高校', note: '文化委員長として文化祭の立て看板を担当' },
  { era: '大学', note: '美術部部長・イベント展示に参加' },
];

export function HistorySlide({ slide }: { slide: SlideContent }) {
  return (
    <>
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

      <p className="emphasis">昔から「描くこと」「伝えること」が好きでした。</p>
    </>
  );
}
