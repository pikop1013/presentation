import type { SlideContent } from '../../types/slide';

export function TitleSlide({ slide }: { slide: SlideContent }) {
  return (
    <div className="title-slide-layout">
      <section className="title-copy" aria-label="発表タイトル">
        <p className="title-kicker">社内発表</p>
        <h1 className="title-heading">{slide.title}</h1>
        <p className="title-name">{slide.subtitle}</p>
        <p className="title-support">{slide.minutes} / 自己紹介から業務紹介まで</p>
      </section>

      <section className="title-visual-placeholder" aria-label="挿絵プレースホルダー">
        <div className="placeholder-surface">
          <div className="placeholder-glow" />
          <div className="placeholder-frame" />
          <div className="placeholder-stamp">Visual Placeholder</div>
          <p>このエリアに挿絵・図版を配置予定</p>
        </div>
      </section>
    </div>
  );
}
