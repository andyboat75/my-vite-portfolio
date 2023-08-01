<script setup lang="ts">
import {ui as default_ui} from "../../config"
import {PropType} from 'vue'
type UIType = PropType<Partial<typeof default_ui.value.container>>
defineProps({
  as:{
    type:String,
    default:'div'
  },
  ui:{
    type:Object as UIType,
    default: ()=>default_ui.value.container
  }
})

</script>

<template>
  <component :is="as" :class="[ui.base, ui.padding, ui.constrained]">
    <slot />
  </component>
</template>

<style scoped>

</style>
