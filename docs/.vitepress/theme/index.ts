import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import StatusBadge from './components/StatusBadge.vue'
import FlowStep from './components/FlowStep.vue'
import Timeline from './components/Timeline.vue'
import Tabs from './components/Tabs.vue'
import CopyBlock from './components/CopyBlock.vue'
import Mermaid from './components/Mermaid.vue'
import StatusOverview from './components/StatusOverview.vue'

import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('StatusBadge', StatusBadge)
    app.component('FlowStep', FlowStep)
    app.component('Timeline', Timeline)
    app.component('Tabs', Tabs)
    app.component('CopyBlock', CopyBlock)
    app.component('Mermaid', Mermaid)
    app.component('StatusOverview', StatusOverview)
  },
} satisfies Theme
