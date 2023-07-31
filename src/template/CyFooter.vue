<script setup lang="ts">
const start = 2023
const now = new Date().getFullYear()
</script>

<template>
<div class="text-sm w-full flex justify-center p-4">
  Copyright &copy; {{now == start ? start : `${start}-${now}`}}
  </div>
</template>

<style scoped>

</style>
