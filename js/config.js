/**
 * アプリの設定
 *
 * storage（データの保存先）
 *   'auto'       … https で開いていて、下の SharePoint 設定が入っていれば SharePoint、
 *                   それ以外（http://サーバーPC名:8000/ など）はサーバーPC
 *   'sharepoint' … 常に SharePoint
 *   'server'     … 常にサーバーPC（server/server.py）
 *
 * sharepoint（Microsoft 365 の設定。パスワードではないので、ここに書いて大丈夫です）
 *   tenantId  … Entra の「ディレクトリ (テナント) ID」
 *   clientId  … Entra の「アプリケーション (クライアント) ID」
 *   folderUrl … データを置く SharePoint フォルダの URL（ブラウザで開いたときのアドレス）
 *               「/sites/…」から始まるパスだけでも可（https://○○.sharepoint.com の部分は自動で補います）
 */
window.APP_CONFIG = {
    storage: 'auto',
    sharepoint: {
        tenantId: '0bbcbb8c-276d-4640-83b2-612d4168a6e5',   // ディレクトリ (テナント) ID
        clientId: 'f41f98ca-26f6-4479-a1f7-2a7de0efc698',   // アプリケーション (クライアント) ID
        // SharePoint ライブラリ「InventoryAppData」（アプリ専用の保管庫）
        folderUrl: '/sites/msteams_ae4d98/InventoryAppData/Forms/AllItems.aspx'
    }
};
