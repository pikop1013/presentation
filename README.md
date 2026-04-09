# React / Next.js Presentation Deck

React と Next.js で構築した、発表向けスライドアプリです。  
「資料を作って終わり」ではなく、Webアプリとして継続改善できる構成にしています。

## ねらい

- React のコンポーネント再利用性を活かして、スライドを保守しやすくする
- Next.js の配信・公開しやすさを活かして、URL共有を前提にする
- 将来的に API / CMS / 分析基盤と接続しやすい土台にする

## 今回の設計ポイント

- **1スライド1ファイル**（`app/slides/slideXX.ts`）で管理し、差分レビューと編集を簡単に
- 共通表示ロジックは `SlideView` コンポーネントに集約
- `app/page.tsx` は「デッキ制御（ページ遷移、キーボード操作、進捗表示）」に責務を限定

## セットアップ

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## 操作

- タップ / クリック: 画面（ボタン以外）を押すと次のスライドへ
- ボタン: `Prev / Next`
- キーボード: `← / →`、`PageUp / PageDown`、`Space`、`Home`、`End`
- サムネイル: 下部のスライド一覧を直接クリックしてジャンプ

## スクリプト

- `npm run dev`: 開発サーバー起動
- `npm run build`: 本番ビルド
- `npm run start`: 本番サーバー起動
- `npm run lint`: Lint実行

## ファイル構成

- `app/page.tsx`: デッキ制御（遷移、操作、進捗、サムネイル）
- `app/components/SlideView.tsx`: 共通スライドUI
- `app/slides/`: 1スライド1ファイルのデータ群
- `app/types/slide.ts`: スライド型定義
- `app/globals.css`: デザインテーマ（クリーンなガラス調UI）
- `app/layout.tsx`: レイアウトとメタデータ設定
