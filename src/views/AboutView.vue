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

.tree-trunk {
  position: absolute;
  left: 50%;
  top: -20px;
  bottom: 80px; /* 誕生カードの手前で線を止める */
  width: 6px;
  background: #00aeef;
  transform: translateX(-50%);
  z-index: 1;
}

/* 枝分かれアイテムのスタイル */
.tree-item {
  position: relative;
  width: 50%;
  padding: 40px 0;
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

.branch-line {
  width: 40px;
  height: 4px;
  background: #00aeef;
  flex-shrink: 0;
}

.history-blue-card {
  background: #00aeef;
  color: white;
  padding: 20px 30px;
  border-radius: 20px;
  width: 350px;
  box-shadow: 0 10px 25px rgba(0, 174, 239, 0.3);
}

/* ★ 誕生カード専用のスタイル ★ */
.birth-item {
  display: flex;
  justify-content: center;
  padding-top: 60px; /* 最後の枝分かれからの距離 */
  position: relative;
  z-index: 2;
}

.birth-card {
  background: white;
  border: 4px solid #00aeef; /* 枠線を青にして特別感を出す */
  color: #446;
  padding: 25px 50px;
  border-radius: 50px; /* カプセル型のような丸み */
  text-align: center;
  box-shadow: 0 15px 30px rgba(0, 174, 239, 0.15);
}

.birth-icon {
  font-size: 24px;
  color: #00aeef;
  margin-bottom: 5px;
}

.birth-card h4 {
  margin: 0;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: 0.1em;
}

.birth-card p {
  margin: 5px 0 0;
  font-size: 14px;
  opacity: 0.7;
}

/* スマホ対応 */
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
