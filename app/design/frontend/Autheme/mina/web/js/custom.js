define([
    'jquery',
    'accordion',
    'nicescroll',
    'SmoothScroll',
    'remodal',
    'owl.carousel/owl.carousel.min'
],function($){
    "use strict";
    jQuery(document).ready(function($) {
        var body = $('body');
        var html = $('html');

        checkContainer();

        function checkContainer () {
            if(jQuery('.iwd_opc_payment_info').is(':visible')) {
                jQuery("#iwd_opc_review").appendTo("#summary-order-opc");
            } else {
                setTimeout(checkContainer, 6000);
            }
        }

        // Navbar menu dropdown

        var customScrollbar = jQuery(".customScrollbar");

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
            
        });

        // Button caret dropdow
        var btnDropdown = jQuery('.js-navbar').find('.navbar-menu i');

        btnDropdown.on('click', function (e) {
            jQuery(this).siblings('.drop-menu').slideToggle('fast', function () {
                customScrollbar.getNiceScroll().resize();
            });
            jQuery(this).siblings('a').toggleClass('active');
            jQuery(this).toggleClass('clicked');
            e.stopPropagation();
        });

        // Navbar vertial and Navbar mobile
        var headerNavbar = jQuery('.header-navbar');
        var headerNavbarMobile = jQuery('.header-navbar-mobile');
        var navbarMobileBtn = jQuery('.js-toggle-navbar-mobile');
        var navbarBtn = jQuery('.js-toggle-navbar');
        var btnCloseNavbar = jQuery('.js-close-navbar');

        navbarBtn.on('click', function () {
            headerNavbar.toggleClass('opened');
        });

        navbarMobileBtn.on('click', function () {
            headerNavbarMobile.slideToggle('fast');
            jQuery(this).toggleClass("is-active");
        });

        btnCloseNavbar.on('click', function () {
            headerNavbar.toggleClass('opened');
        });

        jQuery(window).on('scroll', function (event) {
            headerNavbar.removeClass('opened');
        });


        jQuery(window).on('click', function (event) {
            if (!$(event.target).closest(headerNavbar).length && !$(event.target).closest(navbarBtn).length && headerNavbar.hasClass('opened')) {
                headerNavbar.removeClass('opened');
            }
            if (!$(event.target).closest(headerNavbarMobile).length && !$(event.target).closest(navbarMobileBtn).length && headerNavbar.css('style') !== 'none') {
                headerNavbarMobile.slideUp('fast');
                navbarMobileBtn.removeClass("is-active");
            }
        });

        var owlSelector = jQuery('.owl-carousel');
        owlSelector.each(function () {
            var option = {
                items : 3,
                margin : 0,
                loop : false,
                center : false,
                mousedrag : true,
                touchdrag : true,
                pulldrag : true,
                nav : false,
                navtext : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
                dots : false,
                dotsdata : false,
                autoplay : false,
                smartspeed : 650,
                animateout : null,
                animatein : null,
                xs :  1,
                sm :  2,
                md :  2,
                lg :  3};

            for (var k in option) {
                if (option.hasOwnProperty(k)) {
                    if (jQuery(this).attr('data-carousel-' + k) != null) {
                        option[k] =  jQuery(this).data('carousel-' + k);
                    }
                }
            }


            jQuery(this).owlCarousel({
                margin: option.margin,
                loop: option.loop,
                center: option.center,
                mouseDrag: option.mousedrag,
                touchDrag: option.touchdrag,
                pullDrag: option.pulldrag,
                nav: option.nav,
                navText: option.navtext,
                dots: option.dots,
                dotsData: option.dotsdata,
                autoplay: option.autoplay,
                smartSpeed: option.smartspeed,
                animateIn: option.animatein,
                animateOut: option.animateout,
                responsive: {
                    // breakpoint from 0 up
                    0: {
                        items: option.xs
                    },
                    // breakpoint from 768 up
                    480: {
                        items: option.sm
                    },
                    // breakpoint from 768 up
                    768: {
                        items: option.md
                    },
                    992: {
                        items: option.lg
                    },
                    1200: {
                        items : option.items
                    }
                }
            });

        });

        /* Scroll Like Mac*/
        SmoothScroll({
            keyboardSupport: false,
            animationTime: 560, // [ms]
            stepSize: 100 // [px]
        });

        // Navbar fixed when scroll
        var header = jQuery(".js-header");
        var headerOffset = header.data('scroll-offset');
        jQuery(window).scroll(function () {
            if (jQuery(this).scrollTop() > headerOffset) {
                header.addClass('header-sm pos-fixed');
            } else {
                header.removeClass("header-sm pos-fixed");
            }
        });

        // Modal
        var remodalInst = jQuery('.remodal').remodal();

        /*accordion*/
        var accordion_select = jQuery('.accordion');
        if (accordion_select) {
            accordion_select.each(function () {
                jQuery(this).accordion({
                    "transitionSpeed": 400,
                    transitionEasing: 'ease-in-out'
                });
            });
        }

        // Tooltip
        jQuery('[data-toggle="tooltip"]').tooltip();

        /*Search box1*/
        var searchBox = jQuery('.search-box'),
            searchBtn = jQuery('.search-box .js-btn-search'),
            searchInput = jQuery('.search-box .input-holder');

        searchBtn.on('click', function () {
            searchBox.toggleClass('search-box-open');
            if (searchInput.hasClass('fadeInUp')) {
                searchInput.removeClass('fadeInUp').addClass('fadeOutDown');
            } else if (searchInput.hasClass('fadeOutDown')) {
                searchInput.removeClass('fadeOutDown').addClass('fadeInUp');
            } else {
                searchInput.addClass('fadeInUp');
            }
        });

        /*Input number controller*/
        $('.quantity').each(function() {
            var spinner = $(this),
                input = spinner.find('input[type="number"]'),
                btnUp = spinner.find('.increase'),
                btnDown = spinner.find('.decrease'),
                min = input.attr('min'),
                max = input.attr('max');

            btnUp.click(function() {
                var oldValue = parseFloat(input.val());
                var newVal = undefined;
                if (oldValue >= max) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

            btnDown.click(function() {
                var oldValue = parseFloat(input.val());
                var newVal = undefined;
                if (oldValue <= min) {
                    newVal = oldValue;
                } else {
                    newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });

        });


    });
});