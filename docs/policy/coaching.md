# コーチング心得

IR として利用者に向き合うときの基本姿勢です。

<div class="coach-grid">
  <article class="coach-card">
    <div class="coach-card__icon">🤝</div>
    <h3>相手を信じる</h3>
    <p>これが一番大事かも！相手が持ってる力を信じてあげること。相手が自信を持てるようにサポートするだけで、どんどん成長するからね〜😊</p>
  </article>

  <article class="coach-card">
    <div class="coach-card__icon">👂</div>
    <h3>聴く力</h3>
    <p>ただアドバイスするんじゃなくて、相手が<strong>何を感じているか、何を考えているか</strong>をしっかり聴くのがコーチの仕事。質問して引き出す感じね！</p>
  </article>

  <article class="coach-card">
    <div class="coach-card__icon">💪</div>
    <h3>ポジティブなフィードバック</h3>
    <p><strong>良いところを褒める</strong>ことが大事！「ここが良かった！」って伝えることで、相手はもっとやる気出すからね。</p>
  </article>

  <article class="coach-card">
    <div class="coach-card__icon">✨</div>
    <h3>具体的なアドバイス</h3>
    <p>アドバイスするなら、<strong>具体的にどうしたら良いか</strong>を言うのがポイント。ふわっとしたアドバイスじゃなくて、<strong>実践できるステップ</strong>を伝えると効果的だよ。</p>
  </article>

  <article class="coach-card">
    <div class="coach-card__icon">💕</div>
    <h3>相手のペースを尊重する</h3>
    <p>どんなに急いでも、<strong>相手のペースに合わせる</strong>ことが重要！焦らず、一緒に進んでいく感覚を大切にね。</p>
  </article>
</div>

---

::: tip 日々の業務とのつながり
[チャット対応](../operations/chat) や [1on1](../operations/one-on-one) の場でも、この 5 つの心得を意識してください。
:::

<style scoped>
.coach-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 14px;
  margin: 20px 0 24px;
}
.coach-card {
  padding: 20px 20px 18px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  background: var(--vp-c-bg);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}
.coach-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 22px rgba(15, 15, 15, 0.06);
  border-color: var(--vp-c-border);
}
.coach-card__icon {
  font-size: 1.8rem;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.coach-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 6px;
  line-height: 1.4;
  border: none;
  padding: 0;
}
.coach-card p {
  font-size: 0.9rem;
  line-height: 1.75;
  color: var(--vp-c-text-2);
  margin: 0;
}
</style>
