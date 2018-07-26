var config = {
    deps: [
        "js/custom"
    ],
    map: {
        '*': {
            themepunch_revolution: 'js/revolution/js/jquery.themepunch.revolution.min',
            themepunch_tools: 'js/revolution/js/jquery.themepunch.tools.min',
            revolution_video: 'js/revolution/js/extensions/revolution.extension.video.min',
            revolution_slideanims: 'js/revolution/js/extensions/revolution.extension.slideanims.min',
            revolution_actions: 'js/revolution/js/extensions/revolution.extension.actions.min',
            revolution_layeranimation: 'js/revolution/js/extensions/revolution.extension.layeranimation.min',
            revolution_kenburn: 'js/revolution/js/extensions/revolution.extension.kenburn.min',
            revolution_navigation: 'js/revolution/js/extensions/revolution.extension.navigation.min',
            revolution_migration: 'js/revolution/js/extensions/revolution.extension.migration.min',
            revolution_parallax: 'js/revolution/js/extensions/revolution.extension.parallax.min',
            nicescroll: 'js/jquery.nicescroll.min',
            accordion: 'js/jquery.accordion',
            SmoothScroll: 'js/SmoothScroll',
            remodal: 'js/remodal.min',
            isotope_image: 'js/isotope/imagesloaded.pkgd.min',
            isotope: 'js/isotope/isotope.pkgd.min'
        }
    },
    shim: {
        themepunch_tools: ['jquery'],
        themepunch_revolution: ['jquery', 'themepunch_tools'],
        revolution_video: ['jquery', 'themepunch_tools', 'themepunch_revolution'],
        revolution_slideanims: ['jquery', 'themepunch_tools', 'themepunch_revolution'],
        revolution_actions: ['jquery', 'themepunch_tools', 'themepunch_revolution'],
        revolution_layeranimation: ['jquery', 'themepunch_tools', 'themepunch_revolution'],
        revolution_kenburn: ['jquery', 'themepunch_tools', 'themepunch_revolution'],
        revolution_navigation: ['jquery', 'themepunch_tools', 'themepunch_revolution'],
        revolution_migration: ['jquery', 'themepunch_tools', 'themepunch_revolution'],
        revolution_parallax: ['jquery', 'themepunch_tools', 'themepunch_revolution'],
        nicescroll: ['jquery'],
        accordion: ['jquery'],
        SmoothScroll: ['jquery'],
        remodal: ['jquery'],
        isotope: ['jquery'],
        isotope_image: ['jquery','isotope'],
    }
};