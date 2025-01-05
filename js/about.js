// about.js : about.html (店内紹介ページ) の slick スライダー初期化処理

document.addEventListener('DOMContentLoaded', () => {
    // slick初期化 (store全景, zashiki1, zashiki2, zashiki3, zashiki4)
    initSlick('#slickStore');
    initSlick('#slickZashiki1');
    initSlick('#slickZashiki2');
    initSlick('#slickZashiki3');
    initSlick('#slickZashiki4');
  });
  
  function initSlick(selector) {
    if ($(selector).length) {
      $(selector).slick({
        autoplay: true,
        autoplaySpeed: 5000, // 5秒ごとにスライド
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,   // 下部ドットを表示
        arrows: true, // 左右矢印を表示
        infinite: true,
        speed: 500
        // fade: false // 必要に応じてフェードにするならtrue
      });
    }
  }
  