import type { SlideContent } from '../types/slide';

export const slide04: SlideContent = {
  id: 'lab',
  title: '研究室：色彩画像処理研究室',
  subtitle: 'イラスト制作支援ツールを開発',
  minutes: '2分',
  cards: [
    { heading: '研究テーマ', text: '彩色済みイラストを入力し、任意の色彩理論に基づいて再彩色する仕組みを検討。' },
    { heading: '開発の流れ', text: '初期はJavaで実装、途中からPythonへ移行して検証と改善を進めた。' },
  ],
  placeholders: [{ label: 'イラスト制作支援ツール 画面', note: '後で成果物スクリーンショットへ差し替え' }],
  placeholderLayout: 'single',
};
