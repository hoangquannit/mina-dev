require([
    'jquery'
],function(){

    jQuery(document).ready(function($) {
        jQuery(".js-toggle-navbar").on("click", function () {
            jQuery(".header-navbar").toggleClass("opened")
        });
        jQuery(".js-toggle-navbar-mobile").on("click", function () {
            jQuery(".header-navbar-mobile").slideToggle("fast");
            jQuery(this).toggleClass("is-active");
        });
        jQuery(".js-close-navbar").on("click", function () {
            jQuery(".header-navbar").toggleClass("opened")
        });
        jQuery(window).on("scroll", function ($) {
            jQuery(".header-navbar").removeClass("opened")
        });
        
        jQuery(window).on("click", function (e) {
            jQuery(e.target).closest(r).length ||
            jQuery(e.target).closest(c).length ||
            !jQuery(".header-navbar").hasClass("opened") ||
            jQuery(".header-navbar").removeClass("opened"),
            jQuery(e.target).closest(a).length ||
            jQuery(e.target).closest(l).length ||
            "none" === jQuery(".header-navbar").css("style") ||
            (jQuery(".header-navbar-mobile").slideUp("fast"), jQuery(".js-toggle-navbar-mobile").removeClass("is-active"));
        });

        jQuery(".js-navbar").find(".navbar-menu i").on("click", function (e) {
            jQuery(this).siblings(".drop-menu").slideToggle("fast");
            jQuery(this).siblings("a").toggleClass("active");
            jQuery(this).toggleClass("clicked");
            e.stopPropagation();
        });
        
    });
});