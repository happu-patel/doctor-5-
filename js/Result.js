jQuery(document).ready(function($) {
  "use strict";
  $('#customers-testimonials').owlCarousel( {
      loop: true,
      center: true,
      items: 3,
      margin: 30,
      autoplay: true,
      dots:true,
      nav:true,
      autoplayTimeout: 5000,
      autoplayHoverPause:true,
      stopOnHover:true,
      smartSpeed: 850,
      navText: ['<i class="fa fa-arrow-alt-circle-left" style="font-size:30px;color:#03afa1"></i>','<i class="fa fa-arrow-alt-circle-right" style="font-size:30px;color:#03afa1"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        },
        1270: {
          items: 3
        }
      }
    });
  });