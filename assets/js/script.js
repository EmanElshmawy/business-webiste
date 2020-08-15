// preloader
(function ($) {
    $.fn.preloadinator = function (options) {
        'use strict';

        var settings = $.extend({
                scroll: false,
                minTime: 0,
                animation: 'fadeOut',
                animationDuration: 400,
                afterDisableScroll: function () {},
                afterEnableScroll: function () {},
                afterRemovePreloader: function () {}
            }, options),
            preloader = this,
            start = new Date().getTime();

        $.fn.preloadinator.disableScroll = function () {
            $('body').css('overflow', 'hidden');

            if (typeof settings.afterDisableScroll == 'function') {
                settings.afterDisableScroll.call(this);
            }
        }

        $.fn.preloadinator.enableScroll = function () {

            if (typeof settings.afterEnableScroll == 'function') {
                settings.afterEnableScroll.call(this);
            }
        }

        $.fn.preloadinator.removePreloader = function () {
            // $('body').css('overflow', 'auto');

            $(preloader)[settings.animation](settings.animationDuration, function () {
                if (settings.scroll === false) {
                    $.fn.preloadinator.enableScroll();
                }
                if (typeof settings.afterRemovePreloader == 'function') {
                    settings.afterRemovePreloader.call(this);
                }
            });
        }

        $.fn.preloadinator.minTimeElapsed = function () {
            var now = new Date().getTime(),
                elapsed = now - start;

            if (elapsed >= settings.minTime) {
                return true;
            } else {
                return false;
            }
        }

        if (settings.scroll === false) {
            $.fn.preloadinator.disableScroll();
        }

        $(window).on('load', function () {
            if ($.fn.preloadinator.minTimeElapsed()) {
                $.fn.preloadinator.removePreloader();
            } else {
                var now = new Date().getTime(),
                    elapsed = now - start;

                setTimeout($.fn.preloadinator.removePreloader, settings.minTime - elapsed);
            }
        });

        return this;
    }
}(jQuery));
$('.js-preloader').preloadinator({
    minTime: 1000
});
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-36251023-1']);
_gaq.push(['_setDomainName', 'jqueryscript.net']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();



jQuery(document).ready(function ($) {

    $(function () {
        $("#datepicker").datepicker();
    });

    $("body").niceScroll({
        cursorwidth: 8,
        cursoropacitymin: 0.4,
        cursorcolor: '#1e8fff',
        cursorborder: 'none',
        cursorborderradius: 0,
        autohidemode: 'leave'
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: ["<div class='icon icon-arrow-left7'><img src='./assets/images/back.svg'></div>", "<div class='icon icon-arrow-right7' ><img src='./assets/images/next.svg'></div>"],
        items: 1,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    // navbar
    var scrollTop;
    if ($('#navbar').offset().top >= 100) {
        $('#navbar').addClass('scrolled-nav');
    } else {
        $('#navbar').removeClass('scrolled-nav');
    }
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop >= 100) {
            $('#navbar').addClass('scrolled-nav');
        } else if (scrollTop < 100) {
            $('#navbar').removeClass('scrolled-nav');
        }
    });
    $.holdReady(false);
    $(".navbar .nav-link").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            // event.preventDefault();
            //mPS2id-highlight
            // Store hash
            var hash = this.hash;
            console.log($(hash).offset().top)
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 0

            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
    $(".loader-modal").animate({
        opacity: 1,
        left: 0
    }, 8000, "linear", function () {
        $('#exampleModal').modal('show');

    });
});