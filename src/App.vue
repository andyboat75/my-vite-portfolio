<script setup lang="ts">
import CyHeader from "./template/CyHeader.vue"
import CyFooter from "./template/CyFooter.vue"
</script>

<template>
  <CyHeader />
  <slot />
  <CyFooter />
</template>

<style scoped>

</style>
