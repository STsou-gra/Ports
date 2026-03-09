<template>
  <div class="about-detail-page">
    <section class="section">
      <h2 class="section-title-en">DETAILED ABOUT<span>.</span></h2>
      <div class="detail-card">
        <h3>自己紹介（詳細）</h3>
        <p>
          ここでは、大学での学習内容やハッカソンでの役割、ゲームプログラミングへの情熱を詳しく記述します。
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* App.vueに無い、このページだけの装飾だけ書く */
.about-detail-page {
  min-height: 100vh;
}
.detail-card {
  background: white;
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1; /* タイトルより手前に出す */
  max-width: 800px;
}
</style>
