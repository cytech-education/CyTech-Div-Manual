<script setup lang="ts">
// 時系列タイムライン（垂直）
// 使い方:
// <Timeline :items="[
//   { when: '毎月 第1・第3月曜', title: '入学', body: '...' },
//   ...
// ]" />
interface Item {
  when?: string
  title: string
  body?: string
  status?: 'done' | 'current' | 'upcoming'
  icon?: string
}
defineProps<{ items: Item[] }>()
</script>

<template>
  <div class="timeline">
    <div v-for="(it, i) in items" :key="i" class="timeline__row">
      <div class="timeline__marker" :data-status="it.status ?? 'default'">
        <span v-if="it.icon" class="timeline__icon">{{ it.icon }}</span>
        <span v-else class="timeline__dot" />
      </div>
      <div class="timeline__line" v-if="i !== items.length - 1" />
      <div class="timeline__card">
        <div v-if="it.when" class="timeline__when">{{ it.when }}</div>
        <div class="timeline__title">{{ it.title }}</div>
        <div v-if="it.body" class="timeline__body">{{ it.body }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  margin: 20px 0;
  padding-left: 4px;
}

.timeline__row {
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 14px;
  position: relative;
  padding-bottom: 18px;
}

.timeline__marker {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: var(--vp-c-bg);
  border: 2px solid var(--vp-c-brand-1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-brand-1);
  font-size: 1.1rem;
  z-index: 1;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  flex-shrink: 0;
}

.timeline__marker[data-status='done'] {
  background: var(--vp-c-brand-1);
  color: #fff;
}
.timeline__marker[data-status='current'] {
  background: linear-gradient(135deg, #2383E2, #8C5CE6);
  border-color: transparent;
  color: #fff;
  box-shadow: 0 0 0 6px rgba(35, 131, 226, 0.14);
}
.timeline__marker[data-status='upcoming'] {
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-3);
  border-color: var(--vp-c-divider);
}

.timeline__dot {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  background: currentColor;
}

.timeline__line {
  position: absolute;
  left: 21px;
  top: 44px;
  bottom: -4px;
  width: 2px;
  background: linear-gradient(to bottom, var(--vp-c-divider), transparent 85%);
}

.timeline__card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 12px 16px;
  transition: border-color 0.15s ease, transform 0.15s ease,
    box-shadow 0.15s ease;
}

.timeline__card:hover {
  border-color: var(--vp-c-border);
  transform: translateY(-1px);
  box-shadow: 0 4px 14px rgba(15, 15, 15, 0.05);
}

.timeline__when {
  font-size: 0.76rem;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}

.timeline__title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
  line-height: 1.5;
}

.timeline__body {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}
</style>
