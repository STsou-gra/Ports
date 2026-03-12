<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Intersection Observer で画面内に入った要素に .is-visible を付与
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    },
    { threshold: 0.1 },
  )

  // 監視対象を指定
  const targetElements = document.querySelectorAll(
    '.tree-trunk, .branch-line, .history-blue-card, .birth-card',
  )
  targetElements.forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="about-detail-page">
    <section class="section tree-section">
      <h2 class="section-title-en">DETAILED ABOUT<span>.</span></h2>

      <div class="detail-card main-root">
        <h3>自己紹介（詳細）</h3>
        <p>
          大学2年生。ゲームプログラマーを目指してC++でのエンジン開発やUnity、Blenderを学習中。
          ハッカソン等でのチーム開発も経験しています。
        </p>
      </div>

      <div class="history-tree">
        <div class="tree-trunk"></div>

        <div class="tree-item right">
          <div class="branch-line"></div>
          <div class="history-blue-card">
            <span class="year">2026.02</span>
            <h4>2週間ハッカソン</h4>
            <p>Next.jsとSupabaseを用いたWeb制作を完走。</p>
          </div>
        </div>

        <div class="tree-item left">
          <div class="branch-line"></div>
          <div class="history-blue-card">
            <span class="year">2026.01</span>
            <h4>自作エンジン着手</h4>
            <p>C++とDirectX12を用いた描画エンジンの構築。</p>
          </div>
        </div>

        <div class="tree-item right">
          <div class="branch-line"></div>
          <div class="history-blue-card">
            <span class="year">2024.04</span>
            <h4>大学入学</h4>
            <p>情報工学を専攻し、エンジニアとしての道を選択。</p>
          </div>
        </div>

        <div class="birth-item">
          <div class="birth-card">
            <div class="birth-icon">✦</div>
            <h4>誕生</h4>
            <p>全ての物語の始まり</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.tree-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 160px;
}

.section-title-en {
  top: 100px;
  font-size: 80px;
  font-weight: 900;
  color: rgba(68, 68, 102, 0.05);
  position: absolute;
  z-index: 0;
}

.main-root {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 10;
  max-width: 800px;
  width: 100%;
}

.history-tree {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

/* ★ 幹：上から下へ伸びるアニメーション */
.tree-trunk {
  position: absolute;
  left: 50%;
  top: -20px;
  bottom: 80px;
  width: 6px;
  background: #00aeef;
  transform: translateX(-50%) scaleY(0);
  transform-origin: top;
  transition: transform 1.2s ease-out;
  z-index: 1;
}
.tree-trunk.is-visible {
  transform: translateX(-50%) scaleY(1);
}

.tree-item {
  position: relative;
  width: 50%;
  padding: 30px 0; /* 線の高さに合わせて調整 */
  display: flex;
  align-items: center;
  z-index: 2;
}
.tree-item.left {
  left: 0;
  flex-direction: row-reverse;
}
.tree-item.right {
  left: 50%;
  flex-direction: row;
}

/* ★ 曲線：幹に吸着するよう微調整 */
.branch-line {
  width: 60px;
  height: 60px; /* 縦の曲がり幅 */
  background: transparent;
  position: relative;
  flex-shrink: 0;
  opacity: 0;
  transition: all 0.8s ease-out;
  transition-delay: 0.5s;
}

/* 幹からカードへの接続を滑らかに（右側） */
.tree-item.right .branch-line {
  border-bottom: 4px solid #00aeef;
  border-left: 4px solid #00aeef;
  border-bottom-left-radius: 25px;
  margin-left: -3px; /* 幹の中心に合わせる */
  margin-top: -30px; /* 曲線の位置上げ */
  clip-path: none !important;
}

/* 幹からカードへの接続を滑らかに（左側） */
.tree-item.left .branch-line {
  border-bottom: 4px solid #00aeef;
  border-right: 4px solid #00aeef;
  border-bottom-right-radius: 25px;
  margin-right: -3px;
  margin-top: -30px;
  clip-path: none !important;
}

/* 接続点のポッチ：ズレを防止するため疑似要素で作成 */
.branch-line::after {
  content: '';
  position: absolute;
  width: 14px;
  height: 14px;
  background: #00aeef;
  border-radius: 50%;
  top: -4px; /* 線の始点に合わせる */
}
.tree-item.right .branch-line::after {
  left: -7.8px;
}
.tree-item.left .branch-line::after {
  right: -7.8px;
}

.branch-line.is-visible {
  opacity: 1;
}

/* カードのフェードイン */
.history-blue-card {
  background: #00aeef;
  color: white;
  padding: 20px 30px;
  border-radius: 20px;
  width: 350px;
  box-shadow: 0 10px 25px rgba(0, 174, 239, 0.3);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease-out;
  transition-delay: 0.8s;
}
.history-blue-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.birth-item {
  display: flex;
  justify-content: center;
  padding-top: 60px;
  position: relative;
  z-index: 2;
}

.birth-card {
  background: white;
  border: 4px solid #00aeef;
  color: #446;
  padding: 25px 50px;
  border-radius: 50px;
  text-align: center;
  box-shadow: 0 15px 30px rgba(0, 174, 239, 0.15);
  opacity: 0;
  transition: all 0.8s ease-out;
  transition-delay: 1s;
}
.birth-card.is-visible {
  opacity: 1;
}

@media (max-width: 768px) {
  .tree-trunk {
    left: 30px;
    transform: none;
    bottom: 100px;
  }
  .tree-item {
    width: 100%;
    left: 0 !important;
    flex-direction: row !important;
    padding-left: 30px;
  }
  .branch-line {
    width: 20px;
    border-left: none !important;
    border-right: none !important;
    border-radius: 0 !important;
    height: 4px;
    margin-top: 0;
    clip-path: none !important;
    overflow: visible !important;
  }
  .branch-line::after {
    left: -10px !important;
    top: -4px !important;
  }
  .history-blue-card {
    width: calc(100% - 80px);
  }
  .birth-item {
    justify-content: flex-start;
    padding-left: 10px;
  }
}
</style>
