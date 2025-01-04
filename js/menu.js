// menu.js : メニューページのみで使用する slick の初期化処理

document.addEventListener('DOMContentLoaded', () => {
  // slick初期化
  initSlick('#slickSoba');
  initSlick('#slickSet');
  initSlick('#slickGohan');
});

function initSlick(selector) {
  if ($(selector).length) {
    $(selector).slick({
      autoplay: true,
      autoplaySpeed: 5000, // 5秒ごとにスライド
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,    // 下部ドットを表示
      arrows: true,  // 左右矢印を表示
      infinite: true,
      speed: 500
      // fade: false  // 必要に応じてフェードにするならtrue
    });
  }
}
