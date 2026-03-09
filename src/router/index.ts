import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksView from '../views/WorksView.vue'
import NewsView from '../views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/works', component: WorksView },
    { path: '/news', component: NewsView },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 常に一番上 (x:0, y:0) にスクロールさせる
    return { top: 0 }
  },
})

export default router
