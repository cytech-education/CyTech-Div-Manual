<script setup lang="ts">
// タブ切り替え
// 使い方:
// <Tabs :tabs="[{ label: '社内', key: 'internal' }, { label: '共通', key: 'common' }]">
//   <template #internal>社内の内容</template>
//   <template #common>共通の内容</template>
// </Tabs>
import { ref } from 'vue'
interface Tab {
  label: string
  key: string
  icon?: string
}
const props = defineProps<{ tabs: Tab[] }>()
const active = ref(props.tabs[0]?.key ?? '')
</script>

<template>
  <div class="tabs">
    <div class="tabs__head" role="tablist">
      <button
        v-for="t in tabs"
        :key="t.key"
        role="tab"
        :aria-selected="active === t.key"
        :class="['tabs__tab', { 'is-active': active === t.key }]"
        @click="active = t.key"
      >
        <span v-if="t.icon" class="tabs__icon">{{ t.icon }}</span>
        {{ t.label }}
      </button>
    </div>
    <div class="tabs__panel">
      <template v-for="t in tabs" :key="t.key">
        <div v-if="active === t.key" class="tabs__body">
          <slot :name="t.key" />
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  margin: 20px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.tabs__head {
  display: flex;
  gap: 2px;
  padding: 6px;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
  overflow-x: auto;
}

.tabs__tab {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: none;
  background: transparent;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.15s ease, color 0.15s ease;
}

.tabs__tab:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.tabs__tab.is-active {
  background: var(--vp-c-bg);
  color: var(--vp-c-brand-1);
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.08);
}

.tabs__icon {
  font-size: 1rem;
}

.tabs__panel {
  padding: 18px 22px;
}

.tabs__body :deep(p:first-child) {
  margin-top: 0;
}
.tabs__body :deep(p:last-child) {
  margin-bottom: 0;
}
</style>
