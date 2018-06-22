require([
    'jquery',
    'SmoothScroll'
],function(){

    jQuery(document).ready(function($) {
        /* Scroll Like Mac*/
        SmoothScroll({
            keyboardSupport: false,
            animationTime: 560, // [ms]
            stepSize: 100 // [px]
        });
    });
});