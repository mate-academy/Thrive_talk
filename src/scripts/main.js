'use strict';

document.querySelector('.header__menu')
  .addEventListener('click', function() {
    document.querySelector('.header__menu div').classList.toggle('active');
    document.querySelector('.header__menu').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('animate');
  });
