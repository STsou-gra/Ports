<template>
  <div class="about-detail-page">
    <section class="section">
      <h2 class="section-title-en">DETAILED ABOUT<span>.</span></h2>
      <div class="detail-card">
        <h3>自己紹介（詳細）</h3>
        <p>ここでハッカソンの経験や、C++での苦労話、Blenderでのこだわりなどを詳しく書けます。</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Noto+Sans+JP:wght@400;700&display=swap');

/* サイト全体に適用 */
:deep(body),
:deep(#app) {
  font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
}
.main-page {
  font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
  color: #446;
  background: #f0f4f8;
}

/* 各セクションの共通設定 */
.section {
  padding: 100px 0;
  display: flex;
  justify-content: center;
}
.section-inner {
  width: 90%;
  max-width: 1200px;
}
.section-title-en {
  font-size: 80px;
  font-weight: 900;
  color: rgba(68, 68, 102, 0.05); /* 背景にデカデカと出すプロセカ風演出 */
  position: absolute;
  margin-top: -60px;
  z-index: 0;
}
.section-title-en span {
  color: #00aeef;
  opacity: 0.5;
}

/* Hero（最初の画面） */
.hero-section {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #b3fffd 0%, #fde5f5 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%); /* 下を斜めにする演出 */
}
.hero-logo {
  font-size: 80px;
  font-weight: 900;
  letter-spacing: -2px;
}
.hero-logo span {
  color: #00aeef;
}
.hero-catch {
  font-weight: 700;
  letter-spacing: 0.2em;
  opacity: 0.7;
}

/* About */
.about-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

/* Works Grid */
.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 1;
}
.work-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s;
}
.work-card:hover {
  transform: translateY(-10px);
}
.work-thumb {
  height: 200px;
  background: #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: #bbb;
}
.work-info {
  padding: 20px;
}
.work-tech {
  font-size: 12px;
  background: #00aeef;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
}

/* News */
.main-news-list {
  list-style: none;
  padding: 0;
  position: relative;
  z-index: 1;
}
.main-news-item {
  background: rgba(255, 255, 255, 0.6);
  margin-bottom: 10px;
  padding: 15px 30px;
  border-radius: 8px;
  display: flex;
  gap: 20px;
}
.main-news-item .date {
  font-weight: 700;
  color: #889;
}
/* ヘッダー全体の設定 */
.global-header {
  position: sticky; /* スクロールしても上についてくる */
  top: 0;
  z-index: 1000;
  width: 100%;
  background: rgba(255, 255, 255, 0.8); /* 少し透ける白 */
  backdrop-filter: blur(10px); /* 後ろをぼかすプロセカ風演出 */
  border-bottom: 1px solid rgba(0, 174, 239, 0.1);
}

.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; /* ロゴとメニューを左右に振る */
  align-items: center;
  padding: 15px 20px;
}

.logo {
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 0.05em;
}
.logo span {
  color: #00aeef;
}

/* メニューの横並び設定 */
.nav-links {
  display: flex;
  gap: 30px; /* ボタン同士の間隔 */
}

.nav-btn {
  text-decoration: none;
  color: #446;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 0.1em;
  position: relative;
  transition: color 0.3s;
}

/* ホバー時に色を変える */
.nav-btn:hover {
  color: #00aeef;
}

/* 今いるページのボタンの下に青い線を出す（Vue Routerの自動機能） */
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
