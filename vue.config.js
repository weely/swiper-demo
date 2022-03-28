'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  filenameHashing: true,
  devServer: {
    // host: 'local.gpsoo.net',
    host: '0.0.0.0',
    port: process.env.port || 8080,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  },
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        implementation: require('sass'),
      },
    },
  },
  configureWebpack: config => {
    config.resolve.alias = {
      '@': resolve('src')
    }
  }
}