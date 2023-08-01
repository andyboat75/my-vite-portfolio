<script setup lang="ts">
import CyButton from '../../../components/CyButton.vue';
</script>

<template>
  <div class="grid grid-flow-row lg:grid-cols-2 lg:grid-flow-col gap-12 lg:gap-4">
    <div class="gap-5 flex flex-col justify-center">
      <div class="text-center lg:text-start space-y-6">
        <span class=" space-y-4">
          <h1 class="text-5xl xl:text-6xl">Hello, I'm Andrews,</h1>
          <h2 class="text-3xl xl:text-4xl">
            Cybersecurity Professional & <br /> Web developer
          </h2>
        </span>
        <p class="lg:w-10/12">I love what I do and enjoy solving your problems.</p>
      </div>
      <div class="space-x-4 py-4 flex justify-center lg:justify-start">
        <CyButton label="GET IN TOUCH" size="md"/>
        <CyButton label="VIEW ALL WORKS" variant="solid" color="gray" size="md"/>
      </div>
    </div>
    <div class="flex justify-center">
      <img src="../../../assets/images/andrews.jpg" alt="Andrews Boateng Okyere" class=" w-10/12 lg:w-fit rounded-full aspect-square">
    </div>
  </div>
</template>

<style scoped>
</style>
