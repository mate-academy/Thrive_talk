'use strict';

const anchors = document.querySelectorAll('a[href*="#"]');

// eslint-disable-next-line prefer-const
for (let anchor of anchors) {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();

    const block = anchor.getAttribute('href');

    document.querySelector('' + block).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}
