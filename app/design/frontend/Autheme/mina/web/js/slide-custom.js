require([
    'jquery',
    'themepunch_tools', 'themepunch_revolution', 'revolution_video',
    'revolution_slideanims', 'revolution_actions', 'revolution_layeranimation', 'revolution_kenburn',
    'revolution_navigation', 'revolution_migration', 'revolution_parallax'
],function(){
    jQuery(document).ready(function($) {
        jQuery(".js-slide").each(function () {
            var t = {layout: "auto", delay: 5e3, height: 500, arrows: !0, bullets: !0};
            for (var a in t)t.hasOwnProperty(a) && null != jQuery(this).attr("data-slide-" + a) && (t[a] = jQuery(this).data("slide-" + a));
            jQuery(this).show().revolution({
                responsiveLevels: [1200, 992, 768, 480],
                gridwidth: [1240, 1e3, 800, 500],
                sliderLayout: t.layout,
                delay: t.delay,
                minHeight: t.height,
                spinner: "spinner2",
                navigation: {
                    onHoverStop: "off",
                    arrows: {enable: t.arrows, hide_onleave: !0},
                    bullets: {
                        enable: t.bullets,
                        style: "zeus",
                        hide_onleave: !1,
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 20,
                        space: 5
                    }
                }
            })
        })
    });
});