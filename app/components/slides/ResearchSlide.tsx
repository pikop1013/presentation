import type { SlideContent } from '../../types/slide';

export function ResearchSlide({
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

      <div className="research-layout">
        <section className="research-card">
          <h2>色彩画像処理研究室</h2>
          <p>イラストの彩色を画像処理する研究をしていました。</p>
          <p className="muted-copy">線画に対して、自然な色の付き方をどう実現するかを扱っていました。</p>
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

      <p className="emphasis">画像処理で、イラスト制作を手助けするテーマに取り組んでいました。</p>
    </>
  );
}
