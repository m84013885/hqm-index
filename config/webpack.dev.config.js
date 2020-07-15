const commonConfig = require('./webpack.common.config')
const webpackMerge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const process = require('process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeModuleDir = path.resolve(process.cwd(), 'node_module')
const ip = require('ip')
const port = 8080
const host = ip.address()
const appDir = path.resolve(process.cwd(), 'app')
const { routers } = require('../router.json')
const config = webpackMerge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dll'),
    compress: true,
    port,
    host,
    historyApiFallback: true,
    proxy: {
      '/v1': {
        target: 'http://livetest1.yuanbobo.com',
        pathRewrite: { '^/v1': '' },
        changeOrigin: true
      }
    }
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new HtmlWebpackPlugin({
    //   filename: `index.html`,
    //   title: 'demo',
    //   template: path.join(appDir, 'app.html'),
    //   inject: true,
    //   chunks: ['app']
    // })
  ],
  module: {
    rules: [
      {
        test: new RegExp(`^(?!.*\\.common).*\\.css`),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          },
          'postcss-loader'],
        include: [appDir],
        exclude: [nodeModuleDir]
      },
      {
        test: new RegExp(`^(.*\\.common).*\\.css`),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: [appDir],
        exclude: [nodeModuleDir]
      },
      {
        test: /\.(png|svg|svga|jpg|gif)$/,
        use: [{
          loader: 'url-loader', // file-loader
          options: { limit: 2500 }
        }],
        include: [appDir],
        exclude: [nodeModuleDir]
      }
    ]
  }
})
routers.map((item) => {
  const tempSrc = path.join(appDir, `./${item}/index.html`)
  const plugin = new HtmlWebpackPlugin({
    filename: `${item}`,
    dll: `/dll.js`,
    template: tempSrc,
    inject: true,
    chunks: [item]
  })
  config.entry[item] = [path.resolve(appDir, `./${item}/index.tsx`)]
  config.plugins.push(plugin)
})

module.exports = config
