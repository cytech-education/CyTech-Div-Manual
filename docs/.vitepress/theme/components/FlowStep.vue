<script setup lang="ts">
// 番号付きステップリスト
// 使い方:
// <FlowStep :steps="[{ title: '依頼受領', body: '...' }, ...]" />
interface Step {
  title: string
  body?: string
  icon?: string
}
defineProps<{ steps: Step[] }>()
</script>

<template>
  <ol class="flow-step">
    <li v-for="(step, i) in steps" :key="i" class="flow-step__item">
      <span class="flow-step__num">
        <span v-if="step.icon" class="flow-step__icon">{{ step.icon }}</span>
        <span v-else>{{ i + 1 }}</span>
      </span>
      <div class="flow-step__content">
        <div class="flow-step__title">{{ step.title }}</div>
        <div v-if="step.body" class="flow-step__body">{{ step.body }}</div>
      </div>
    </li>
  </ol>
</template>

<style scoped>
.flow-step {
  list-style: none;
  padding: 0;
  margin: 20px 0;
  counter-reset: flow;
  position: relative;
}

.flow-step__item {
  display: grid;
  grid-template-columns: 40px 1fr;
  gap: 16px;
  padding: 14px 16px 14px 0;
  position: relative;
}

.flow-step__item::before {
  content: '';
  position: absolute;
  left: 19px;
  top: 46px;
  bottom: -6px;
  width: 2px;
  background: linear-gradient(to bottom, var(--vp-c-divider), transparent 80%);
}

.flow-step__item:last-child::before {
  display: none;
}

.flow-step__num {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #2383E2, #8C5CE6);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(35, 131, 226, 0.22);
  flex-shrink: 0;
  z-index: 1;
}

.flow-step__icon {
  font-size: 1.1rem;
}

.flow-step__content {
  padding-top: 2px;
}

.flow-step__title {
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 4px;
}

.flow-step__body {
  color: var(--vp-c-text-2);
  font-size: 0.92rem;
  line-height: 1.7;
}
</style>
