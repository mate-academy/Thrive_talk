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

  // Animations on scroll
  const wow = new WOW();

  wow.init();

  // Mobile navigation
  $('.header__mobile-button').on('click', function() {
    $('.header__mobile-list').slideToggle();

    $('.header__mobile-button').toggleClass('header__mobile-button--opened');
  });
});
