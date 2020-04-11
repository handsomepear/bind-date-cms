module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/': {
        target: 'https://www.geinigejuzichi.top/api_server/'
      }
    }
  }
}
