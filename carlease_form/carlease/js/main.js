(function() {
  'use strict';

  totop();
  ScrollOut({
    once: true
  });

  /*----------------------------------------
  a link
  ----------------------------------------*/
  function smoothscroll() {
    $(".smoothscroll[href^='#']").on('click', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        // target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 60)
          }, 700);
          // return false;
        }
      }
    });

    $('body').on('activate.bs.scrollspy', function () {
      console.log('nice');
    })
  }

  /*----------------------------------------
  TO-TOP
  ----------------------------------------*/
  function totop() {
    var pagetop = $('.to-top');
      $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        pagetop.addClass('active');
      } else {
        pagetop.removeClass('active');
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 700);
      return false;
    });
  }

  /*----------------------------------------
  ranking tabs
  ----------------------------------------*/

})(jQuery);
