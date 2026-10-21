# n02 Tournament 閲覧ページ（GitHub Pages 用）

n02 Tournament PoC の閲覧画面を、Google の外（GitHub Pages）から表示するための静的ページです。
データは閲覧者用 Apps Script Web アプリの `?format=json` から取得します。

Apps Script の画面（`…/exec`）は、ブラウザで複数の Google アカウントにログインしていると
「現在、ファイルを開くことができません」となって開けないことがあります。
このページは Google のログイン情報を送らずにデータだけを取得するので、その影響を受けません。

## ファイル

| ファイル | 内容 |
| --- | --- |
| `index.html` `viewer.css` `viewer.js` | 閲覧ページ本体（n02 リポジトリの `tournament-poc/tools/build.mjs` が生成） |
| `ux-kit.js` `ux-kit.css` `viewer-plus.js` | 閲覧ページとポータルの操作・動き（大会一覧へのリンク・進み具合・選手を探す・引っぱって更新・トーストなど） |
| `config.js` | 閲覧者用 Web アプリの URL（`config.example.js` をコピーして作成） |
| `admin/` | 運営画面（大会の作成・運営）。`admin/config.js` に運営用 Web アプリの URL |
| `events/` | ポータル「トーナメント・リーグ」（公開大会の一覧・検索・作成した大会。n02 のトップ画面からリンク）。設定は `config.js` と `admin/config.js` をそのまま読む |

## URL の指定

- `?event=EVT-…` 特定の大会を表示（省略時は既定表示の大会）
- `?interval=15` 自動更新の間隔（秒、15〜600。試験用）

ソースと設計資料: https://github.com/chihirohashimotoac-coder/n02/tree/claude/gifted-bardeen-eistmm/tournament-poc
