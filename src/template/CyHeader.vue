<script setup lang="ts">
import { Icon } from '@iconify/vue/dist/iconify.js';
import SwitchToggle from '../components/SwitchToggle.vue';
import { IHeaderMenuItem } from "../types/index"
import { useDark, useToggle } from '@vueuse/core'
import { computed, ref } from 'vue'
import cybandy_logo_white from "../assets/cybandy.svg"
import cybandy_logo_dark from "../assets/cybandy-dark.svg"
import SlideOver from '../components/SlideOver.vue';


// toggle dark and off
const isDark = useDark()
const toggleDark = useToggle(isDark)

const cybandy_logo = computed(() => {
  return isDark.value ? cybandy_logo_dark : cybandy_logo_white
})
const menuItems = [
  {
    label: 'Home',
    icon: "heroicons:home-20-solid",
    to: "./"
  },
  {
    label: 'Cybersecurity',
    icon: "",
    to: "./cybersecurity"
  },
  {
    label: 'Web Dev',
    icon: "",
    to: "./website-dev"
  }
] as IHeaderMenuItem[]


const social_icons = [
  { icon: "mdi:github", to: "https://github.com/andyboat75" },
  { icon: "ri:linkedin-fill", to: "https://www.linkedin.com/in/andrews-okyere/" }
]
const isOpen = ref(false)
</script>
<template>
  <div class="flex items-center justify-between min-h-[80px]">
    <div>
      <RouterLink to="/" class="flex items-center gap-1">
        <img :src="cybandy_logo" alt="" class=" w-8 h-8">
        <span class=" font-Audiowide hidden sm:inline-block ">Cybandy</span>
      </RouterLink>

    </div>
    <div class=" items-center gap-5 hidden sm:flex">
      <nav>
        <ul class="flex gap-1 items-center">
          <li v-for="item of menuItems" class=" ">
            <RouterLink :to="item.to" class="flex items-center gap-1 cursor-pointer">
              <span>
                <Icon :icon="item.icon" class="dark:hover:text-orange-500" />
              </span>
              <span>{{ item.label }}</span>
            </RouterLink>
          </li>
        </ul>


      </nav>
      <div class="flex items-center gap-2">
        <SwitchToggle on-icon="material-symbols:dark-mode" off-icon="material-symbols:sunny-rounded" name="toggleDarkmode"
          v-model="isDark" @click="() => toggleDark()" />
        <a v-for="ic of social_icons" :href="ic.to" target="_blank">
          <Icon :icon="ic.icon" class="w-5 h-5 cursor-pointer" />
        </a>

      </div>
    </div>
    <div class="sm:hidden">
      <Icon @click="() => isOpen = true" icon="heroicons:bars-3-20-solid" class="w-5 h-5 cursor-pointer" />
      <SlideOver v-model="isOpen">
        <div class=" items-center flex flex-col gap-10 p-5">
          <div class="flex items-start gap-4">
            <SwitchToggle on-icon="material-symbols:dark-mode" off-icon="material-symbols:sunny-rounded"
              name="toggleDarkmode" v-model="isDark" @click="() => toggleDark()" />
            <a v-for="ic of social_icons" :href="ic.to" target="_blank">
              <Icon :icon="ic.icon" class="w-5 h-5 cursor-pointer" />
            </a>

          </div>
          <nav>
            <ul class="flex flex-col gap-3 items-baseline">
              <li v-for="item of menuItems" class=" ">
                <RouterLink :to="item.to" class="flex items-center gap-1 cursor-pointer">
                  <span>
                    <Icon :icon="item.icon" class="dark:hover:text-orange-500" />
                  </span>
                  <span>{{ item.label }}</span>
                </RouterLink>
              </li>
            </ul>


          </nav>
          
        </div>
      </SlideOver>
    </div>
  </div>
</template>
