<script setup lang="ts">
import {PropType, computed, ref, onMounted} from "vue"
import {ui as default_ui} from "../config"
import {defu} from "defu"
import type { TabItem } from "../types"
import { TabGroup as HTabGroup, TabList as HTabList, Tab as HTab, TabPanels as HTabPanels, TabPanel as HTabPanel } from '@headlessui/vue'

const props = defineProps({
    orientation: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal',
      validator: (value: string) => ['horizontal', 'vertical'].includes(value)
    },
    defaultIndex: {
      type: Number,
      default: 0
    },
    items: {
      type: Array as PropType<TabItem[]>,
      default: () => []
    },
    ui: {
      type: Object as PropType<Partial<typeof default_ui.value.tabs>>,
      default: () => default_ui.value.tabs
    }
  })
  const ui = computed<Partial<typeof default_ui.value.tabs>>(() => defu({}, props.ui, default_ui.value.tabs))

    const itemRefs = ref<HTMLElement[]>([])
    const markerRef = ref<HTMLElement>() as any

    // Methods

    function onChange (index:number) {
      // @ts-ignore
      const tab = itemRefs.value[index]?.$el
      if (!tab) {
        return
      }

      markerRef.value.style.top = `${tab.offsetTop}px`
      markerRef.value.style.left = `${tab.offsetLeft}px`
      markerRef.value.style.width = `${tab.offsetWidth}px`
      markerRef.value.style.height = `${tab.offsetHeight}px`
    }

    onMounted(() => onChange(props.defaultIndex))
</script>

<template>
  <HTabGroup :vertical="orientation === 'vertical'" :default-index="defaultIndex" as="div" :class="ui.wrapper" @change="onChange">
    <HTabList
      :class="[ui?.list?.base, ui?.list?.background, ui?.list?.rounded, ui?.list?.shadow, ui?.list?.padding, ui?.list?.width, orientation === 'horizontal' && ui?.list?.height, orientation === 'horizontal' && 'inline-grid items-center']"
      :style="[orientation === 'horizontal' && `grid-template-columns: repeat(${items.length}, minmax(0, 1fr))`]"
    >
      <div ref="markerRef" :class="ui?.list?.marker.wrapper">
        <div :class="[ui?.list?.marker.base, ui?.list?.marker.background, ui?.list?.marker.rounded, ui?.list?.marker.shadow]" />
      </div>

      <HTab
        v-for="(item, index) of items"
        :key="index"
        ref="itemRefs"
        v-slot="{ selected, disabled }"
        :disabled="item.disabled"
        as="template"
      >
        <button :class="[ui?.list?.tab.base, ui?.list?.tab.background, ui?.list?.tab.height, ui?.list?.tab.padding, ui?.list?.tab.size, ui?.list?.tab.font, ui?.list?.tab.rounded, ui?.list?.tab.shadow, selected ? ui?.list?.tab.active : ui?.list?.tab.inactive]">
          <slot :item="item" :index="index" :selected="selected" :disabled="disabled">
            {{ item.label }}
          </slot>
        </button>
      </HTab>
    </HTabList>

    <HTabPanels :class="ui.container">
      <HTabPanel
        v-for="(item, index) of items"
        :key="index"
        v-slot="{ selected }"
        :class="ui.base"
      >
        <slot :name="item.slot || 'item'" :item="item" :index="index" :selected="selected">
          {{ item.content }}
        </slot>
      </HTabPanel>
    </HTabPanels>
  </HTabGroup>
</template>

<style scoped>

</style>
