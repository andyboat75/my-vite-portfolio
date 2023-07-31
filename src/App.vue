<script setup lang="ts">
import CyContainer from "./components/Layouts/CyContainer.vue";
import CyHeader from "./template/CyHeader.vue"
import CyFooter from "./template/CyFooter.vue"
// import { computed } from 'vue'
// import { useFavicon, usePreferredDark } from '@vueuse/core'

// const isDark = usePreferredDark()
// const favicon = computed(() => isDark.value ? '/cybandy.svg' : '/vue.svg')

// useFavicon(favicon)
</script>

<template>
  <CyContainer>
    <CyHeader />
  <RouterView />
  <CyFooter />
  </CyContainer>
</template>

<style scoped>

</style>
