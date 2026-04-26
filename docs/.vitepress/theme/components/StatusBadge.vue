<script setup lang="ts">
// ページのステータスを示すバッジ
// 使い方: # ページタイトル <StatusBadge status="wip" />

interface Props {
  status?: 'wip' | 'ready' | 'draft'
  label?: string
}

const props = withDefaults(defineProps<Props>(), {
  status: 'wip',
})

const presets: Record<
  NonNullable<Props['status']>,
  { label: string; className: string }
> = {
  wip: { label: '作成中', className: 'badge-wip' },
  ready: { label: '公開中', className: 'badge-ready' },
  draft: { label: '下書き', className: 'badge-draft' },
}
</script>

<template>
  <span class="status-badge" :class="presets[status].className">
    <span class="dot" />
    {{ label ?? presets[status].label }}
  </span>
</template>

<style scoped>
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.72rem;
  font-weight: 500;
  line-height: 1;
  padding: 4px 10px;
  border-radius: 9999px;
  vertical-align: middle;
  margin-left: 8px;
  letter-spacing: 0.01em;
  white-space: nowrap;
  user-select: none;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 9999px;
  display: inline-block;
}

.badge-wip {
  background-color: rgba(233, 168, 0, 0.14);
  color: #a67400;
}
.badge-wip .dot {
  background-color: #e9a800;
}

.badge-ready {
  background-color: rgba(40, 167, 86, 0.14);
  color: #1f7a3e;
}
.badge-ready .dot {
  background-color: #28a756;
}

.badge-draft {
  background-color: rgba(55, 53, 47, 0.08);
  color: rgba(55, 53, 47, 0.72);
}
.badge-draft .dot {
  background-color: rgba(55, 53, 47, 0.4);
}

:global(.dark) .badge-wip {
  background-color: rgba(233, 168, 0, 0.18);
  color: #e9cf6a;
}
:global(.dark) .badge-ready {
  background-color: rgba(40, 167, 86, 0.2);
  color: #7fd598;
}
:global(.dark) .badge-draft {
  background-color: rgba(255, 255, 255, 0.08);
  color: rgba(230, 230, 228, 0.72);
}
:global(.dark) .badge-draft .dot {
  background-color: rgba(255, 255, 255, 0.4);
}
</style>
