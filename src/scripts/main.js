'use strict';

const list = document.querySelector('.nav__list');
const button = document.querySelector('.header__button');
const checkbox = document.querySelector('.header__toggler');

list.addEventListener('click', () => {
  checkbox.checked = false;
});

button.addEventListener('click', () => {
  checkbox.checked = false;
});
