<script setup lang="ts">
import { allWorks } from '@/data/works' // 作品データをインポート
import { allNews } from '@/data/news' // ニュースデータをインポート

// 1. WORKS用：看板作品として最初の3〜6件を表示
const homeWorks = allWorks.slice(0, 6)

// 2. NEWS用：最新の活動履歴を抽出（日付順に並んでいる前提）
const newsLog = allNews.slice(0, 6)

// ユーザー情報
const myName = 'Your Name / ユーザー名'
const simpleProfile =
  'ゲームプログラマー志望の大学2年生。技術の根幹を支える開発に情熱を注いでいます。'
</script>

<template>
  <div class="home-view">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-logo"><span>.</span>Ports</h1>
        <p class="hero-catch">Creating games from the ground up.</p>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <h2 class="section-title-en">ABOUT<span>.</span></h2>
        <div class="about-card-simple">
          <div class="profile-info">
            <h3>{{ myName }}</h3>
            <p class="simple-text">{{ simpleProfile }}</p>
            <RouterLink to="/about" class="more-btn">MORE VIEW</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <h2 class="section-title-en">WORKS<span>.</span></h2>
        <div class="works-grid-home">
          <RouterLink
            v-for="work in homeWorks"
            :key="work.id"
            :to="'/works/' + work.id"
            class="work-card"
          >
            <div class="work-thumb">{{ work.thumb }}</div>
            <div class="work-info">
              <span class="work-tech">{{ work.tech }}</span>
              <h4>{{ work.title }}</h4>
              <p>{{ work.desc }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <h2 class="section-title-en">NEWS<span>.</span></h2>
        <div class="news-log-grid">
          <RouterLink
            v-for="news in newsLog"
            :key="news.id"
            :to="'/news/' + news.id"
            class="news-log-item"
          >
            <div class="news-meta">
              <span class="news-date">{{ news.date }}</span>
              <span class="news-tag">{{ news.tag }}</span>
            </div>
            <p class="news-content">{{ news.title }}</p>
          </RouterLink>
        </div>
      </div>
    </section>
    <section class="section mini-banner-section">
      <div class="section-inner">
        <h2 class="section-title-en">LINKS<span>.</span></h2>

        <div class="mini-banner-grid">
          <a href="https://example.com/1" target="_blank" class="mini-banner">
            <div class="banner-img-placeholder">ORGANIZATION</div>
            <div class="banner-hover-effect"></div>
          </a>

          <a href="https://github.com/" target="_blank" class="mini-banner">
            <div class="banner-img-placeholder">GITHUB</div>
            <div class="banner-hover-effect"></div>
          </a>

          <a href="https://twitter.com/" target="_blank" class="mini-banner">
            <div class="banner-img-placeholder">X / TWITTER</div>
            <div class="banner-hover-effect"></div>
          </a>

          <a href="https://note.com/" target="_blank" class="mini-banner">
            <div class="banner-img-placeholder">BLOG</div>
            <div class="banner-hover-effect"></div>
          </a>

          <a href="https://example.com/5" target="_blank" class="mini-banner">
            <div class="banner-img-placeholder">SPECIAL</div>
            <div class="banner-hover-effect"></div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* RouterLinkにすると青色や下線がつく場合があるのでリセット */
.work-card,
.news-log-item {
  text-decoration: none;
  color: inherit;
  display: block;
}
/* レイアウト共通設定 */
.section-inner {
  max-width: 1100px;
  margin: 0 auto;
  width: 90%;
}

/* --- ABOUT --- */
.about-card-simple {
  background: white;
  padding: 30px 40px;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  border-left: 8px solid #00aeef;
}
.simple-text {
  font-size: 16px;
  margin: 10px 0 20px;
  line-height: 1.6;
}
.more-btn {
  display: inline-block;
  padding: 10px 30px;
  background: #446;
  color: white;
  text-decoration: none;
  font-weight: 900;
  border-radius: 30px;
  font-size: 12px;
  transition: 0.3s;
}
.more-btn:hover {
  background: #00aeef;
  transform: translateX(5px);
}

/* --- WORKS (3列×2行) --- */
.works-grid-home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  position: relative;
  z-index: 1;
}
.work-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.03);
}
.work-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 174, 239, 0.1);
}
.work-thumb {
  height: 160px;
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
  font-size: 10px;
  background: #00aeef;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
}
.work-info h4 {
  margin: 10px 0 5px;
  font-size: 18px;
}
.work-info p {
  font-size: 13px;
  opacity: 0.7;
}

.center-btn-area {
  text-align: center;
  margin-top: 40px;
}
.outline-btn {
  display: inline-block;
  padding: 12px 40px;
  border: 2px solid #446;
  color: #446;
  text-decoration: none;
  font-weight: 900;
  border-radius: 4px;
  transition: 0.3s;
}
.outline-btn:hover {
  background: #446;
  color: white;
}

/* --- NEWS (2列リスト形式) --- */
.news-log-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  position: relative;
  z-index: 1;
}
.news-log-item {
  background: rgba(255, 255, 255, 0.7);
  padding: 15px 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid rgba(0, 174, 239, 0.1);
}
.news-meta {
  display: flex;
  gap: 15px;
  align-items: center;
}
.news-date {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  color: #889;
  font-size: 14px;
}
.news-tag {
  background: #00aeef;
  color: white;
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 3px;
  font-weight: 900;
}
.news-content {
  margin: 0;
  font-weight: 700;
  color: #446;
  font-size: 14px;
}

/* --- HERO --- */
.hero-section {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #b3fffd 0%, #fde5f5 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  margin-top: -65px;
}
.hero-logo {
  font-size: 80px;
  font-weight: 900;
  letter-spacing: -2px;
  margin: 0;
}
.hero-logo span {
  color: #00aeef;
}
.hero-catch {
  font-weight: 700;
  letter-spacing: 0.2em;
  opacity: 0.7;
  text-align: center;
}

/* レスポンシブ */
@media (max-width: 900px) {
  .works-grid-home,
  .news-log-grid {
    grid-template-columns: 1fr;
  }
}
/* --- MINI BANNER AREA --- */
.mini-banner-section {
  padding: 60px 0 120px;
}

.mini-banner-grid {
  display: grid;
  /* 横に5列。画面が狭いときは自動で折り返す */
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  position: relative;
  z-index: 1;
}

.mini-banner {
  display: block;
  position: relative;
  aspect-ratio: 240 / 80; /* ゲームサイトによくある横長バナーの比率 */
  background: #446;
  border-radius: 6px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.banner-img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 11px;
  letter-spacing: 0.1em;
  /* 本物の画像を入れる場合はここを background-image にします */
  background: linear-gradient(45deg, #446 0%, #557 100%);
}

/* ★ ホバー時の演出：少し浮き上がって、光が走る */
.mini-banner:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 174, 239, 0.3);
  border-color: #00aeef;
}

.banner-hover-effect {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-25deg);
  transition: 0.5s;
}

.mini-banner:hover .banner-hover-effect {
  left: 150%;
}
.hero-section {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: -65px;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);

  /* ★ 背景画像の設定 ★ */
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    /* 画像を少し暗くして文字を読みやすく */ url('@/assets/hero-bg.jpg'); /* assets内のファイル名と合わせる */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* パララックス効果 */
}

.hero-logo {
  font-size: clamp(48px, 12vw, 80px);
  font-weight: 900;
  letter-spacing: -2px;
  margin: 0;
  color: white;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.hero-logo span {
  color: #00aeef;
}

.hero-catch {
  color: white;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-align: center;
  text-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  margin-top: 10px;
}

/* モバイル対応：スマホでは2列か3列にする */
@media (max-width: 1000px) {
  .mini-banner-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .mini-banner-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
