'use client';

import { useState } from 'react';
import type { SlideContent } from '../../types/slide';

const projects = [
  {
    term: '4月〜6月',
    title: '研修（目安箱システム）',
    detail: '実装〜レビュー〜改善までを一通り経験。現在の社内Wiki掲載版に採用。',
  },
  {
    term: '7月〜10月',
    title: 'ST Net様 ピカラ開発',
    detail: '申し込み受付サービスのバックエンド開発を担当。',
  },
  {
    term: '11月〜現在',
    title: 'ベネッセ様 入準開発',
    detail: 'BYOD対応Webアプリのフロントエンド開発を担当。',
  },
];

export function WorkHistorySlide({ slide }: { slide: SlideContent }) {
  const [active, setActive] = useState(projects[2]);

  return (
    <>
      <h1>{slide.title}</h1>
      <p className="subtitle">{slide.subtitle}</p>

      <div className="work-history-layout">
        <div className="work-history-list" data-interactive="true">
          {projects.map((project) => (
            <button
              type="button"
              key={project.title}
              onClick={() => setActive(project)}
              className={`history-button ${active.title === project.title ? 'active' : ''}`}
              data-interactive="true"
            >
              <span>{project.term}</span>
              <strong>{project.title}</strong>
            </button>
          ))}
        </div>

        <aside className="history-detail" data-interactive="true">
          <p className="detail-label">選択中</p>
          <h2>{active.title}</h2>
          <p>{active.detail}</p>
          <p className="muted-copy">この後のスライドで各案件を順に紹介します。</p>
        </aside>
      </div>
    </>
  );
}
