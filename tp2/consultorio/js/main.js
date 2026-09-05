(function($) {
  
  "use strict";

/* 
   CounterUp
   ========================================================================== */
    $('.counter').counterUp({
      time: 500
    });

/* 
   MixitUp
   ========================================================================== */
  if ($('#portfolio').length) {
    $('#portfolio').mixItUp({
      selectors: {
        target: '.mix',
        filter: '.esp-tab, .filter'
      },
      animation: {
        effects: 'fade scale',
        duration: 350
      },
      layout: {
        display: 'block'
      }
    });
  }

/* 
   Clients Sponsor 
   ========================================================================== */
    var owl = $("#clients-scroller");
    owl.owlCarousel({
      items: 4,
      itemsDesktop : [1199, 3],
      itemsDesktopSmall : [980, 3],
      itemsTablet: [768, 2],
      itemsTabletSmall: [480, 1],
      itemsMobile : [479, 1],
      autoPlay: true,
      slideSpeed: 800,
      pagination: false,
      navigation: false
    });

  /* Testimonials Carousel 
  ========================================================*/
    var owl = $("#testimonials");
      owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 2,
        itemsDesktop : [1199,2],
        itemsDesktopSmall : [980,2],
        itemsTablet: [768,1],
        itemsTablet: [767,1],
        itemsTabletSmall: [480,1],
        itemsMobile : [479,1],
      });   

/* 
   Touch Owl Carousel
   ========================================================================== */
    var owl = $(".touch-slider");
    owl.owlCarousel({
      navigation: false,
      pagination: true,
      slideSpeed: 1000,
      stopOnHover: true,
      autoPlay: true,
      items: 1,
      itemsDesktopSmall: [1024, 1],
      itemsTablet: [600, 1],
      itemsMobile: [479, 1]
    });

    $('.touch-slider').find('.owl-prev').html('<i class="lni-chevron-left"></i>');
    $('.touch-slider').find('.owl-next').html('<i class="lni-chevron-right"></i>');

/* 
   Scroll & Sticky Nav Handlers (Consolidated & High Performance)
   ========================================================================== */
    var $fixedTop = $('.fixed-top, .header-top-area');
    var $backToTop = $('.back-to-top');
    var ticking = false;

    function onScroll() {
      var scrollPos = $(window).scrollTop();
      if (scrollPos > 60) {
        $fixedTop.addClass('menu-bg');
      } else {
        $fixedTop.removeClass('menu-bg');
      }

      if (scrollPos > 250) {
        $backToTop.fadeIn(300);
      } else {
        $backToTop.fadeOut(300);
      }
      ticking = false;
    }

    $(window).on('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    });

/* 
   VIDEO POP-UP
   ========================================================================== */
    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

/* 
   Back Top Link
   ========================================================================== */
    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

/* 
   One Page Navigation & wow js
   ========================================================================== */
    //Initiat WOW JS
    new WOW().init();

    // one page navigation 
    $('.main-navigation').onePageNav({
      currentClass: 'active',
      scrollSpeed: 600,
      scrollThreshold: 0.2
    }); 

    $(window).on('load', function() {
      $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 100
      });
    });

/* Nivo Lightbox
  ========================================================*/   
   $('.lightbox').nivoLightbox({
    effect: 'fadeScale',
    keyboardNav: true,
  });

/* 
   Page Loader
   ========================================================================== */
   $(window).on('load',function() {
      "use strict";
      $('#loader').fadeOut();
    });

}(jQuery));

