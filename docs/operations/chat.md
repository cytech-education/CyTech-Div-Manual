# チャット

利用者からのチャット（Slack / Discord 等）への対応ポリシーをまとめています。

<div class="rule-grid">
  <div class="rule-card rule-card--freq">
    <div class="rule-card__icon">⏱️</div>
    <div class="rule-card__label">確認頻度</div>
    <div class="rule-card__value">通知から15分以内</div>
    <div class="rule-card__note">通知を受け取ったら 15 分以内にリアクションで一次受領</div>
  </div>
  <div class="rule-card rule-card--tone">
    <div class="rule-card__icon">💬</div>
    <div class="rule-card__label">文体</div>
    <div class="rule-card__value">適度に親しみのある</div>
    <div class="rule-card__note">「〜ですね！」「ご確認ありがとうございます！」など</div>
  </div>
  <div class="rule-card rule-card--scope">
    <div class="rule-card__icon">👥</div>
    <div class="rule-card__label">担当範囲</div>
    <div class="rule-card__value">自分の担当が基本</div>
    <div class="rule-card__note">他 IR のスタッフにも対応して OK</div>
  </div>
</div>

## Slack 通知へのリアクション運用

Slack の通知には**リアクションで状態を表現**します。自分が対応中なのか、完了したのかを他の IR から見て分かるようにするためのルールです。

<div class="reaction-flow">
  <div class="reaction-step">
    <div class="reaction-step__emoji">👀</div>
    <div class="reaction-step__body">
      <div class="reaction-step__title">確認時</div>
      <div class="reaction-step__desc">通知に気付いたら <code>👀</code> を付けて「確認した／対応中」を示す</div>
    </div>
  </div>
  <div class="reaction-arrow">→</div>
  <div class="reaction-step">
    <div class="reaction-step__emoji">✅</div>
    <div class="reaction-step__body">
      <div class="reaction-step__title">対応完了時</div>
      <div class="reaction-step__desc">対応が終わったら <code>✅</code> を付けて「対応済み」を示す</div>
    </div>
  </div>
</div>

:::tip なぜやるか
- 他の IR が「誰が触っているか」を即座に把握できる
- 二重対応・対応漏れの防止
- 振り返り時にも対応状況をログとして追える
:::

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

.reaction-flow {
  display: flex;
  align-items: stretch;
  gap: 14px;
  margin: 20px 0 24px;
  flex-wrap: wrap;
}
.reaction-step {
  flex: 1 1 240px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.reaction-step:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(15, 15, 15, 0.06);
  border-color: var(--vp-c-border);
}
.reaction-step__emoji {
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  flex-shrink: 0;
}
.reaction-step__title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
}
.reaction-step__desc {
  font-size: 0.86rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
.reaction-step__desc code {
  font-size: 0.95rem;
  vertical-align: -1px;
}
.reaction-arrow {
  align-self: center;
  color: var(--vp-c-text-3);
  font-size: 1.4rem;
  font-weight: 300;
}
@media (max-width: 640px) {
  .reaction-arrow {
    transform: rotate(90deg);
    margin: -4px auto;
  }
}
</style>
