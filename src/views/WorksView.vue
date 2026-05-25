<script setup lang="ts">
import { sortedWorks } from '@/data/works'
</script>

<template>
  <div class="works-archive-page">
    <section class="section">
      <div class="section-inner">
        <h2 class="section-title-en">WORKS ARCHIVE<span>.</span></h2>
        <div class="works-grid-full">
          <RouterLink
            v-for="work in sortedWorks"
            :key="work.id"
            :to="'/works/' + work.id"
            class="work-card-large"
          >
            <div class="work-thumb-large">
              <!-- images配列が存在し、1枚目がある場合はそれを表示 -->
              <img
                v-if="work.images && work.images.length > 0"
                :src="work.images[0]"
                alt=""
                class="thumb-img"
              />
              <!-- 画像がない場合は、カテゴリ名（thumb）をテキスト表示 -->
              <span v-else>{{ work.thumb }}</span>
            </div>
            <div class="work-info">
              <span class="work-tech-tag">{{ work.tech }}</span>
              <p>{{ work.date }}</p>
              <h3>{{ work.title }}</h3>
              <p>{{ work.desc }}</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.work-card-large {
  text-decoration: none;
  color: inherit;
  display: block;
}
.section-inner {
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
}
.works-grid-full {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 作品なので少し大きめに2列 */
  gap: 40px;
  margin-top: 60px;
}
/* 作品記事カード */
.work-card-large {
  background: rgb(255, 255, 255);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
}
.work-card-large:hover {
  transform: translateY(-10px);
}
/* 作品記事カードのサムネイル */
.work-thumb-large {
  height: 300px;
  background: #cbd5e1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 24px;
  color: white;
  position: relative;
  overflow: hidden;
}

/* 画像のスタイリング */
.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.work-info {
  padding: 30px;
}
/* 技術タグ */
.work-tech-tag {
  background: #6bcb9b;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 900;
}
.work-info h3 {
  margin: 5px 0;
  font-size: 24px;
  color: #000000;
}
.work-info p {
  margin: 5px 0;
  opacity: 0.7;
  line-height: 1.5;
  color: #000000;
}

@media (max-width: 800px) {
  .works-grid-full {
    grid-template-columns: 1fr;
  }
}
</style>
