<script setup lang="ts">
// 全ページのステータス一覧カード
// 使い方: <StatusOverview />
// マニュアル全体の進捗を可視化する
import { computed } from 'vue'
import { withBase } from 'vitepress'

interface Item {
  title: string
  link: string
  status: 'ready' | 'wip' | 'draft'
  group: 'getting-started' | 'operations' | 'policy' | 'links'
  icon: string
}

const items: Item[] = [
  { title: '入学〜初回MTG', link: '/getting-started/admission', status: 'ready', group: 'getting-started', icon: '🎓' },
  { title: 'チーム開発', link: '/getting-started/team-dev', status: 'ready', group: 'getting-started', icon: '👥' },
  { title: '卒業時', link: '/getting-started/graduation', status: 'wip', group: 'getting-started', icon: '🎉' },
  { title: 'アカウント発行・管理', link: '/operations/account', status: 'ready', group: 'operations', icon: '🔑' },
  { title: 'Discord', link: '/operations/discord', status: 'wip', group: 'operations', icon: '💬' },
  { title: '1on1', link: '/operations/one-on-one', status: 'ready', group: 'operations', icon: '🗣️' },
  { title: 'チャット', link: '/operations/chat', status: 'ready', group: 'operations', icon: '💭' },
  { title: 'テスト', link: '/operations/test', status: 'ready', group: 'operations', icon: '✅' },
  { title: 'AI半自動レビュー', link: '/operations/review-ai', status: 'ready', group: 'operations', icon: '🤖' },
  { title: 'テストレビューカンペ', link: '/operations/review-template', status: 'ready', group: 'operations', icon: '📋' },
  { title: 'シフト', link: '/operations/shift', status: 'wip', group: 'operations', icon: '🗓️' },
  { title: 'コーチング心得', link: '/policy/coaching', status: 'ready', group: 'policy', icon: '💡' },
  { title: 'スタッフ・初回面談', link: '/policy/first-meeting', status: 'ready', group: 'policy', icon: '🤝' },
  { title: 'ファイル等リンク集', link: '/links', status: 'ready', group: 'links', icon: '🔗' },
]

const stats = computed(() => {
  const total = items.length
  const ready = items.filter((i) => i.status === 'ready').length
  const wip = items.filter((i) => i.status === 'wip').length
  return { total, ready, wip, percent: Math.round((ready / total) * 100) }
})

const statusText: Record<Item['status'], string> = {
  ready: '公開中',
  wip: '作成中',
  draft: '下書き',
}
</script>

<template>
  <section class="status-overview">
    <header class="status-overview__header">
      <div>
        <div class="status-overview__eyebrow">MANUAL COVERAGE</div>
        <h2 class="status-overview__title">マニュアル全体の整備状況</h2>
      </div>
      <div class="status-overview__stats">
        <div class="stat">
          <div class="stat__value">{{ stats.total }}</div>
          <div class="stat__label">全ページ</div>
        </div>
        <div class="stat stat--ready">
          <div class="stat__value">{{ stats.ready }}</div>
          <div class="stat__label">公開中</div>
        </div>
        <div class="stat stat--wip">
          <div class="stat__value">{{ stats.wip }}</div>
          <div class="stat__label">作成中</div>
        </div>
      </div>
    </header>

    <div class="status-overview__progress">
      <div class="bar">
        <div class="bar__fill" :style="{ width: stats.percent + '%' }"></div>
      </div>
      <div class="progress-label">{{ stats.percent }}% 公開中</div>
    </div>

    <div class="status-overview__grid">
      <a
        v-for="it in items"
        :key="it.link"
        :href="withBase(it.link)"
        class="card"
        :data-status="it.status"
      >
        <div class="card__icon">{{ it.icon }}</div>
        <div class="card__body">
          <div class="card__title">{{ it.title }}</div>
          <div class="card__status">
            <span class="card__dot" />
            {{ statusText[it.status] }}
          </div>
        </div>
        <div class="card__arrow">→</div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.status-overview {
  max-width: 1120px;
  margin: 64px auto 0;
  padding: 0 24px;
}

.status-overview__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.status-overview__eyebrow {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--vp-c-brand-1);
  margin-bottom: 4px;
}

.status-overview__title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
  border: none;
  padding: 0;
}

.status-overview__stats {
  display: flex;
  gap: 16px;
}

.stat {
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 8px 14px;
  min-width: 72px;
  text-align: center;
}

.stat__value {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.2;
}

.stat__label {
  font-size: 0.72rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
  margin-top: 2px;
}

.stat--ready .stat__value {
  color: #1f7a3e;
}
.stat--wip .stat__value {
  color: #a67400;
}
:global(.dark) .stat--ready .stat__value {
  color: #7fd598;
}
:global(.dark) .stat--wip .stat__value {
  color: #e9cf6a;
}

.status-overview__progress {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.bar {
  flex: 1;
  height: 8px;
  border-radius: 9999px;
  background: var(--vp-c-divider);
  overflow: hidden;
}

.bar__fill {
  height: 100%;
  background: linear-gradient(90deg, #2383E2, #8C5CE6);
  border-radius: 9999px;
  transition: width 0.4s ease;
}

.progress-label {
  font-size: 0.82rem;
  color: var(--vp-c-text-2);
  font-weight: 500;
  white-space: nowrap;
}

.status-overview__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
}

.card {
  display: grid;
  grid-template-columns: 42px 1fr 18px;
  gap: 12px;
  align-items: center;
  padding: 14px 16px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    border-color 0.15s ease;
  border-bottom: 1px solid var(--vp-c-divider) !important;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(15, 15, 15, 0.06);
  border-color: var(--vp-c-border);
}

.card__icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.card__title {
  font-size: 0.94rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 2px;
}

.card__status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.76rem;
  color: var(--vp-c-text-2);
}

.card__dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  background: var(--vp-c-text-3);
}

.card[data-status='ready'] .card__dot {
  background: #28a756;
}
.card[data-status='wip'] .card__dot {
  background: #e9a800;
}
.card[data-status='draft'] .card__dot {
  background: rgba(55, 53, 47, 0.4);
}

.card__arrow {
  color: var(--vp-c-text-3);
  font-size: 1rem;
  transition: transform 0.15s ease, color 0.15s ease;
}

.card:hover .card__arrow {
  transform: translateX(3px);
  color: var(--vp-c-brand-1);
}
</style>
