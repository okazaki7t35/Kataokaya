// main.js : ハンバーガーメニュー開閉 & 言語切り替え (localStorage)

function toggleMenu() {
  const overlayMenu = document.getElementById('overlayMenu');
  if (overlayMenu) {
    overlayMenu.classList.toggle('active');
  }
}

function switchLang(lang) {
  localStorage.setItem('lang', lang);
  const elements = document.querySelectorAll('[data-lang-ja]');
  elements.forEach(el => {
    el.textContent = (lang === 'ja')
      ? el.getAttribute('data-lang-ja')
      : el.getAttribute('data-lang-en');
  });
}

// ページ読み込み時に localStorage の言語を適用
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    switchLang(savedLang);
  }
});
