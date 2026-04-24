# チャット

利用者からのチャット（Slack / Discord 等）への対応ポリシーをまとめています。

<div class="rule-grid">
  <div class="rule-card rule-card--freq">
    <div class="rule-card__icon">⏱️</div>
    <div class="rule-card__label">確認頻度</div>
    <div class="rule-card__value">1〜2時間に1回</div>
    <div class="rule-card__note">業務状況に応じて柔軟に調整可</div>
  </div>
  <div class="rule-card rule-card--tone">
    <div class="rule-card__icon">💬</div>
    <div class="rule-card__label">文体</div>
    <div class="rule-card__value">適度に親しみのある</div>
    <div class="rule-card__note">「〜ですね！」「ご確認ありがとうございます！」など</div>
  </div>
  <div class="rule-card rule-card--scope">
    <div class="rule-card__icon">👤</div>
    <div class="rule-card__label">担当範囲</div>
    <div class="rule-card__value">自分の担当のみ</div>
    <div class="rule-card__note">担当者が休みの場合のみ代理対応可</div>
  </div>
</div>

## 解決済み処理について

:::danger 重要：自分で「解決済み」にしない
**こちらで「解決済み」にしない**こと！

ユーザー側に非表示となってしまうため、必ず**ユーザー自身に解決済みにしてもらう**よう促してください。
:::

## 回答のスタンス

:::tip コーチングとしての姿勢
- 「**答えを与える**」のではなく「**考え方やヒント**」を伝える
- ユーザー自身が考え、**成功体験を得られる**ようサポートに徹する
:::

関連：[コーチング心得](../policy/coaching)

<style scoped>
.rule-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin: 20px 0 28px;
}
.rule-card {
  padding: 18px 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.rule-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(15, 15, 15, 0.06);
  border-color: var(--vp-c-border);
}
.rule-card__icon {
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.rule-card__label {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  margin-bottom: 4px;
}
.rule-card__value {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  margin-bottom: 6px;
}
.rule-card__note {
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
}
</style>
