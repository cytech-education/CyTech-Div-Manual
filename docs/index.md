---
layout: home

hero:
  name: CyTech IR
  text: 運用マニュアル
  tagline: 株式会社TheNewGate CyTech 事業部のインストラクター向け業務運用ガイド。入学から卒業までの一連のフローと日々の運用をまとめています。
  image:
    src: /logo.svg
    alt: CyTech IR Manual
  actions:
    - theme: brand
      text: 🎓 はじめに
      link: /getting-started/admission
    - theme: alt
      text: 🔗 リンク集
      link: /links

features:
  - icon: 🎓
    title: はじめに
    details: 入学〜初回MTG、チーム開発、スキルシート作成。新しい利用者を迎えるまでの一連の流れ。
    link: /getting-started/admission
    linkText: セクションを開く

  - icon: ⚙️
    title: 日々の運用
    details: アカウント発行、1on1、チャット、テスト、AIレビュー、シフトまで日常業務のすべて。
    link: /operations/account
    linkText: セクションを開く

  - icon: 💡
    title: ポリシー・心得
    details: コーチング心得、スタッフ向けの初回面談で使う運用ポリシー。
    link: /policy/coaching
    linkText: セクションを開く

  - icon: 🔗
    title: リンク集
    details: 管理シート、議事録、月次MTG資料など外部ドキュメントへのリンク。
    link: /links
    linkText: セクションを開く
---

<StatusOverview />

<div class="home-footnote">

## このマニュアルについて

本マニュアルは **CyTech 事業部 IR（インストラクター）** が日々の業務を進めるうえでの共通ハンドブックです。入学対応から卒業までの運用、チーム開発、1on1、テスト、AIレビューなど、IR の主要業務を一通りカバーしています。

::: tip 使い方
- 左サイドバーから各セクションへ移動できます
- 右上の **キーワード検索** で全文検索できます
- 各ページ右下の **「このページを GitHub で編集する」** から直接編集できます
- <StatusBadge status="wip" /> が付いているページは内容を追記中です
:::

作成: CyTech 事業部 GL 紀谷実伽留（2025/4/24）

</div>

<style scoped>
.home-footnote {
  max-width: 960px;
  margin: 56px auto 0;
  padding: 0 24px 32px;
  font-size: 0.94rem;
  line-height: 1.9;
  color: var(--vp-c-text-2);
}

.home-footnote h2 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  border: none;
  padding: 0;
  margin: 0 0 16px;
}
</style>
