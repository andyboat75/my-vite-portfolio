<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { PropType } from 'vue'
import { defu } from 'defu'
import { classNames } from '../composables/useCyUtilities'
import {ui as default_ui} from "../config"
import {Dict} from "../types/index"
import { Icon } from "@iconify/vue"

const props = defineProps({
    type: {
      type: String,
      default: 'button'
    },
    block: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    padded: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: () => default_ui.value.button.default.size,
      validator (value: string) {
        return Object.keys(default_ui.value.button.size).includes(value)
      }
    },
    color: {
      type: String,
      default: () => default_ui.value.button.default.color,
    },
    variant: {
      type: String,
      default: () => default_ui.value.button.default.variant,
      validator (value: string) {
        return [
          ...Object.keys(default_ui.value.button.variant),
          ...Object.values(default_ui.value.button.color).flatMap(value => Object.keys(value))
        ].includes(value)
      }
    },
    icon: {
      type: String,
      default: null
    },
    loadingIcon: {
      type: String,
      default: () => default_ui.value.button.default.loadingIcon
    },
    leadingIcon: {
      type: String,
      default: null
    },
    trailingIcon: {
      type: String,
      default: null
    },
    trailing: {
      type: Boolean,
      default: false
    },
    leading: {
      type: Boolean,
      default: false
    },
    square: {
      type: Boolean,
      default: false
    },
    truncate: {
      type: Boolean,
      default: false
    },
    ui: {
      type: Object as PropType<Partial<typeof default_ui.value.button>>,
      default: () => default_ui.value.button
    }
  })
  const slots = useSlots()
  const ui = computed<Partial<typeof default_ui.value.button>>(() => defu({}, props.ui, default_ui.value.button)) as Dict

    const isLeading = computed(() => {
      return (props.icon && props.leading) || (props.icon && !props.trailing) || (props.loading && !props.trailing) || props.leadingIcon
    })

    const isTrailing = computed(() => {
      return (props.icon && props.trailing) || (props.loading && props.trailing) || props.trailingIcon
    })

    const isSquare = computed(() => props.square || (!slots.default && !props.label))

    const buttonClass = computed(() => {
      const variant = ui.value.color?.[props.color as string]?.[props.variant as string] || ui?.value?.variant[props.variant]

      return classNames(
        ui.value.base,
        ui.value.font,
        ui.value.rounded,
        ui.value.size[props.size],
        ui.value.gap[props.size],
        props.padded && ui.value[isSquare.value ? 'square' : 'padding'][props.size],
        variant?.replaceAll('{color}', props.color),
        props.block ? 'w-full flex justify-center items-center' : 'inline-flex items-center'
      )
    })

    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon
      }

      return props.leadingIcon || props.icon
    })

    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon
      }

      return props.trailingIcon || props.icon
    })

    const leadingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        ui.value.icon.size[props.size],
        props.loading && 'animate-spin'
      )
    })

    const trailingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        ui.value.icon.size[props.size],
        props.loading && !isLeading.value && 'animate-spin'
      )
    })
</script>

<template>
  <component :is="type" :disabled="disabled || loading" :class="buttonClass" class="cursor-pointer">
    <slot name="leading" :disabled="disabled" :loading="loading">
      <Icon v-if="isLeading && leadingIconName" :icon="leadingIconName" :class="leadingIconClass" aria-hidden="true" />
    </slot>

    <slot>
      <span v-if="label" :class="[truncate ? 'text-left break-all line-clamp-1' : '']">
        {{ label }}
      </span>
    </slot>

    <slot name="trailing" :disabled="disabled" :loading="loading">
      <Icon v-if="isTrailing && trailingIconName" :icon="trailingIconName" :class="trailingIconClass" aria-hidden="true" />
    </slot>
  </component>
</template>

<style scoped>

</style>
