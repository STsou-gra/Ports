<script setup lang="ts">
import { ref, computed } from 'vue'

// データ（30個以上ある想定）
const allWorks = Array.from({ length: 35 }, (_, i) => ({
  id: i + 1,
  title: `最新の開発プロジェクト ${i + 1}`,
  date: '2026.03.09',
  desc: 'ここに作品の短い説明文が入ります。ニュース記事のような見た目を目指します。',
  thumb: 'THUMB',
}))

const itemsPerPage = 30 // 3列 × 10行 = 30件
const currentPage = ref(1)

const displayWorks = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return allWorks.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => Math.ceil(allWorks.length / itemsPerPage))
</script>

<template>
  <div class="works-news-page">
    <section class="section">
      <div class="section-inner">
        <h2 class="section-title-en">WORKS ARCHIVE<span>.</span></h2>

        <div class="news-grid-3cols">
          <div v-for="work in displayWorks" :key="work.id" class="news-card">
            <div class="card-thumb">{{ work.thumb }}</div>
            <div class="card-body">
              <div class="card-meta">
                <span class="card-id">#{{ String(work.id).padStart(3, '0') }}</span>
                <span class="card-date">{{ work.date }}</span>
              </div>
              <h3 class="card-title">{{ work.title }}</h3>
              <p class="card-desc">{{ work.desc }}</p>
            </div>
          </div>
        </div>

        <div class="pagination" v-if="totalPages > 1">
          <button @click="currentPage--" :disabled="currentPage === 1">前へ</button>
          <span class="page-num">{{ currentPage }} / {{ totalPages }}</span>
          <button @click="currentPage++" :disabled="currentPage === totalPages">次へ</button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-inner {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}

/* ★ 横3列の設定 */
.news-grid-3cols {
  display: grid;
  /* 横に3つの列を作る (1fr = 均等な幅) */
  grid-template-columns: repeat(3, 1fr);
  /* 縦に10行分並ぶように間隔をあける */
  gap: 30px;
  margin-top: 60px;
}

/* ニュース記事風のカードデザイン */
.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 174, 239, 0.15);
}

.card-thumb {
  width: 100%;
  aspect-ratio: 16 / 9; /* ニュースサイトによくある横長画像 */
  background: #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: white;
}

.card-body {
  padding: 20px;
}

.card-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 12px;
}

.card-id {
  color: #00aeef;
  font-weight: 700;
}
.card-date {
  color: #889;
}

.card-title {
  font-size: 18px;
  font-weight: 900;
  margin: 0 0 10px 0;
  line-height: 1.4;
}

.card-desc {
  font-size: 14px;
  color: #667;
  line-height: 1.6;
  /* 3行以上になったら「...」で省略する設定 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ページネーション */
.pagination {
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.pagination button {
  background: #446;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.3;
}

/* スマホ対応：1200px以下で2列、600px以下で1列にする */
@media (max-width: 1100px) {
  .news-grid-3cols {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 700px) {
  .news-grid-3cols {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
