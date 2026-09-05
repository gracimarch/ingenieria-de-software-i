//jQuery to collapse the navbar on scroll
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 50) {
        $(".navbar-fixed-top, .fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top, .fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        var target = $anchor.attr('href');
        if (target && $(target).length) {
            $('html, body').stop().animate({
                scrollTop: $(target).offset().top - 70
            }, 600, 'easeInOutExpo');
            event.preventDefault();
        }
    });
});
