const path = require('path')

const resolve = (dir) => path.join(__dirname, '..', dir)

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './src/app'
    ]
  },
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {{#lint}}
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: resolve('src'),
        options: {
          formatter: require("eslint-friendly-formatter"),
          emitWarning: true
        }
      },
      {{/lint}}
      {
        test: /\.js$/,
        include: resolve('src'),
        use: 'babel-loader'
      },
      {
        test: /\.(png|gif|svg|jpe?g)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/img/[name].[hash:7].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
