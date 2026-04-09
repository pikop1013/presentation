# React / Next.js Presentation Deck

React と Next.js で構築した、発表向けスライドアプリです。  
「資料を作って終わり」ではなく、Webアプリとして継続改善できる構成にしています。

## ねらい

- React のコンポーネント再利用性を活かして、スライドを保守しやすくする
- Next.js の配信・公開しやすさを活かして、URL共有を前提にする
- 将来的に API / CMS / 分析基盤と接続しやすい土台にする

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

画面は全画面（100vw x 100vh）で表示されます。

## スクリプト

- `npm run dev`: 開発サーバー起動
- `npm run build`: 本番ビルド
- `npm run start`: 本番サーバー起動
- `npm run lint`: Lint実行

## ファイル構成

- `app/page.tsx`: スライドデータと表示ロジック
- `app/globals.css`: スライド全体のスタイル
- `app/layout.tsx`: レイアウトとメタデータ設定
- `tsconfig.json`: TypeScript 設定
