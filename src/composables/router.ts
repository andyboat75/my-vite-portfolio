import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "../pages/Homepage/index.vue"
import Cybersecurity from "../pages/Cybersecurity/index.vue"
import WebDevDes from "../pages/WebDevDes/index.vue"
import { ref } from 'vue'

const home_dir = ref("/")


if(window.location.origin.includes('github')){
  home_dir.value = '/my-vite-portfolio/'
}

const routes = [
  {path: `${home_dir.value}`, component:Homepage},
  {path:`${home_dir.value}cybersecurity`, component:Cybersecurity},
  {path:`${home_dir.value}/website-dev`, component:WebDevDes}
]

const router = createRouter({
  history:createWebHistory(),
  routes:routes
})

export default router
