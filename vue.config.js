module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],

    pwa: {
      name: 'Konlulu',
      msTileColor: '#728bf3',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/service-worker.js'
      },
      themeColor: '#728bf3'
    },
    devServer: {
      overlay: {
        warnings: false,
        errors: false
      }
    }
}