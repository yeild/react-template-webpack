const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    hot: true,
    open: true,
    quiet: true,
    clientLogLevel: 'warning',
    // Useful for cross-origin and giving http request a baseURL.
    // See: https://webpack.js.org/configuration/dev-server/#devserver-proxy
    proxy: {},
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      clearConsole: true
    })
  ]
})