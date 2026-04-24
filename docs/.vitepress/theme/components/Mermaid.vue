<script setup lang="ts">
// Mermaid フロー図を動的レンダリング
// 使い方:
// <Mermaid id="flow-account" :code="`graph LR; A[依頼] --> B[発行] --> C[記録]`" />
import { onMounted, ref, useTemplateRef, watch } from 'vue'
import { useData } from 'vitepress'

const props = defineProps<{ code: string; id?: string }>()
const host = useTemplateRef<HTMLDivElement>('host')
const rendered = ref(false)
const { isDark } = useData()

async function render() {
  if (!host.value) return
  const mermaid = (await import('mermaid')).default
  mermaid.initialize({
    startOnLoad: false,
    theme: isDark.value ? 'dark' : 'default',
    themeVariables: {
      primaryColor: '#2383E2',
      primaryBorderColor: '#2383E2',
      primaryTextColor: isDark.value ? '#e6e6e4' : '#37352f',
      lineColor: isDark.value ? '#9aa0a6' : '#6b6b6b',
      fontFamily:
        "'Inter', 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif",
    },
    securityLevel: 'loose',
  })
  const id = props.id ?? 'mermaid-' + Math.random().toString(36).slice(2, 10)
  try {
    const { svg } = await mermaid.render(id, props.code)
    host.value.innerHTML = svg
    rendered.value = true
  } catch (e) {
    host.value.innerHTML =
      '<pre style="color:#a9352d;">Mermaid render error: ' +
      String(e) +
      '</pre>'
  }
}

onMounted(render)
watch(isDark, render)
watch(() => props.code, render)
</script>

<template>
  <div class="mermaid-wrap">
    <div ref="host" class="mermaid-host" :class="{ 'is-ready': rendered }" />
  </div>
</template>

<style scoped>
.mermaid-wrap {
  margin: 20px 0;
  padding: 16px 20px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow-x: auto;
}

.mermaid-host {
  min-height: 40px;
  text-align: center;
  transition: opacity 0.2s ease;
  opacity: 0;
}

.mermaid-host.is-ready {
  opacity: 1;
}

.mermaid-host :deep(svg) {
  max-width: 100%;
  height: auto;
}
</style>
