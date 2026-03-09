<script setup lang="ts">
// 1. データの型定義
interface Project {
  title: string
  tech: string
  desc: string
}

interface News {
  date: string
  text: string
}

// 2. 実績データ
const myName = 'Your Name / ユーザー名'
const profileText =
  '大学2年生。ゲームプログラマーを目指してC++でのエンジン開発やUnity、Blenderを学習中。ハッカソン等でのチーム開発も経験しています。'

const newsList: News[] = [
  { date: '2026.02.17', text: '2週間のハッカソンに参加しました' },
  { date: '2026.02.13', text: '自作ゲームエンジン(C++)のアップデート' },
]

const projectList: Project[] = [
  { title: 'Original Game Engine', tech: 'C++ / DirectX', desc: 'フルスクラッチでのエンジン開発' },
  { title: '3D Character Model', tech: 'Blender', desc: 'オリジナルキャラのモデリング' },
  { title: 'Portfolio Site', tech: 'Vue.js / TS', desc: 'このサイトの制作' },
]
</script>

<template>
  <div class="home-view">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-logo">Ports<span>.</span></h1>
        <p class="hero-catch">Creating games from the ground up.</p>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <h2 class="section-title-en">ABOUT<span>.</span></h2>
        <div class="about-card">
          <div class="profile-info">
            <h3>{{ myName }}</h3>
            <p>{{ profileText }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <h2 class="section-title-en">WORKS<span>.</span></h2>
        <div class="works-grid">
          <div v-for="work in projectList" :key="work.title" class="work-card">
            <div class="work-thumb">NO IMAGE</div>
            <div class="work-info">
              <span class="work-tech">{{ work.tech }}</span>
              <h4>{{ work.title }}</h4>
              <p>{{ work.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="section-inner">
        <h2 class="section-title-en">NEWS<span>.</span></h2>
        <ul class="main-news-list">
          <li v-for="news in newsList" :key="news.date" class="main-news-item">
            <span class="date">{{ news.date }}</span>
            <span class="text">{{ news.text }}</span>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* HomeView 固有のスタイルだけを残す */

.hero-section {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #b3fffd 0%, #fde5f5 100%);
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
  margin-top: -65px; /* ヘッダーの高さ分、上に食い込ませる（プロセカ風） */
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

.about-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

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
</style>
