module.exports = {
  // baseUrl: '',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/keep-ui/'
    : '/',
  // outputDir: './dist',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add('/packages')
        .end()
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          // 修改其它选项
          return options
        })
  }
}
