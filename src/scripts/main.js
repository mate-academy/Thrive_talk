'use strict';

$(document).ready(function() {
  // Smooth scrolling
  $('.smooth-scroll').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== '') {
      // Store hash
      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top,
      }, 1000, function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

  // prevent .nav__item from widening on link hover
  const array = $('.nav__link');

  for (let i = 0; i < array.length; i++) {
    array.eq(i).parent().css('width', array.eq(i).width() + 12);
  }

  // Animations on scroll
  const wow = new WOW();

  wow.init();
});
