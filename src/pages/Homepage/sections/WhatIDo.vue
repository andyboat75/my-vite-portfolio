<script setup lang="ts">
import { computed } from 'vue';
import CyTabs from '../../../components/CyTabs.vue';
import { ui as d_ui } from '../../../config';
// import { Dict } from '../../../types';
const ui = {...d_ui.value.tabs.list} as any
delete ui.width
const items = [{
  label: 'Cybersecurity',
  slot: 'cybersecurity'
}, {
  label: 'Website Development',
  sloth: 'web_dev'
}
]

const orientation = computed(() => {
  return window.screen.width <= 1280 ? 'horizontal' : 'vertical'
})
</script>

<template>
  <div>
    <CyTabs :items="items" :orientation="orientation"
      :ui="{
        wrapper: orientation == 'vertical' ? 'flex items-center gap-4' : 'relative space-y-2', list: {...ui,width: orientation == 'vertical' ? 'w-48' : 'w-full' }
      }">
    <template #cybersecurity="{item}">
     {{ item.label }}
    </template>

    <template #web_dev="{item}">
      {{ item.label }}
    </template>
    </CyTabs>
  </div>
</template>
