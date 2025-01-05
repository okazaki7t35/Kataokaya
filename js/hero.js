// hero.js : トップページの背景画像を5秒ごとに切り替える処理 (フェード付き)

document.addEventListener('DOMContentLoaded', () => {
  const heroImages = [
    'images/hero1.jpg',
    'images/hero2.jpg',
    'images/hero3.jpg'
  ];
  let currentIndex = 0;
  const heroElement = document.querySelector('.hero');

  function switchHeroImage() {
    // インデックスを進める（ループ）
    currentIndex = (currentIndex + 1) % heroImages.length;

    // 背景画像を変更
    heroElement.style.backgroundImage = `url(${heroImages[currentIndex]})`;

    // フェードイン用のクラスを一旦外して再付与（アニメーションを再生）
    heroElement.classList.remove('fade-in');
    // reflowを発生させて、次の行でクラスを付与し直す
    void heroElement.offsetWidth;
    heroElement.classList.add('fade-in');
  }

  // 初回だけフェードインを付与しておく
  heroElement.classList.add('fade-in');

  // 5秒ごとに画像を切り替え
  setInterval(switchHeroImage, 5000);
});
