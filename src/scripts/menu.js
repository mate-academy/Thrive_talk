'use strict';

(function toggleMenu() {
  const navToggler = document.querySelector('.nav-toggler');
  const nav = document.querySelector('.header__nav');
  const links = document.querySelectorAll('.header__link');
  let activeLink = 0;

  for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
      navToggler.classList.toggle('nav-toggler--active');
      nav.classList.toggle('header__nav--active');
      links[activeLink].classList.toggle('header__link--active');
      links[i].classList.toggle('header__link--active');
      activeLink = i;
    };
  }

  navToggler.onclick = () => {
    navToggler.classList.toggle('nav-toggler--active');
    nav.classList.toggle('header__nav--active');
  };
})();
