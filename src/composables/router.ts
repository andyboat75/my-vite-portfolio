import {createRouter, createWebHistory} from 'vue-router'
import Homepage from "../pages/Homepage.vue"
import Cybersecurity from "../pages/Cybersecurity.vue"
import WebDevDes from "../pages/WebDevDes.vue"
const routes = [
  {path: '/', component:Homepage},
  {path:'/cybersecurity', component:Cybersecurity},
  {path:'/website-dev', component:WebDevDes}
]

const router = createRouter({
  history:createWebHistory(),
  routes:routes
})

export default router
