'use strict';

(function() {
  const burger = document.querySelector('.nav__burger');

  burger.addEventListener('click', () => {
    burger.classList.toggle('nav__burger-active');
  });
}());
