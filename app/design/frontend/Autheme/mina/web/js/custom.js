require([
    'jquery',
    'accordion',
    'nicescroll',
    'SmoothScroll',
],function($){
    "use strict";
    jQuery(document).ready(function($) {
        var body = $('body');
        var html = $('html');

        // Navbar menu dropdown

        var customScrollbar = $(".customScrollbar");

        customScrollbar.each(function () {
            var option = {
                cursorcolor: "#424242",
                cursorwidth: '5px',
                cursorborder: 'none',
                scrollspeed: "60",
                mousescrollstep: "40",
                cursoropacitymax: "1"
            };
            for (var k in option) {
                if (option.hasOwnProperty(k)) {
                    if ($(this).attr('data-scroll-' + k) != null) {
                        option[k] = $(this).data('scroll-' + k);
                    }
                }
            }

            $(this).niceScroll({
                cursorcolor: option.cursorcolor,
                cursorwidth: option.cursorwidth,
                cursorborder: option.cursorborder,
                scrollspeed: option.scrollspeed,
                mousescrollstep: option.mousescrollstep,
                cursoropacitymax: option.cursoropacitymax
            });
        });

        // Button caret dropdow
        var btnDropdown = jQuery('.js-navbar').find('.navbar-menu i');

        btnDropdown.on('click', function (e) {
            $(this).siblings('.drop-menu').slideToggle('fast', function () {
                customScrollbar.getNiceScroll().resize();
            });
            $(this).siblings('a').toggleClass('active');
            $(this).toggleClass('clicked');
            e.stopPropagation();
        });

        // Navbar vertial and Navbar mobile
        var headerNavbar = $('.header-navbar');
        var headerNavbarMobile = $('.header-navbar-mobile');
        var navbarMobileBtn = $('.js-toggle-navbar-mobile');
        var navbarBtn = $('.js-toggle-navbar');
        var btnCloseNavbar = $('.js-close-navbar');

        navbarBtn.on('click', function () {
            headerNavbar.toggleClass('opened');
        });

        navbarMobileBtn.on('click', function () {
            headerNavbarMobile.slideToggle('fast');
            $(this).toggleClass("is-active");
        });

        btnCloseNavbar.on('click', function () {
            headerNavbar.toggleClass('opened');
        });

        $(window).on('scroll', function (event) {
            headerNavbar.removeClass('opened');
        });


        $(window).on('click', function (event) {
            if (!$(event.target).closest(headerNavbar).length && !$(event.target).closest(navbarBtn).length && headerNavbar.hasClass('opened')) {
                headerNavbar.removeClass('opened');
            }
            if (!$(event.target).closest(headerNavbarMobile).length && !$(event.target).closest(navbarMobileBtn).length && headerNavbar.css('style') !== 'none') {
                headerNavbarMobile.slideUp('fast');
                navbarMobileBtn.removeClass("is-active");
            }
        });

        /* Scroll Like Mac*/
        SmoothScroll({
            keyboardSupport: false,
            animationTime: 560, // [ms]
            stepSize: 100 // [px]
        });

        // Navbar fixed when scroll
        var header = $(".js-header");
        var headerOffset = header.data('scroll-offset');
        jQuery(window).scroll(function () {
            if ($(this).scrollTop() > headerOffset) {
                header.addClass('header-sm pos-fixed');
            } else {
                header.removeClass("header-sm pos-fixed");
            }
        });
        
    });
});