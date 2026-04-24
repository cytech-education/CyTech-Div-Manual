<script setup lang="ts">
// コピー可能なテキストブロック（主にメール文面向け）
// 使い方:
// <CopyBlock title="メール文面">
//   本文...
// </CopyBlock>
import { ref, useTemplateRef, nextTick } from 'vue'
defineProps<{ title?: string; hint?: string }>()

const bodyRef = useTemplateRef<HTMLDivElement>('body')
const copied = ref(false)

async function copy() {
  const text = bodyRef.value?.innerText ?? ''
  try {
    await navigator.clipboard.writeText(text)
  } catch {
    // Clipboard API が使えない環境向け
    const ta = document.createElement('textarea')
    ta.value = text
    document.body.appendChild(ta)
    ta.select()
    document.execCommand('copy')
    document.body.removeChild(ta)
  }
  copied.value = true
  await nextTick()
  setTimeout(() => (copied.value = false), 1800)
}
</script>

<template>
  <div class="copy-block">
    <div class="copy-block__head">
      <div class="copy-block__title">
        <span class="copy-block__dot"></span>
        <span>{{ title ?? 'テンプレート' }}</span>
        <span v-if="hint" class="copy-block__hint">{{ hint }}</span>
      </div>
      <button class="copy-block__btn" :class="{ 'is-copied': copied }" @click="copy">
        <span v-if="!copied">📋 コピー</span>
        <span v-else>✔ コピーしました</span>
      </button>
    </div>
    <div class="copy-block__body" ref="body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.copy-block {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg);
  margin: 20px 0;
  overflow: hidden;
}

.copy-block__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: var(--vp-c-bg-alt);
  border-bottom: 1px solid var(--vp-c-divider);
  gap: 10px;
}

.copy-block__title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
}

.copy-block__dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #2383E2, #8C5CE6);
}

.copy-block__hint {
  font-weight: 400;
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
  margin-left: 4px;
}

.copy-block__btn {
  padding: 6px 12px;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 6px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
}

.copy-block__btn:hover {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-border);
}

.copy-block__btn.is-copied {
  background: #e7f6ec;
  color: #1f7a3e;
  border-color: #b7e1c5;
}

:global(.dark) .copy-block__btn.is-copied {
  background: rgba(40, 167, 86, 0.18);
  color: #7fd598;
  border-color: rgba(40, 167, 86, 0.3);
}

.copy-block__body {
  padding: 16px 18px;
  font-size: 0.92rem;
  line-height: 1.85;
  color: var(--vp-c-text-1);
  white-space: pre-wrap;
}

.copy-block__body :deep(p) {
  margin: 0 0 0.7em;
}
.copy-block__body :deep(p:last-child) {
  margin-bottom: 0;
}
.copy-block__body :deep(strong) {
  color: var(--vp-c-text-1);
}
</style>
