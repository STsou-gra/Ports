<script setup lang="ts">
// ここに開発物（ハッカソンやC++作品）のデータを書く
const works = [
  { id: 1, title: 'C++ Game Engine', description: 'DirectXを使った自作エンジン' },
  { id: 2, title: 'Hackathon Project', description: '2週間で作り上げたWebアプリ' },
]
</script>

<template>
  <div class="works-page">
    <h2>WORKS</h2>
    <div class="works-grid">
      <div v-for="work in works" :key="work.id" class="work-card">
        <h3>{{ work.title }}</h3>
        <p>{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.works-page {
  padding: 40px;
  color: #446;
}
.work-card {
  background: rgba(255, 255, 255, 0.8);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-left: 8px solid #00aeef; /* ブルアカ水色 */
}
</style>
