# スキルシート作成

後半カリキュラム（[チーム開発](./team-dev)）の結合テスト終了後に、対象者のスキルシートを作成して営業へ連携するまでの運用フローをまとめています。

## 全体フロー

<Mermaid id="flow-skill-sheet" :code="`flowchart LR
  A([面談実施]) --> B[スキルシート作成]
  B --> C[本人に確認]
  C --> D{了承}
  D -->|OK| E([Sales に連携])
  D -->|修正| B
  classDef start fill:#2383E2,stroke:#2383E2,color:#fff;
  classDef goal fill:#8C5CE6,stroke:#8C5CE6,color:#fff;
  class A start
  class E goal
`" />

<FlowStep :steps="[
  { title: '面談実施', body: '本人と方針・基本情報を擦り合わせ', icon: '🗣️' },
  { title: '作成', body: 'テンプレを使用してスキルシートを下書き', icon: '📋' },
  { title: '本人に確認', body: '内容を本人にレビューしてもらい了承を得る', icon: '✅' },
  { title: 'Sales に連携', body: '了承が取れた段階で営業に共有', icon: '🤝' },
]" />

## スキルシート作成面談

<FlowStep :steps="[
  { title: '基本情報の確認', body: 'イニシャル・年齢・最終学歴・最寄り駅を確認しながら記入', icon: '🪪' },
  { title: '作成方針の提示', body: '「すなおパターン」と「色付けパターン」の 2 案を提示し、メリデメを共有', icon: '🧭' },
  { title: '各パターンのメリデメ提示', body: '本人が判断できるよう、それぞれの利点と負担感を伝える', icon: '⚖️' },
  { title: '意思の確認', body: 'どちらにせよ強制はできないため、本人の意思を尊重する', icon: '💬' },
  { title: '下書き完了日の共有', body: 'いつまでに下書きを仕上げるか伝える', icon: '📅' },
  { title: 'Java 参加の案内', body: '今後 Java（学習会等）に参加してもらう旨を伝える', icon: '☕' },
  { title: '面談対策シートを共有', body: '質問内容を理解する／自分なりの回答を考える／不明点は IR に確認する／回答は「ポジティブ」に返答するのが最重要、と伝える', icon: '📝' },
]" />

### 作成方針の 2 パターン

<div class="pattern-grid">
  <div class="pattern-card pattern-card--simple">
    <div class="pattern-card__icon">🟦</div>
    <div class="pattern-card__label">すなおパターン</div>
    <div class="pattern-card__value">研修＋チーム開発を実務として記載</div>
    <div class="pattern-card__section">
      <div class="pattern-card__section-title">メリット</div>
      <div class="pattern-card__section-body">基本的に「やったこと」のみで構成されるため安心感がある</div>
    </div>
    <div class="pattern-card__section">
      <div class="pattern-card__section-title">デメリット</div>
      <div class="pattern-card__section-body">案件の選択肢が狭まる可能性がある</div>
    </div>
  </div>
  <div class="pattern-card pattern-card--colored">
    <div class="pattern-card__icon">🟪</div>
    <div class="pattern-card__label">色付けパターン</div>
    <div class="pattern-card__value">研修＋チーム開発に 1〜2 案件をプラスし 3 年前後に調整</div>
    <div class="pattern-card__section">
      <div class="pattern-card__section-title">メリット</div>
      <div class="pattern-card__section-body">案件の選択肢が広がる</div>
    </div>
    <div class="pattern-card__section">
      <div class="pattern-card__section-title">デメリット</div>
      <div class="pattern-card__section-body">本人に頑張ってもらう場面が増える</div>
    </div>
  </div>
</div>

:::tip 面談時のポイント
回答の一番のポイントは「**ポジティブ**に返答すること」。受け答えのトーンが評価に直結する旨を必ず伝える。
:::

## スキルシートテンプレ

[スキルシートテンプレ（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/1XStx8TCL3N6sdmfnsYFCPwMB8WaKrOK5aZc5yKTHbs0/edit?usp=drive_link)

### 作成手順

<Tabs :tabs="[
  { label: 'すなおパターン', key: 'simple', icon: '🟦' },
  { label: '色付けパターン', key: 'colored', icon: '🟪' },
]">

<template #simple>

<FlowStep :steps="[
  { title: 'テンプレをコピー', body: 'スタッフの個人フォルダ（人事・営業が使用しているもの）にテンプレをコピー', icon: '📑' },
  { title: '経験案件を入力', body: '「経験案件入力」タブに必要事項を入力', icon: '✏️' },
  { title: '経歴変換ツールを実行', body: 'メニューバーから「経歴変換ツール」を実行', icon: '⚙️' },
  { title: '業務経歴タブにコピー', body: '「経験案件出力」タブに出力された内容を「業務経歴」タブにコピー', icon: '📋' },
]" />

</template>

<template #colored>

<FlowStep :steps="[
  { title: 'テンプレをコピー', body: 'スタッフの個人フォルダ（人事・営業が使用しているもの）にテンプレをコピー', icon: '📑' },
  { title: 'スキルセット／希望案件を入力', body: '「スキルセット/希望案件」タブにいい感じに入力', icon: '✏️' },
  { title: '経歴生成ツールを実行', body: 'メニューバーから「経歴生成ツール」を実行', icon: '⚙️' },
  { title: '業務経歴タブに直接出力', body: '「業務経歴」タブに直接出力されるためそのまま利用可能', icon: '✅' },
]" />

</template>

</Tabs>

## 面談対策シート

[面談対策シート（Google スプレッドシート）](https://docs.google.com/spreadsheets/d/162dmjvK-MHaFO7TiU5UDnzfAYMcvgten21aKT8A-zSw/edit?usp=sharing)

:::warning 編集制限について
編集制限がかかっているため、回答を書き込みたい場合は**ダウンロード**するか、**自分のドライブにコピー**して利用してもらうよう案内する。
:::

### 対象者への案内ポイント

<FlowStep :steps="[
  { title: '不明な用語・質問を調べてもらう', body: '質問の中で分からないものは極力なくしておく', icon: '🔍' },
  { title: '自分なりの回答を考えてもらう', body: '答えの形を本人の言葉で準備しておく', icon: '💭' },
  { title: '不明点は IR に質問するよう促す', body: '回答方法が分からない場合は IR がサポート', icon: '🆘' },
  { title: 'ポジティブに返答する', body: '回答の一番のポイントは「ポジティブ」であること', icon: '😄' },
]" />

<style scoped>
.pattern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 16px;
  margin: 20px 0 28px;
}
.pattern-card {
  padding: 20px 22px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.pattern-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(15, 15, 15, 0.06);
  border-color: var(--vp-c-border);
}
.pattern-card__icon {
  font-size: 1.5rem;
  margin-bottom: 8px;
}
.pattern-card__label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  margin-bottom: 4px;
}
.pattern-card__value {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.5;
  margin-bottom: 14px;
}
.pattern-card__section {
  margin-top: 10px;
}
.pattern-card__section-title {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  margin-bottom: 4px;
}
.pattern-card__section-body {
  font-size: 0.86rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.pattern-card--colored .pattern-card__section-title {
  color: #8C5CE6;
}
</style>
