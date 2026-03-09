<script setup lang="ts">
// 1. プロセカ流のデータ管理（TypeScriptの型定義）
interface Activity {
  id: number
  date: string
  category: 'EVENT' | 'DEV' | 'ART' | 'MUSIC'
  title: string
  link: string
}

// 2. あなたのこれまでの実績データ
const activities: Activity[] = [
  {
    id: 1,
    date: '2026.02.17',
    category: 'EVENT',
    title: '2週間のハッカソンに参加：GitHubでのチーム開発',
    link: 'https://github.com/',
  },
  {
    id: 2,
    date: '2026.02.13',
    category: 'DEV',
    title: 'C++自作ゲームエンジン開発とUnity学習',
    link: '#',
  },
  {
    id: 3,
    date: '2026.01.29',
    category: 'MUSIC',
    title: 'Logic Proによる楽曲制作：Vocaloid制作に挑戦',
    link: '#',
  },
  {
    id: 4,
    date: '2025.12.30',
    category: 'ART',
    title: 'Blenderを使用したオリジナルキャラクターの3Dモデリング',
    link: '#',
  },
]
</script>

<template>
  <div class="portfolio-site">
    <div class="bg-parallax"></div>

    <header class="header">
      <h1 class="logo">Ports<span>.</span></h1>
    </header>

    <main class="main-contents">
      <section class="news-section">
        <div class="section-header">
          <h2 class="title-en">NEWS</h2>
          <small class="title-jp">これまでの活動</small>
        </div>

        <ul class="news-list">
          <li v-for="item in activities" :key="item.id" class="news-item">
            <a :href="item.link" class="news-link">
              <div class="meta">
                <span class="date">{{ item.date }}</span>
                <span :class="['category', item.category]">{{ item.category }}</span>
              </div>
              <p class="activity-title">{{ item.title }}</p>
              <div class="arrow"></div>
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>

  <div class="project-list">
    <h1>制作実績一覧</h1>

    <div v-for="project in myProjects" :key="project.id" class="project-card">
      <h2>{{ project.title }}</h2>

      <p>
        使用言語:
        <span v-for="lang in project.languages" :key="lang"> [{{ lang }}] </span>
      </p>

      <p>{{ project.description }}</p>
      <a :href="project.url" target="_blank">リンクを見る</a>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Noto+Sans+JP:wght@400;700&display=swap');

.portfolio-site {
  min-height: 100vh;
  font-family: 'Montserrat', 'Noto Sans JP', sans-serif;
  color: #446;
  background: linear-gradient(135deg, #b3fffd 0%, #e3e6ff 50%, #fde5f5 100%);
  background-attachment: fixed; /* スクロールしても背景を固定（高級感が出ます） */
}

/* ヘッダーをPCらしく左右に広げる */
.header {
  padding: 20px 5%;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  font-size: 28px;
  font-weight: 700;
}
.logo span {
  color: #00aeef;
}

/* セクションの見出しを大きく */
.section-header {
  text-align: center;
  margin: 80px 0 50px;
}

.title-en {
  font-size: 64px; /* PCサイズ用に大きく */
  letter-spacing: 0.05em;
  margin-bottom: 10px;
  color: rgba(68, 68, 102, 0.8);
}

.title-jp {
  font-size: 14px;
  letter-spacing: 0.5em;
  text-indent: 0.5em; /* 中央寄せの微調整 */
  display: block;
}

/* ニュースリストの横幅制限と中央寄せ */
.news-list {
  max-width: 1000px; /* PCで見やすい幅 */
  margin: 0 auto 100px;
  padding: 0 40px;
  list-style: none;
}

.news-item {
  margin-bottom: 16px;
  opacity: 0;
  animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
}

/* リンクを「横並び（Row）」に変更 */
.news-link {
  display: flex;
  flex-direction: row; /* 横並び！ */
  align-items: center; /* 縦中央 */
  background: rgba(255, 255, 255, 0.6);
  padding: 25px 40px;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border-left: 0 solid #00aeef;
  backdrop-filter: blur(4px);
}

.news-link:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateX(15px) scale(1.01); /* 右にスライドしながら少し大きく */
  border-left: 10px solid #00aeef;
  box-shadow: 0 20px 40px rgba(0, 174, 239, 0.1);
}

.meta {
  display: flex;
  align-items: center;
  width: 250px; /* 日付とカテゴリの幅を固定 */
  flex-shrink: 0; /* 幅を縮めない */
}

.date {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  color: #889;
  margin-right: 25px;
}

.category {
  font-size: 11px;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 4px; /* プロセカ風に少し角を残す */
  color: #fff;
  background: #446;
}

.category.DEV {
  background: #00aeef;
}
.category.EVENT {
  background: #ff619a;
}
.category.MUSIC {
  background: #80ffec;
  color: #446;
}
.category.ART {
  background: #a855f7;
}

/* タイトルのフォントサイズをPC用に調整 */
.activity-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  flex-grow: 1; /* 余ったスペースを全部使う */
}

/* 矢印アイコンを右端に追加（擬似要素） */
.news-link::after {
  content: '→';
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  color: #00aeef;
  opacity: 0;
  transform: translateX(-20px);
  transition: all 0.3s;
}

.news-link:hover::after {
  opacity: 1;
  transform: translateX(0);
}

/* アニメーションに時間差（ディレイ）をつける */
.news-item:nth-child(1) {
  animation-delay: 0.1s;
}
.news-item:nth-child(2) {
  animation-delay: 0.2s;
}
.news-item:nth-child(3) {
  animation-delay: 0.3s;
}
.news-item:nth-child(4) {
  animation-delay: 0.4s;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* モバイル用の微調整（画面が狭くなった時） */
@media (max-width: 768px) {
  .news-link {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
  .meta {
    width: auto;
    margin-bottom: 10px;
  }
  .title-en {
    font-size: 40px;
  }
}

.project-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
}
</style>
