# AI による半自動レビュー

AI ツールを活用してテストレビューを半自動化する方法です。

## 想定利用ツール

<div class="tool-grid">
  <div class="tool-card">
    <div class="tool-card__icon">🚀</div>
    <div class="tool-card__name">Antigravity</div>
  </div>
  <div class="tool-card">
    <div class="tool-card__icon">⌨️</div>
    <div class="tool-card__name">Cursor</div>
  </div>
  <div class="tool-card">
    <div class="tool-card__icon">🤖</div>
    <div class="tool-card__name">Claude Code</div>
  </div>
</div>

## 実施フロー

<FlowStep :steps="[
  { title: 'レビュー用ディレクトリをクローン', body: 'git clone https://github.com/cytech-education/for-review.git', icon: '📥' },
  { title: 'レビュー対象のリポジトリをレビュー用ディレクトリ配下にクローン', icon: '🗂️' },
  { title: 'AI ツールでレビュー依頼を指示', body: 'Antigravity / Cursor / Claude Code のいずれかを利用', icon: '🧠' },
  { title: 'プレーンテキストのレビューバック文が作成される', body: '確認・調整のうえユーザーに返答', icon: '📝' },
]" />

::: tip 詳細な使い方
詳しい使い方は、レビュー用ディレクトリの **README** に記載されています。

<https://github.com/cytech-education/for-review>
:::

## 関連

- [テスト](./test) — テスト対応の全体フロー
- [テストレビューカンペ](./review-template) — STEP 別のレビュー観点

<style scoped>
.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 12px;
  margin: 16px 0 24px;
}
.tool-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(15, 15, 15, 0.06);
  border-color: var(--vp-c-border);
}
.tool-card__icon {
  font-size: 1.8rem;
}
.tool-card__name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--vp-c-text-1);
}
</style>
