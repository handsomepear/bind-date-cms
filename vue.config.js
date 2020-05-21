module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/main/cms' : '/',
  outputDir: 'cms',
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/': {
        target: 'https://www.geinigejuzichi.top/api_server/'
      }
    }
  }
}
