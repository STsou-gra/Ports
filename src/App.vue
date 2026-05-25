<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app-shell">
    <header class="global-header">
      <div class="header-inner">
        <div class="logo"><span>.</span>Ports</div>
        <nav class="nav-links">
          <RouterLink to="/" class="nav-btn">TOP</RouterLink>
          <RouterLink to="/about" class="nav-btn">ABOUT</RouterLink>
          <RouterLink to="/works" class="nav-btn">WORKS</RouterLink>
          <RouterLink to="/log" class="nav-btn">LOG</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
    <footer class="global-footer">
      <div class="footer-inner">
        <div class="footer-logo"><span>.</span>Ports</div>

        <div class="social-links">
          <a href="https://twitter.com/Nx8eJTVynaQ0LFz" target="_blank" class="social-btn x-link">
            <span class="btn-text">X</span>
          </a>
          <a href="https://github.com/STsou-gra" target="_blank" class="social-btn github-link">
            <span class="btn-text">GitHub</span>
          </a>
        </div>

        <p class="copyright">&copy; 2026 .Ports All Rights Reserved.</p>
      </div>
    </footer>
  </div>
</template>
<style>
/* 1. フォント読み込み（1回書けばOK） */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Noto+Sans+JP:wght@400;700&display=swap');

/* 2. サイト全体の共通ルール（scopedを外すと、全ページに届く） */
body {
  margin: 0;
  font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
  color: #f0f4f8;
  background: #272727;
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
  color: rgba(220, 220, 220, 0.48);
  position: absolute;
  margin-top: -60px;
  z-index: 0;
}
.section-title-en span {
  color: #6bcb9b;
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

/* ロゴのデザイン*/
.logo {
  font-size: 24px;
  font-weight: 900;
  color: #b6b6b6;
}
.logo span {
  color: #6bcb9b;
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
  color: #6bcb9b !important;
}
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #6bcb9b;
}
/* --- フッターのデザイン --- */
.global-footer {
  background: #000000; /* フッターは完全に黒くして、ヘッダーと差別化 */
  color: white;
  padding: 60px 0 30px;
  margin-top: 100px; /* 前のコンテンツとの間隔 */
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.footer-logo {
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0.05em;
}
.footer-logo span {
  color: #6bcb9b;
}

.social-links {
  display: flex;
  gap: 20px;
}

.social-btn {
  text-decoration: none;
  color: white;
  width: 120px;
  height: 45px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 14px;
  transition: all 0.3s;
  background: rgba(192, 192, 192, 0.63);
}

/* ホバー時にに光らせる */
.social-btn:hover {
  background: #6bcb9b;
  border-color: #6bcb9b;
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 174, 239, 0.4);
}

.copyright {
  font-size: 12px;
  opacity: 0.5;
  margin-top: 20px;
  letter-spacing: 0.1em;
}
</style>
