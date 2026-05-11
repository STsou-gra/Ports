<script setup lang="ts">
import { useRoute } from 'vue-router'
import { sortedWorks, type Project } from '@/data/works'
import { sortedLog, type LogItem } from '@/data/log'
import { computed, onMounted, nextTick } from 'vue'

// MarkdownとPrismのインポート
import MarkdownIt from 'markdown-it'
import Prism from 'prismjs'

// --- 言語とテーマの読み込み ---
import 'prismjs/themes/prism-tomorrow.css' //暗めのテーマ
/*
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-csharp'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-bash'
*/

const route = useRoute()

// MarkdownIt
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
})

// 表示するデータを特定
const item = computed<(Project & LogItem) | null>(() => {
  const id = Number(route.params.id)
  const isWork = route.path.includes('works')
  const found = isWork ? sortedWorks.find((w) => w.id === id) : sortedLog.find((n) => n.id === id)
  return (found as any) || null
})

// MarkdownをHTMLに変換
const renderedContent = computed(() => {
  return item.value ? md.render(item.value.desc) : ''
})

const highlightCode = async () => {
  await nextTick() //HTMLが描画されるのを待つ
  Prism.highlightAll()
}

onMounted(highlightCode)
</script>

<template>
  <div v-if="item" class="detail-page">
    <section class="section">
      <div class="section-inner">
        <button @click="$router.back()" class="back-btn">← BACK</button>

        <div class="detail-header">
          <span class="detail-category">{{ route.path.includes('works') ? 'WORKS' : 'LOG' }}</span>
          <h1 class="detail-title">{{ item.title }}</h1>
          <p class="detail-date">{{ item.date }}</p>
        </div>

        <div class="detail-visual">
          <div v-if="item.videoUrl" class="video-container">
            <iframe :src="item.videoUrl" frameborder="0" allowfullscreen></iframe>
          </div>
          <div v-else class="visual-placeholder">
            <img v-if="item.thumb && item.thumb !== 'THUMB'" :src="item.thumb" alt="" />
            <span v-else>NO IMAGE / VIDEO</span>
          </div>
        </div>

        <div class="detail-body">
          <div class="main-desc markdown-body" v-html="renderedContent"></div>

          <div class="external-links" v-if="item.githubUrl || item.siteUrl">
            <a v-if="item.githubUrl" :href="item.githubUrl" target="_blank" class="link-btn github"
              >GitHub</a
            >
            <a v-if="item.siteUrl" :href="item.siteUrl" target="_blank" class="link-btn site"
              >Project / Movie</a
            >
          </div>

          <div class="image-gallery" v-if="item.images && item.images.length">
            <h3>Screenshots</h3>
            <div class="gallery-grid">
              <div v-for="(img, index) in item.images" :key="index" class="img-box">
                <img :src="img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- データが見つからなかった時の表示 -->
  <div v-else class="detail-page not-found">
    <section class="section">
      <div class="section-inner">
        <h1>NOT FOUND.</h1>
        <p>データが見つかりませんでした。</p>
        <button @click="$router.push('/')" class="back-btn">TOPへ戻る</button>
      </div>
    </section>
  </div>
</template>

<style>
.markdown-body {
  color: #446;
  line-height: 1.8;
}

/* コードブロックの外枠 */
.markdown-body pre {
  margin: 1.5em 0;
  padding: 1em;
  border-radius: 12px;
  background: #2d2d2d !important; /* 明示的に暗くする */
  overflow-x: auto;
}

/* インラインコード */
.markdown-body :not(pre) > code {
  background: #eee;
  padding: 2px 5px;
  border-radius: 4px;
  font-family: monospace;
}

/* 見出しの調整 */
.markdown-body h3 {
  margin: 1.5em 0 0.5em;
  padding-bottom: 0.3em;
  border-bottom: 2px solid #00aeef;
}

.markdown-body ul {
  padding-left: 1.5em;
}
</style>

<style scoped>
.detail-page {
  padding-top: 60px;
  min-height: 100vh;
}
.section-inner {
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
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
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 900;
  margin: 20px 0 10px;
  color: #446;
  line-height: 1.2;
}
.detail-date {
  color: #889;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
}

.detail-visual {
  width: 100%;
  margin-bottom: 50px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: #eee;
}
.video-container {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
}
.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.visual-placeholder {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: #bbb;
}
.visual-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.main-desc {
  font-size: 18px;
  line-height: 1.8;
  white-space: pre-wrap;
  margin-bottom: 40px;
  color: #446;
}

.external-links {
  display: flex;
  gap: 15px;
  margin-bottom: 60px;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.image-gallery h3 {
  font-size: 24px;
  margin-bottom: 25px;
  border-left: 5px solid #00aeef;
  padding-left: 15px;
  font-weight: 900;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
.img-box {
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #ddd;
  border-radius: 12px;
  overflow: hidden;
}
.img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
