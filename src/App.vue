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

/* 色の設定（サイトの色はここで一括管理。各ページでは var(--color-xxx) で使う） */
:root {
  /* メインの色 */
  --color-accent: #6bcb9b; /* アクセントの緑（ロゴの点・タグ・ボタンなど） */
  --color-accent-rgb: 107, 203, 155; /* ↑と同じ色（影などの半透明用） */
  --color-ink: #4a6047; /* 濃い緑（明るい背景の文字・ボタン・ヒーローのグラデーション） */
  --color-deep: #303b35; /* さらに濃い緑（ABOUTのカード・木の幹） */

  /* 背景と文字 */
  --color-bg: #272727; /* サイト全体の背景 */
  --color-text: #f0f4f8; /* サイト全体の文字 */
  --color-muted: #889; /* 日付などの控えめな文字 */
  --color-heading-dark: rgb(42, 42, 42); /* 記事詳細のタイトル */
  --color-light: #eee; /* 記事詳細の背景など */
  --color-logo: #b6b6b6; /* ヘッダーのロゴ */
  --color-section-title: rgba(220, 220, 220, 0.48); /* 背景の大きな英字見出し */
  --color-header-bg: rgba(255, 255, 255, 0.8); /* ヘッダーの背景 */
  --color-log-bg: rgba(255, 255, 255, 0.7); /* トップのLOG一覧の背景 */
  --color-social-bg: rgba(192, 192, 192, 0.63); /* フッターのSNSボタン */

  /* 画像がないときの仮表示 */
  --color-placeholder-bg: #ddd;
  --color-placeholder-text: #bbb;
  --color-thumb-bg: #cbd5e1; /* WORKS一覧のサムネイル */

  /* その他 */
  --color-banner-from: rgb(28, 34, 31); /* LINKSバナーのグラデーション（始点） */
  --color-banner-to: rgb(85, 119, 86); /* LINKSバナーのグラデーション（終点） */
  --color-code-bg: #2d2d2d; /* コードブロックの背景 */
  --color-github: #333; /* GitHubボタン */
}

/* 2. サイト全体の共通ルール（scopedを外すと、全ページに届く） */
body {
  margin: 0;
  font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
  color: var(--color-text);
  background: var(--color-bg);
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
  color: var(--color-section-title);
  position: absolute;
  margin-top: -60px;
  z-index: 0;
}
.section-title-en span {
  color: var(--color-accent);
  opacity: 0.5;
}

/* 4. ヘッダーのデザイン（固定） */
.global-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: var(--color-header-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(var(--color-accent-rgb), 0.1);
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
  color: var(--color-logo);
}
.logo span {
  color: var(--color-accent);
}
.nav-links {
  display: flex;
  gap: 30px;
}
.nav-btn {
  text-decoration: none;
  color: var(--color-ink);
  font-weight: 700;
  position: relative;
}
.router-link-active {
  color: var(--color-accent) !important;
}
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-accent);
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
  color: var(--color-accent);
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
  background: var(--color-social-bg);
}

/* ホバー時にに光らせる */
.social-btn:hover {
  background: var(--color-accent);
  border-color: var(--color-accent);
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(var(--color-accent-rgb), 0.4);
}

.copyright {
  font-size: 12px;
  opacity: 0.5;
  margin-top: 20px;
  letter-spacing: 0.1em;
}
</style>
