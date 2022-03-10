const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    chainWebpack: config => {

        config.module
            .rule('svg-sprite')
            .use('svgo-loader')
            .loader('svgo-loader')
        config.module
            .rule('i18n')
            .resourceQuery(/blockType=i18n/)
            .type('javascript/auto')
            .use('i18n')
            .loader('@kazupon/vue-i18n-loader')
            .end()
    },
    pluginOptions: {
      svgSprite: {
        dir: 'src/assets/svg-sprites',
        test: /\.(svg)(\?.*)?$/,
        loaderOptions: {
          extract: true,
          spriteFilename: 'img/icons.[hash:8].svg'
        },
        pluginOptions: {
          plainSprite: true
        }
      },
      i18n: {
        locale: 'RU',
        fallbackLocale: 'RU',
        localeDir: 'n',
        enableLegacy: false,
        runtimeOnly: false,
        compositionOnly: false,
        fullInstall: true
      }
    },
})
