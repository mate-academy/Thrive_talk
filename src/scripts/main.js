'use strict';

// Menu
const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
  iconMenu.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

function onMenuLinkClick(e) {
  const menuLink = e.target;

  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue
      = gotoBlock.getBoundingClientRect().top
      + window.pageYOffset;

    if (iconMenu.classList.contains('_active')) {
      document.body.classList.remove('_lock');
      iconMenu.classList.remove('_active');
      menuBody.classList.remove('_active');
    }

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth',
    });
    e.preventDefault();
  }
}

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });
}

// Кнопка вверх
document.addEventListener('DOMContentLoaded', () => {
  const toTopBtn = document.querySelector('.up');

  window.onscroll = function() {
    if (window.pageYOffset > 580) {
      toTopBtn.classList.add('_up-show');
    } else {
      toTopBtn.classList.remove('_up-show');
    }
  };

  // плавный скролл наверх
  toTopBtn.addEventListener('click', function() {
    window.scrollBy({
      top: -document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  });
});
