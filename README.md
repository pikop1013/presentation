# React / Next.js Presentation Deck

React + Next.js で作成した社内発表用スライドです。

普段の業務で使用している技術を使って、  
スライドも同じ環境で作ってみました。

---

## ポイント

- スライドをコードで管理
- Webアプリとしてそのまま動作
- PowerPointではやりにくい表現を一部取り入れ
- 実行しながら説明できる（必要に応じて動的に挙動を変えられる）

---

## 工夫した点

- キーボード操作やクリックによるスライド遷移
- 状態管理によるスムーズな画面切り替え
- 必要に応じてアニメーションや動的表現が可能

---

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

## スタイリング

- Tailwind CSS を導入済みです。
- `app/page.tsx` などでユーティリティクラスを使って、レイアウトを素早く調整できます。
- 既存の `app/globals.css` にあるカスタムスタイルと併用可能です。
- 共通表示(`app/components/SlideView.tsx`)のコンテナ・カード・タイムラインは Tailwind ユーティリティへ段階的に置き換えています。

## ファイル構成

- `app/page.tsx`: デッキ制御（遷移、操作、進捗、サムネイル）
- `app/components/SlideView.tsx`: 共通スライドUI
- `app/slides/`: 1スライド1ファイルのデータ群
- `app/types/slide.ts`: スライド型定義
- `app/globals.css`: デザインテーマ（クリーンなガラス調UI）
- `app/layout.tsx`: レイアウトとメタデータ設定
