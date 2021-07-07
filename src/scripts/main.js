'use strict';

const btn = document.querySelector('.slider__button');

const slider = document.querySelectorAll('.slider__item');

let i = 0;

btn.addEventListener('click', function() {
  ++i;

  if (i >= slider.length) {
    slider[i - 1].classList.remove('slider__item--block');
    i = 0;
    slider[i].classList.add('slider__item--block');
  } else {
    slider[i - 1].classList.remove('slider__item--block');
    slider[i].classList.add('slider__item--block');
  }
});
