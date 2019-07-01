const path = require('path')

const resolve = (dir) => path.join(__dirname, '..', dir)

module.exports = {
  {{#typescript}}
  entry: './src/index.tsx',
  {{else}}
  entry: './src',
  {{/typescript}}
  output: {
    path: resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'{{#typescript}}, '.ts', '.tsx'{{/typescript}}],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {{#lint}}
      {
        {{#typescript}}
        test: /\.(tsx?|jsx?)$/,
        {{else}}
        test: /\.jsx?$/,
        {{/typescript}}
        enforce: 'pre',
        loader: 'eslint-loader',
        include: resolve('src'),
        options: {
          formatter: require("eslint-friendly-formatter"),
          emitWarning: true
        }
      },
      {{/lint}}
      {{#typescript}}
      {
        test: /\.(tsx?|jsx)$/,
        include: resolve('src'),
        use: 'ts-loader'
      },
      {{else}}
      {
        test: /\.jsx?$/,
        include: resolve('src'),
        use: 'babel-loader'
      },
      {{/typescript}}
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
