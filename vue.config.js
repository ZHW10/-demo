

const px2rem = require('postcss-px2rem')
// 配置postcs-px2rem
const postcss = px2rem({
  remUnit: 75   // 设计稿10等分之后的值
})



module.exports = {
  runtimeCompiler: true,

  // 关闭enlint语法检查
  lintOnSave: false,

  // 不生成 source map文件
  productionSourceMap: false,

  css: { // 添加postcss配置
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/163': {
        target: 'https://m.you.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/163': ''
        }
      }
    }
  }
}

