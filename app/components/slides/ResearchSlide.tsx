import type { SlideContent } from '../../types/slide';

export function ResearchSlide({ slide }: { slide: SlideContent }) {
  return (
    <>
      <h1>{slide.title}</h1>
      <p className="subtitle">{slide.subtitle}</p>

      <div className="research-layout">
        <section className="research-card">
          <h2>所属研究室</h2>
          <p>色彩画像処理研究室</p>
          <p className="muted-copy">イラストの彩色を画像処理する研究に取り組みました。</p>
        </section>

        <section className="sketch-flow" aria-label="線画から彩色へのイメージ">
          <div className="sketch-box">
            <h3>線画</h3>
            <div className="sketch-lines" />
          </div>
          <span className="arrow">→</span>
          <div className="sketch-box colored">
            <h3>彩色</h3>
            <div className="paint-layer" />
          </div>
        </section>
      </div>

      <p className="emphasis">画像処理と表現の両方に関心を持ってきました。</p>
    </>
  );
}
