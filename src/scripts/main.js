'use strict';

document.querySelector('.header__burger').addEventListener('click', function() {
  document.querySelector('.header__burger span').classList.toggle('active');
  document.querySelector('.header__burger').classList.toggle('active');
  document.querySelector('.header__nav').classList.toggle('animate');
});
