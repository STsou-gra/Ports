import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorksView from '../views/WorksView.vue'
import LogView from '../views/LogView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/works', component: WorksView },
    { path: '/log', component: LogView },
    {
      path: '/works/:id', // :id の部分が数字に変わる
      name: 'work-detail',
      component: () => import('../views/DetailView.vue'),
    },
    {
      path: '/log/:id',
      name: 'log-detail',
      component: () => import('../views/DetailView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 常に一番上 (x:0, y:0) にスクロールさせる
    return { top: 0 }
  },
})

export default router
