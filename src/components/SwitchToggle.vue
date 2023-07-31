<script setup lang="ts">
import { Switch as HSwitch } from "@headlessui/vue"
import {PropType, ref, watch} from "vue"
import { Icon } from "@iconify/vue"
import ui from "../config"
defineProps({
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
    default: null
  },
  disabled:{
    type:Boolean,
    default:false
  },
  ui:{
    type:Object as PropType<Partial<typeof ui.ui.toggle>>,
    default: () => ui.ui.toggle
  }
})

const emit = defineEmits(["update:modelvalue"])


const defValue = ref(false)

watch(defValue,()=>{
  if(defValue.value){
    emit("update:modelvalue", defValue.value)
  }
})
</script>

<template>
  <HSwitch>
    <span class="relative inline-flex h-5 w-9 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none">
      <span v-if="onIcon" aria-hidden="true">
        <Icon :icon="onIcon" />
      </span>
      
      <span v-if="offIcon" aria-hidden="true">
        <Icon :icon="offIcon" />
      </span>
  </span>
  </HSwitch>
</template>

<style scoped>
</style>
