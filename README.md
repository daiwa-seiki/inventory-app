# 部品在庫管理システム

社内で使う、部品在庫・受注・出荷の管理アプリです。
このリポジトリの GitHub Pages で公開し、Microsoft 365 アカウントでログインして使います。

## できること

- 製品・部品（製品構成）・在庫の管理、入出庫履歴
- 発注管理（発注推奨・発注記録・仕入先マスタ）
- 製品出荷記録
  - 取引先EDI（CSV）の取込：発注番号（0000000-000）ごとに新規・変更・取消を反映
  - Excel受注台帳からの初期取込
  - 売上明細表（CSV）を出荷履歴として取込 → 発注番号が一致する出荷予定の残数を自動で減算
  - EDI反映履歴（何がどう変わったか）の確認

## データの置き場所

| もの | 場所 |
|---|---|
| データ（製品・部品・在庫・受注・出荷など） | SharePoint のライブラリ「InventoryAppData」（データの種類ごとに JSON ファイル） |
| アプリの画面ファイル | このリポジトリ（GitHub Pages で公開） |

- **このリポジトリに会社のデータは入っていません。** データは SharePoint にあり、ログインした社員だけが読み書きできます。
- SharePoint のバージョン履歴で、各データファイルを前の状態に戻せます。
- 管理ページ（`admin.html`）から、全データのバックアップ（JSON）の保存・取込ができます。

## 設定（js/config.js）

| 項目 | 内容 |
|---|---|
| `tenantId` | Entra の「ディレクトリ (テナント) ID」 |
| `clientId` | Entra の「アプリケーション (クライアント) ID」（アプリ名: 在庫管理アプリ） |
| `folderUrl` | データを置く SharePoint ライブラリの場所（`/sites/…` のパスだけでよい） |

これらはパスワードではなく、公開しても問題ない値です。

## 公開リポジトリでの注意

- 社名・取引先名・社内システム名など、会社が特定できる情報はコードや README に書かない。
- 発注書に印字する自社名は、初回の発注書作成時に入力し、SharePoint 側の設定データに保存する。
- 実データ（バックアップ JSON、EDI・売上明細の CSV、Excel 台帳）はリポジトリに入れない。

## 更新のしかた

1. ファイルを変更して `main` ブランチに反映する
2. 1〜2分で GitHub Pages に反映される
3. 画面に反映されないときは、ブラウザで **Ctrl + F5**

アドレス（URL）が変わった場合は、Entra の「在庫管理アプリ」→ Authentication のリダイレクト URI（`…/redirect.html`）も合わせて変更すること。

## 運用ルール

- 外部の人からの修正提案（Pull request）は、内容にかかわらず承認しない。

## ファイル構成

| ファイル | 役割 |
|---|---|
| `index.html` | アプリ本体の画面 |
| `admin.html` | 管理ページ（バックアップ・データ取込） |
| `redirect.html` | Microsoft 365 ログイン後の戻り先 |
| `js/config.js` | 設定 |
| `js/database.js` | データの読み書き（保存先の切り替え・手元のコピー） |
| `js/sharepoint-transport.js` | SharePoint（Microsoft Graph）との通信 |
| `js/order-manager.js` | 受注管理（EDI・受注台帳・出荷の反映） |
| `js/excel-manager.js` | Excel / CSV の取込・出力 |
| `js/ui-manager.js`, `js/search-manager.js` | 画面表示・検索 |
| `js/inventory-logic.js`, `js/cost-calculator.js`, `js/models.js` | 在庫計算・原価計算・データの形 |
| `js/vendor/` | Microsoft のログイン用ライブラリ（MSAL） |
