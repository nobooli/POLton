module.exports = {
    "transpileDependencies": [
        "vuetify"
    ],
    runtimeCompiler: true,

    pwa: {
      name: 'Pol',
      msTileColor: '#bb2830',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        swSrc: 'src/service-worker.js'
      },
      themeColor: '#bb2830'
    },
    devServer: {
      overlay: {
        warnings: false,
        errors: false
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
      ? '/POLton/' // Don't leave uncommented while developing
      : '/'
}