<script setup lang="ts">
import { ref, computed } from 'vue'
import { sortedLog } from '@/data/log'

const itemsPerPage = 30
const currentPage = ref(1)

const displayLog = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return sortedLog.slice(start, start + itemsPerPage)
})
</script>

<template>
  <div class="log-archive-page">
    <section class="section">
      <div class="section-inner">
        <h2 class="section-title-en">LOG LIST<span>.</span></h2>
        <div class="log-grid-3x10">
          <RouterLink
            v-for="item in displayLog"
            :key="item.id"
            :to="'/log/' + item.id"
            class="log-item-card"
          >
            <div class="log-item-meta">
              <span class="log-id">#{{ String(item.id).padStart(3, '0') }}</span>
              <span class="log-tag">{{ item.tag }}</span>
            </div>
            <span class="log-date">{{ item.date }}</span>
            <h4>{{ item.title }}</h4>
            <p>{{ item.desc }}</p>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.log-item-card {
  text-decoration: none;
  color: inherit;
  display: block;
}
.section-inner {
  max-width: 1300px;
  margin: 0 auto;
  width: 95%;
}
.log-grid-3x10 {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 横3列 */
  grid-template-rows: repeat(10, auto); /* 縦10行 */
  gap: 20px;
  margin-top: 60px;
}
.log-item-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border-bottom: 4px solid var(--color-light);
  transition: 0.2s;
}
.log-item-card:hover {
  border-bottom-color: var(--color-accent);
  transform: translateY(-3px);
}

.log-item-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.log-item-meta p {
  color: #000000;
}

.log-item-meta h4 {
  color: #000000;
}

.log-id {
  color: var(--color-accent);
  font-weight: 900;
  font-size: 12px;
}
.log-tag {
  font-size: 10px;
  background: var(--color-ink);
  color: white;
  padding: 2px 6px;
  border-radius: 3px;
}
.log-date {
  font-size: 12px;
  color: var(--color-muted);
  font-weight: 700;
}
.log-item-card h4 {
  margin: 8px 0;
  font-size: 16px;
  color: var(--color-ink);
}
.log-item-card p {
  font-size: 13px;
  opacity: 0.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: var(--color-ink);
}

.pagination {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.pagination button {
  background: var(--color-ink);
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
}
.pagination button:disabled {
  opacity: 0.3;
}

@media (max-width: 1000px) {
  .log-grid-3x10 {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 600px) {
  .log-grid-3x10 {
    grid-template-columns: 1fr;
  }
}
</style>
