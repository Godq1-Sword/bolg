'use strict'

module.exports = {
  // 公共路径
  publicPath: '/bolg/',
  // 输出文件目录
  outputDir: 'bolg-frontend',
  // 静态资源
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  // 是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: false,
  // 不需要生产环境的设置false可以减小dist文件大小，加速构建
  productionSourceMap: true,
  // 代理
  devServer: {
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 9527, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    proxy: {
      '/core': {
        target: 'http://localhost:7436',
        changeOrigin: true,
        pathRewrite: {
          '^/core': ''
        }
      }
    }
  }
}
