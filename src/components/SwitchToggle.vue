<script setup lang="ts">
import { Switch as HSwitch } from "@headlessui/vue"
import {PropType, computed} from "vue"
import { Icon } from "@iconify/vue"
import {ui as default_ui} from "../config"
import {classNames} from "../composables/useCyUtilities"
import {defu} from "defu"

type UIType = PropType<Partial<typeof default_ui.value.toggle>>
const props = defineProps({
  modelValue:{
    type:Boolean,
    default:false
  },
  name: {
    type: String,
    default: null
  },
  onIcon: {
    type: String,
    default: null
  },
  offIcon: {
    type: String,
    default: null
  },
  color: {
    type: String,
    default: 'purple'
  },
  disabled:{
    type:Boolean,
    default:false
  },
  ui:{
    type:Object as UIType,
    default: () => default_ui.value.toggle
  }
})

const emit = defineEmits(["update:modelvalue"])

const ui = computed<Partial<typeof default_ui.value.toggle>>( () => defu({}, props.ui, default_ui.value.toggle))


const active = computed({
  get(){
    return props.modelValue
  },
  set(value){
    return emit("update:modelvalue", value)
  }
})

const switchClass = computed(() => {
  return classNames(
    ui.value.base,
    ui.value.rounded,
    ui.value.ring?.replaceAll('{color}', props.color),
    (active.value ? ui.value.active : ui.value.inactive)?.replaceAll('{color}', props.color)
    
  )
})

const onIconClass = computed(() => {
  return classNames(
    ui.value.icon?.on.replaceAll('{color}', props.color)
  )
})

const offIconClass = computed(() => {
  return classNames(
    ui.value.icon?.off.replaceAll('{color}', props.color)
  )
})
</script>

<template>
  <HSwitch
  v-model="active"
  :class="switchClass"
  :disabled="disabled"
  :name="name"
  >
    <span :class="[active ? ui?.container?.active : ui?.container?.inactive, ui?.container?.base]">
      <span v-if="onIcon" :class="[active ? ui?.icon?.active : ui?.icon?.inactive, ui?.icon?.base]" aria-hidden="true">
        <Icon :icon="onIcon" :class="onIconClass" />
      </span>
      
      <span v-if="offIcon" :class="[active ? ui?.icon?.inactive : ui?.icon?.active, ui?.icon?.base]" aria-hidden="true">
        <Icon :icon="offIcon" :class="offIconClass" />
      </span>
  </span>
  </HSwitch>
</template>

<style scoped>
</style>
