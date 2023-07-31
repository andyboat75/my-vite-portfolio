<script setup lang="ts">
import { computed } from 'vue'
import type { WritableComputedRef, PropType } from 'vue'
import { defu } from 'defu'
import { Dialog as HDialog, DialogPanel as HDialogPanel, TransitionRoot, TransitionChild } from '@headlessui/vue'
import { ui as default_ui } from "../config"


const props = defineProps({
  modelValue: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  appear: {
    type: Boolean,
    default: false
  },
  side: {
    type: String,
    default: 'right',
    validator: (value: string) => ['left', 'right'].includes(value)
  },
  overlay: {
    type: Boolean,
    default: true
  },
  transition: {
    type: Boolean,
    default: true
  },
  preventClose: {
    type: Boolean,
    default: false
  },
  ui: {
    type: Object as PropType<Partial<typeof default_ui.value.slideover>>,
    default: () => default_ui.value.slideover
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const ui = computed<Partial<typeof default_ui.value.slideover>>(() => defu({}, props.ui, default_ui.value.slideover))

const isOpen: WritableComputedRef<boolean> = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})

const transitionClass = computed(() => {
  if (!props.transition) {
    return {}
  }

  return {
    ...ui.value.transition,
    enterFrom: props.side === 'left' ? '-translate-x-full' : 'translate-x-full',
    enterTo: 'translate-x-0',
    leaveFrom: 'translate-x-0',
    leaveTo: props.side === 'left' ? '-translate-x-full' : 'translate-x-full'
  }
})
function close(value: boolean) {
  isOpen.value = value
  emit('close')
}
</script>

<template>
  <TransitionRoot as="template" :appear="appear" :show="isOpen">
    <HDialog :class="[ui.wrapper, { 'justify-end': side === 'right' }]" @close="(e) => !preventClose && close(e)">
      <TransitionChild v-if="overlay" as="template" :appear="appear" v-bind="ui?.overlay?.transition">
        <div :class="[ui?.overlay?.base, ui.overlay?.background]" />
      </TransitionChild>

      <TransitionChild as="template" :appear="appear" v-bind="transitionClass">
        <HDialogPanel :class="[ui.base, ui.width, ui.background, ui.ring, ui.padding]">
          <slot />
        </HDialogPanel>
      </TransitionChild>
    </HDialog>
  </TransitionRoot>
</template>

<style scoped>
</style>
