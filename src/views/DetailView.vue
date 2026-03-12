<script setup lang="ts">
import { useRoute } from 'vue-router'
import { allWorks } from '@/data/works'
import { allNews } from '@/data/news'
import { computed } from 'vue'

const route = useRoute()

// URLのIDから、表示すべきデータを特定する
const item = computed(() => {
  const id = Number(route.params.id)
  if (route.path.includes('works')) {
    return allWorks.find((w) => w.id === id) as any // 一旦 any で回避するか、共通の型を作る
  } else {
    return allNews.find((n) => n.id === id) as any
  }
})
/*
const item = computed(() => {
  const id = Number(route.params.id)
  // WORKSからの遷移か、NEWSからの遷移かを判定（URLのパスで分ける）
  if (route.path.includes('works')) {
    return allWorks.find((w) => w.id === id)
  } else {
    return allNews.find((n) => n.id === id)
  }
})
*/
</script>

<template>
  <div v-if="item" class="detail-page">
    <section class="section">
      <div class="section-inner">
        <button @click="$router.back()" class="back-btn">← BACK</button>

        <div class="detail-header">
          <span class="detail-category">{{ route.path.includes('works') ? 'WORKS' : 'NEWS' }}</span>
          <h1 class="detail-title">{{ item.title }}</h1>
          <p class="detail-date">{{ 'date' in item ? item.date : '' }}</p>
        </div>

        <div class="detail-visual">
          <div class="visual-placeholder">IMAGE / MOVIE AREA</div>
        </div>

        <div class="detail-body">
          <p>{{ item.desc }}</p>
          <div class="dummy-text">
            ここには、C++での実装の苦労話や、ハッカソンでのチーム開発の様子など、
            より詳しいテキストをたっぷり書くことができます。
          </div>
          <div class="external-links" v-if="item.githubUrl || item.siteUrl">
            <a v-if="item.githubUrl" :href="item.githubUrl" target="_blank" class="link-btn github">
              View on GitHub
            </a>
            <a v-if="item.siteUrl" :href="item.siteUrl" target="_blank" class="link-btn site">
              Open Project / Movie
            </a>
          </div>

          <div class="image-gallery" v-if="item.images && item.images.length">
            <h3>Screenshots</h3>
            <div class="gallery-grid">
              <div v-for="(img, index) in item.images" :key="index" class="gallery-item">
                <div class="img-box">
                  <img :src="img" :alt="item.title" class="gallery-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.detail-page {
  padding-top: 60px;
  min-height: 100vh;
}
.back-btn {
  background: none;
  border: none;
  color: #00aeef;
  font-weight: 900;
  cursor: pointer;
  margin-bottom: 30px;
}

.detail-header {
  margin-bottom: 40px;
}
.detail-category {
  background: #00aeef;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 900;
}
.detail-title {
  font-size: 42px;
  font-weight: 900;
  margin: 20px 0 10px;
  color: #446;
}

.detail-visual {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #ddd;
  border-radius: 20px;
  margin-bottom: 50px;
  overflow: hidden;
}
.visual-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: #bbb;
}

.detail-body {
  font-size: 18px;
  line-height: 1.8;
  color: #446;
  max-width: 800px;
}
.dummy-text {
  margin-top: 30px;
  opacity: 0.6;
}
/* --- 外部リンクボタン --- */
.external-links {
  display: flex;
  gap: 15px;
  margin: 40px 0;
}
.link-btn {
  padding: 12px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 900;
  font-size: 14px;
  transition: 0.3s;
}
.link-btn.github {
  background: #333;
  color: white;
}
.link-btn.site {
  background: #00aeef;
  color: white;
}
.link-btn:hover {
  transform: translateY(-3px);
  opacity: 0.9;
}

/* --- 画像ギャラリー --- */
.image-gallery {
  margin-top: 60px;
}
.image-gallery h3 {
  font-size: 24px;
  margin-bottom: 20px;
  border-left: 5px solid #00aeef;
  padding-left: 15px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
.img-box {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #eee;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: #99a;
}
.main-desc {
  white-space: pre-wrap; /* これで改行がそのまま反映されます */
  margin-bottom: 30px;
}
</style>
