// src/main.ts のイメージ
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // ←これが必要

const app = createApp(App)
app.use(router) // ←これが必要
app.mount('#app')
