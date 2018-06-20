var config = {
    map: {
        '*': {
            compressed: 'js/compressed.min',
            themepunch_revolution: 'js/jquery.themepunch.revolution.min',
            themepunch_tools: 'js/jquery.themepunch.tools.min',
            revolution_video: 'js/revolution/revolution.extension.video.min',
            revolution_slideanims: 'js/revolution/revolution.extension.slideanims.min',
            revolution_actions: 'js/revolution/revolution.extension.actions.min',
            revolution_layeranimation: 'js/revolution/revolution.extension.layeranimation.min',
            revolution_kenburn: 'js/revolution/revolution.extension.kenburn.min',
            revolution_navigation: 'js/revolution/revolution.extension.navigation.min',
            revolution_migration: 'js/revolution/revolution.extension.migration.min',
            revolution_parallax: 'js/revolution/revolution.extension.parallax.min',

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
        compressed: ['jquery']
    }
};