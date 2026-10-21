// 運営用 Web アプリ（n02 Tournament Admin）の URL。
// googleClientId は Google Cloud の OAuth クライアント ID（秘密ではない。運営用 Apps Script のスクリプト プロパティ GOOGLE_CLIENT_ID と同じ値）。
// この URL や ID を知られても、Google でログインした主催者本人か、管理パスワード・管理者の鍵がなければ何も操作できません。
// Apps Script を更新するときは「デプロイを管理」→「新バージョン」で行い、この URL を変えないでください。
window.TPOC_ADMIN_CONFIG = {
  endpoint: 'https://script.google.com/macros/s/AKfycbwC41CDrMfr742_QYejPEgdkrTqMNMYRVnGWvd5I9Iyi_DqnZCazFf_Z5npw2qC7e0SHg/exec',
  googleClientId: '99512252323-um86ttjt5bckj0j00nd3d39a4te1bael.apps.googleusercontent.com',
};
