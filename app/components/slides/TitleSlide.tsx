import type { SlideContent } from '../../types/slide';

export function TitleSlide({ slide }: { slide: SlideContent; onNavigate?: (slideId: string, style?: 'default' | 'drilldown' | 'back') => void }) {
  return (
    <div className="title-slide-layout">
      <section className="title-copy" aria-label="発表タイトル">
        <p className="title-kicker">社内発表 / Opening</p>
        <h1 className="title-heading">{slide.title}</h1>
        <p className="title-name">{slide.subtitle}</p>
        <p className="title-support">2年目の自己紹介と業務紹介です。</p>
      </section>

      <section className="title-visual-placeholder" aria-label="キービジュアルプレースホルダー">
        <div className="placeholder-surface">
          <div className="placeholder-glow" />
          <div className="placeholder-frame" />
          <div className="placeholder-stamp">Key Visual</div>
          <p>導入用の写真・イラストを後で差し替え</p>
        </div>
      </section>
    </div>
  );
}
