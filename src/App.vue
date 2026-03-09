<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="global-header">
      <div class="header-inner">
        <div class="logo">Ports<span>.</span></div>
        <nav class="nav-links">
          <RouterLink to="/" class="nav-btn">TOP</RouterLink>
          <RouterLink to="/about" class="nav-btn">ABOUT</RouterLink>
          <RouterLink to="/works" class="nav-btn">WORKS</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>
<style>
/* 1. フォント読み込み（1回書けばOK） */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Noto+Sans+JP:wght@400;700&display=swap');

/* 2. サイト全体の共通ルール（scopedを外すと、全ページに届く） */
body {
  margin: 0;
  font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
  color: #446;
  background: #f0f4f8;
}

/* 3. 各ページで使い回す「セクション」のデザイン */
.section {
  padding: 100px 0;
  display: flex;
  justify-content: center;
}
.section-title-en {
  font-size: 80px;
  font-weight: 900;
  color: rgba(68, 68, 102, 0.05);
  position: absolute;
  margin-top: -60px;
  z-index: 0;
}
.section-title-en span {
  color: #00aeef;
  opacity: 0.5;
}

/* 4. ヘッダーのデザイン（固定） */
.global-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 174, 239, 0.1);
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}
.logo {
  font-size: 24px;
  font-weight: 900;
  color: #446;
}
.logo span {
  color: #00aeef;
}
.nav-links {
  display: flex;
  gap: 30px;
}
.nav-btn {
  text-decoration: none;
  color: #446;
  font-weight: 700;
  position: relative;
}
.router-link-active {
  color: #00aeef !important;
}
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #00aeef;
}
</style>
