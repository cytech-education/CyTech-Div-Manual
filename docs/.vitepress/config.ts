import { defineConfig } from 'vitepress'

// GitHub Pages の URL パス（リポジトリ名に合わせる）
const BASE = '/CyTech-Div-Manual/'

// GitHub の編集リンクに使うリポジトリパス
const REPO = 'cytech-education/CyTech-Div-Manual'

export default defineConfig({
  lang: 'ja-JP',
  title: 'CyTech IR 運用マニュアル',
  titleTemplate: ':title | CyTech IR 運用マニュアル',
  description: 'CyTech 事業部 IR（インストラクター）向け運用マニュアル',
  base: BASE,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [
    ['meta', { name: 'robots', content: 'noindex, nofollow' }],
    ['meta', { name: 'theme-color', content: '#2383E2' }],
  ],

  themeConfig: {
    logo: { src: '/logo.svg', width: 24, height: 24 },
    siteTitle: 'CyTech IR Manual',

    nav: [
      { text: 'トップ', link: '/' },
      {
        text: 'セクション',
        items: [
          { text: 'はじめに', link: '/getting-started/admission' },
          { text: '日々の運用', link: '/operations/account' },
          { text: 'ポリシー・心得', link: '/policy/coaching' },
          { text: 'リンク集', link: '/links' },
        ],
      },
    ],

    sidebar: [
      {
        text: '🎓 はじめに',
        collapsed: false,
        items: [
          { text: 'フロー', link: '/getting-started/admission' },
          { text: 'チーム開発（後半カリキュラム）', link: '/getting-started/team-dev' },
          { text: 'スキルシート作成', link: '/getting-started/skill-sheet' },
        ],
      },
      {
        text: '⚙️ 日々の運用',
        collapsed: false,
        items: [
          { text: 'アカウント発行・管理', link: '/operations/account' },
          { text: '1on1', link: '/operations/one-on-one' },
          { text: 'チャット', link: '/operations/chat' },
          { text: 'テスト', link: '/operations/test' },
          { text: 'AI半自動レビュー', link: '/operations/review-ai' },
          { text: 'テストレビューカンペ', link: '/operations/review-template' },
          { text: 'シフト', link: '/operations/shift' },
          { text: '各種集計について', link: '/operations/stats' },
        ],
      },
      {
        text: '💡 ポリシー・心得',
        collapsed: false,
        items: [
          { text: 'コーチング心得', link: '/policy/coaching' },
          { text: 'スタッフ・初回面談', link: '/policy/first-meeting' },
        ],
      },
      {
        text: '🔗 リンク集',
        collapsed: false,
        items: [{ text: 'ファイル等リンク集', link: '/links' }],
      },
    ],

    outline: {
      level: [2, 3],
      label: '目次',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'キーワード検索',
                buttonAriaLabel: 'キーワード検索',
              },
              modal: {
                displayDetails: '詳細を表示',
                resetButtonTitle: '入力をクリア',
                backButtonTitle: '戻る',
                noResultsText: '該当する結果はありません',
                footer: {
                  selectText: '選択',
                  selectKeyAriaLabel: 'Enter',
                  navigateText: '移動',
                  navigateUpKeyAriaLabel: '上へ',
                  navigateDownKeyAriaLabel: '下へ',
                  closeText: '閉じる',
                  closeKeyAriaLabel: 'Esc',
                },
              },
            },
          },
        },
      },
    },

    editLink: {
      pattern: `https://github.com/${REPO}/edit/main/docs/:path`,
      text: 'このページを GitHub で編集する',
    },

    docFooter: {
      prev: '前のページ',
      next: '次のページ',
    },

    lastUpdated: {
      text: '最終更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },

    darkModeSwitchLabel: 'テーマ切替',
    sidebarMenuLabel: 'メニュー',
    returnToTopLabel: 'トップへ戻る',
    langMenuLabel: '言語切替',

    footer: {
      message:
        '株式会社TheNewGate CyTech 事業部 — 本マニュアルは社内運用向けです',
      copyright: '© 2025 TheNewGate, Inc.',
    },
  },
})
