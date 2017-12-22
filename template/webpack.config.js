const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/main',
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: path.resolve(__dirname, 'src'),
        options: {
          formatter: require("eslint-friendly-formatter"),
          emitWarning: true
        }
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader'
      },
      {
        test: /\.(png|git|svg|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  devServer: {
    hot: true,
    open: true,
    quiet: true,
    clientLogLevel: 'warning', /*
     overlay: {
     warnings: false,
     errors: true,
     }*/
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: true
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsWebpackPlugin({
      onErrors: (severity, errors) => {
        if (severity !== 'error') {
          return
        }
      },
      clearConsole: true
    })
    /*    new CopyWebpackPlugin([
     {
     from: path.resolve(__dirname, './static'),
     to: 'static'
     }
     ]) */
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  }
}