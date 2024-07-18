import {createRouter, createWebHistory} from "vue-router";
import HomePage from "@/pages/homePage.vue";
import Upload from "@/pages/upload.vue";
import SideBar from "@/pages/sideBar.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/media-upload',
      name: 'MediaUpload',
      component: Upload
    },
    {
      path: '/sidebar',
      name: 'Sidebar',
      component:SideBar
    }
  ]
})

export default router
