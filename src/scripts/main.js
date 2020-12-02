'use strict';

$(document).ready(function() {
  // prevent .nav__item from widening on link hover
  const array = $('.nav__link');

  for (let i = 0; i < array.length; i++) {
    array.eq(i).parent().css('width', array.eq(i).width() + 12);
  }
});
